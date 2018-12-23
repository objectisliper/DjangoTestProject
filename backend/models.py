from django.db import models

# Create your models here.


class TrelloTokens(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    api_key = models.CharField(max_length=200, null=True)
    api_secret = models.CharField(max_length=200, null=True)

    def update(self, api_key, api_secret):
        self.api_key = api_key
        self.api_secret = api_secret
        self.save()

    def get_tokens(self):
        return self.api_key, self.api_secret
