from django.shortcuts import render
from trello import TrelloClient, create_oauth_token
from django.http import HttpResponse
from backend.models import TrelloTokens
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from .serializers import TrelloTokensSerializers


def test(request):
    api_key, api_secret = TrelloTokens.objects.get(user_id=1).get_tokens()
    token = create_oauth_token("never", key=api_key, secret=api_secret)
    client = TrelloClient(
        api_key=api_key,
        token="30c8f43af482cff82773cf55a8a75e75711fde453fc2de1b2644be7ebf1ffb64"
    )
    all_boards = client.list_boards()
    return HttpResponse('test')


class TrelloTokensApi(APIView):

    def get(self, request):
        tokens = TrelloTokens.objects.filter(user_id=request.user.id)
        serialized_tokens = TrelloTokensSerializers(tokens, many=True)
        return Response({"data": serialized_tokens.data})
