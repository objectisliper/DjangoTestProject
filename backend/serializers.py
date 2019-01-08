from rest_framework import serializers
from .models import *


class TrelloTokensSerializer(serializers.ModelSerializer):

    class Meta:
        model = TrelloTokens
        fields = ["api_key", "token"]


class CardsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cards
        fields = ["token", "name", "description"]


class ListsSerializer(serializers.ModelSerializer):
    cards_set = CardsSerializer(many=True)

    class Meta:
        model = Lists
        fields = ["name", "cards_set"]


class DashboardsSerializer(serializers.ModelSerializer):
    lists_set = ListsSerializer(many=True)

    class Meta:
        model = Dashboards
        fields = ["token", "name", "lists_set"]
