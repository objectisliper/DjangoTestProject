# Generated by Django 2.1.4 on 2018-12-24 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_auto_20181224_0944'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trellotokens',
            name='api_key',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='trellotokens',
            name='token',
            field=models.CharField(max_length=200),
        ),
    ]
