from django.urls import path
from backend.views import *
from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path('test', test),
    path('login', obtain_jwt_token),
    path('get_tokens', TrelloTokensApi.as_view())
]
