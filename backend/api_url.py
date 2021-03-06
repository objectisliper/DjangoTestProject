from django.urls import path
from backend.views import TrelloTokensApi, DashboardsApi, CardsApi, UserApi
from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path('login', obtain_jwt_token),
    path('tokens', TrelloTokensApi.as_view()),
    path('dashboards', DashboardsApi.as_view()),
    path('cards', CardsApi.as_view()),
    path('user', UserApi.as_view())
]
