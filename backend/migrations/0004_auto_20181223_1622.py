# Generated by Django 2.1.4 on 2018-12-23 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_auto_20181223_1500'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trellotokens',
            name='api_key',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trellotokens',
            name='api_secret',
            field=models.CharField(max_length=200, null=True),
        ),
    ]