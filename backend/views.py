from django.shortcuts import render
from trello import TrelloClient, create_oauth_token
from django.http import HttpResponse
from backend.models import TrelloTokens


def test(request):
    api_key, api_secret = TrelloTokens.objects.get(user_id=1).get_tokens()
    token = create_oauth_token("never", key=api_key, secret=api_secret)
    client = TrelloClient(
        api_key=api_key,
        token="30c8f43af482cff82773cf55a8a75e75711fde453fc2de1b2644be7ebf1ffb64"
    )
    all_boards = client.list_boards()
    return HttpResponse('test')
