# Generated by Django 3.1.7 on 2021-03-29 12:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tag_sentenze', '0006_auto_20210329_1434'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sentenza',
            name='output_xml',
            field=models.FileField(editable=False, null=True, upload_to='uploads/'),
        ),
    ]