# Generated by Django 3.1.7 on 2021-03-29 13:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tag_sentenze', '0014_auto_20210329_1518'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sentenza',
            old_name='title',
            new_name='nome',
        ),
    ]