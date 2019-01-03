from __future__ import absolute_import, unicode_literals
from celery import task
from .models import TrelloTokens, Dashboards, Lists, Cards
from trello import TrelloClient


@task()
def task_number_one():
    return 'test'


@task()
def scrub_tokens_and_start_api_request():
    tokens = TrelloTokens.objects.all()
    for token in tokens:
        get_all_from_trello_api.delay(token.user_id, token.api_key, token.token)
    return True


@task()
def get_all_from_trello_api(user_id, api_key, api_token):
    client = TrelloClient(
        api_key=api_key,
        token=api_token
    )
    all_boards_from_api = client.list_boards()
    all_boards_from_db = Dashboards.objects.filter(user_id=user_id).all()
    board_identifiers_api = set()
    board_identifiers_db = set()
    list_identifiers_api = set()
    list_identifiers_db = set()
    card_identifiers_api = set()
    card_identifiers_db = set()
    for board in all_boards_from_api:
        board_identifiers_api.add(board.id)
        board_lists = board.list_lists()
        for lists_from_api in board_lists:
            for list_from_api in lists_from_api:
                list_identifiers_api.add(list_from_api.id)
                list_cards = list_from_api.list_cards()
                for card in list_cards:
                    card_identifiers_api.add(card.id)

    for board in all_boards_from_db:
        board_identifiers_db.add(board.token)
    board_identifiers_to_insert = board_identifiers_api - board_identifiers_db

    all_lists_from_db = Lists.objects.filter(user_id=user_id).all()
    for list in all_lists_from_db:
        list_identifiers_db.add(list.token)
    list_identifiers_to_insert = list_identifiers_api - list_identifiers_db

    all_cards_from_db = Cards.objects.filter(user_id=user_id).all()
    for card in all_cards_from_db:
        card_identifiers_db.add(card.token)
    card_identifiers_to_insert = card_identifiers_api - card_identifiers_db

