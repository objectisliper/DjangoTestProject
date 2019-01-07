# Generated by Django 2.1.4 on 2019-01-03 10:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0011_auto_20181225_1541'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cards',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token', models.CharField(max_length=200, unique=True)),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Dashboards',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(null=True)),
                ('token', models.CharField(max_length=200, unique=True)),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Lists',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token', models.CharField(max_length=200, unique=True)),
                ('name', models.CharField(max_length=200)),
                ('dashboard_token', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Dashboards', to_field='token')),
            ],
        ),
        migrations.AddField(
            model_name='cards',
            name='list_token',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Lists', to_field='token'),
        ),
    ]
