from trello import TrelloClient
from django.http import HttpResponse
from backend.models import *
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import TrelloTokensSerializer, DashboardsSerializer, CardsSerializer
from .tasks import scrub_tokens_and_start_api_requests, update_card


def test(request):
    api_key, token = TrelloTokens.objects.get(user_id=1).get_tokens()
    client = TrelloClient(
        api_key=api_key,
        token=token
    )
    all_boards = client.list_boards()
    lists = []
    identifiers = []
    list_identifiers_db2 = set([list_from_db.token for list_from_db in TrelloTokens.objects.filter(user_id=1).all()])
    list_identifiers_db = set([list_from_db.token for list_from_db in TrelloTokens.objects.all()]) - list_identifiers_db2
    for board in all_boards:
        lists.append(board.list_lists())
    for lists_from_api in lists:
        for list_from_api in lists_from_api:
            identifiers.append(list_from_api.id)
    scrub_tokens_and_start_api_requests()
    return HttpResponse('test')


class TrelloTokensApi(APIView):

    def get(self, request):
        tokens = TrelloTokens.objects.filter(user_id=request.user.id).first()
        serialized_tokens = TrelloTokensSerializer(tokens)
        return Response({"data": serialized_tokens.data})

    def put(self, request):
        tokens, is_created = TrelloTokens.objects.update_or_create(
                                        user_id=request.user.id,
                                        defaults={'token': request.data['token'],
                                                  'api_key': request.data['api_key']})
        serialized_tokens = TrelloTokensSerializer(tokens)
        return Response({"data": serialized_tokens.data})


class DashboardsApi(APIView):

    def get(self, request):
        dashboards = Dashboards.objects.filter(user_id=request.user.id).select_related().all()
        serialized_dashboards = DashboardsSerializer(dashboards, many=True)
        return Response({"data": serialized_dashboards.data})

    def put(self, request):
        tokens = TrelloTokens.objects.filter(user_id=request.user.id).first()
        update_card.delay(tokens.api_key, tokens.token, request.data['token'], request.data['name'],
                          request.data['description'])
        Cards.objects.filter(token=request.data['token']).update(name=request.data['name'],
                                                                 description=request.data['description'])
        return Response({"success": True})
