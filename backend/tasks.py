from __future__ import absolute_import, unicode_literals
from celery import task
from .models import TrelloTokens, Dashboards, Lists, Cards
from trello import TrelloClient
from django.db import transaction


@task(queue='update_card')
def update_card(api_key, api_token, card_id, name, description):
    client = TrelloClient(
        api_key=api_key,
        token=api_token
    )
    card = client.get_card(card_id)
    card.set_name(name)
    card.set_description(description)


@task()
def scrub_tokens_and_start_api_requests():
    tokens = TrelloTokens.objects.all()
    for token in tokens:
        get_all_from_trello_api.delay(token.user_id, token.api_key, token.token)
    return True


@task(queue='api_scrubs')
def get_all_from_trello_api(user_id, api_key, api_token):
    client = TrelloClient(
        api_key=api_key,
        token=api_token
    )
    all_boards_from_api = client.list_boards()
    board_identifiers_api = set()
    list_identifiers_api = set()
    card_identifiers_api = set()
    dashboards = []
    lists = []
    cards = []
    for board in all_boards_from_api:
        board_identifiers_api.add(board.id)
        board_lists = board.list_lists()
        dashboards.append(Dashboards(description=board.description, token=board.id, name=board.name, user_id=user_id))
        for list_from_api in board_lists:
            list_identifiers_api.add(list_from_api.id)
            list_cards = list_from_api.list_cards()
            lists.append(Lists(dashboard_token_id=board.id, token=list_from_api.id, name=list_from_api.name,
                               user_id=user_id))
            for card in list_cards:
                card_identifiers_api.add(card.id)
                cards.append(Cards(list_token_id=list_from_api.id, token=card.id, name=card.name,
                                   description=card.description, user_id=user_id))

    board_identifiers_to_insert = board_identifiers_api - set(
        [board_from_db.token for board_from_db in Dashboards.objects.filter(user_id=user_id).all()])

    list_identifiers_to_insert = list_identifiers_api - set(
        [list_from_db.token for list_from_db in Lists.objects.filter(user_id=user_id).all()])

    card_identifiers_to_insert = card_identifiers_api - set(
        [card_from_db.token for card_from_db in Cards.objects.filter(user_id=user_id).all()])

    dashboards_to_insert = [dashboard for dashboard in dashboards if dashboard.token in board_identifiers_to_insert]
    dashboards_to_update = [dashboard for dashboard in dashboards if dashboard.token not in board_identifiers_to_insert]

    lists_to_insert = [list_from_api for list_from_api in lists if list_from_api.token in list_identifiers_to_insert]
    lists_to_update = [list_from_api for list_from_api in lists if
                       list_from_api.token not in list_identifiers_to_insert]

    cards_to_insert = [card for card in cards if card.token in card_identifiers_to_insert]
    cards_to_update = [card for card in cards if card.token not in card_identifiers_to_insert]

    Dashboards.objects.bulk_create(dashboards_to_insert)

    Lists.objects.bulk_create(lists_to_insert)

    Cards.objects.bulk_create(cards_to_insert)

    with transaction.atomic():
        if dashboards_to_update:
            for dashboard in dashboards_to_update:
                Dashboards.objects.filter(token=dashboard.token).update(description=dashboard.description,
                                                                        name=dashboard.name, user_id=user_id)
    with transaction.atomic():
        if lists_to_update:
            for list_from_api in lists_to_update:
                Lists.objects.filter(token=list_from_api.token).update(name=list_from_api.name, user_id=user_id,
                                                                       dashboard_token_id=list_from_api.dashboard_token_id)
    with transaction.atomic():
        if cards_to_update:
            for card in cards_to_update:
                Cards.objects.filter(token=card.token).update(description=card.description,
                                                              list_token_id=card.list_token_id,
                                                              name=card.name, user_id=user_id)
