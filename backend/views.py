from backend.models import *
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView, status
from .serializers import TrelloTokensSerializer, DashboardsSerializer, UserSerializer
from .tasks import update_card


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

    def delete(self, request):
        TrelloTokens.objects.filter(user_id=request.user.id).delete()
        Dashboards.objects.filter(user_id=request.user.id).delete()
        return Response(status=status.HTTP_200_OK)


class DashboardsApi(APIView):

    def get(self, request):
        dashboards = Dashboards.objects.filter(user_id=request.user.id).select_related().all()
        serialized_dashboards = DashboardsSerializer(dashboards, many=True)
        return Response({"data": serialized_dashboards.data})


class CardsApi(APIView):

    def put(self, request):
        tokens = TrelloTokens.objects.filter(user_id=request.user.id).first()
        update_card.delay(tokens.api_key, tokens.token, request.data['token'], request.data['name'],
                          request.data['description'])
        Cards.objects.filter(token=request.data['token']).update(name=request.data['name'],
                                                                 description=request.data['description'])
        return Response({"success": True})


class UserApi(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        serialized = UserSerializer(data=request.data)
        if serialized.is_valid():
            User.objects.create_user(
                email=serialized.data['email'],
                username=serialized.data['username'],
                password=serialized.data['password']
            )
            return Response({"data": serialized.data}, status=status.HTTP_201_CREATED)
        else:
            return Response({"errors": serialized._errors}, status=status.HTTP_400_BAD_REQUEST)
