from django.db import models
from django.utils import timezone

from django.contrib.auth.models import User
# Create your models here.


class TrelloTokens(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    api_key = models.CharField(max_length=200)
    token = models.CharField(max_length=200)
    expiration_date = models.DateTimeField(default=timezone.now)

    def update(self, api_key, api_secret):
        self.api_key = api_key
        self.api_secret = api_secret
        self.save()

    def get_tokens(self):
        return self.api_key, self.api_secret
