from rest_framework import serializers
from .models import TrelloTokens


class TrelloTokensSerializers(serializers.ModelSerializer):

    class Meta:
        model = TrelloTokens
        fields = ["api_key", "token"]
