from django.db import models
from django.utils import timezone

from django.contrib.auth.models import User
# Create your models here.


class TrelloTokens(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    api_key = models.CharField(max_length=200)
    token = models.CharField(max_length=200)
    expiration_date = models.DateTimeField(default=timezone.now)

    def get_tokens(self):
        return self.api_key, self.token


class Dashboards(models.Model):
    description = models.TextField(null=True)
    token = models.CharField(max_length=200, unique=True)
    name = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Lists(models.Model):
    dashboard_token = models.ForeignKey(Dashboards, to_field='token', on_delete=models.CASCADE)
    token = models.CharField(max_length=200, unique=True)
    name = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Cards(models.Model):
    list_token = models.ForeignKey(Lists, to_field='token', on_delete=models.CASCADE)
    token = models.CharField(max_length=200, unique=True)
    name = models.CharField(max_length=200)
    description = models.TextField(null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
