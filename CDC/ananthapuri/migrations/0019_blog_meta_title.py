# Generated by Django 5.0.6 on 2024-08-12 07:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("ananthapuri", "0018_contact"),
    ]

    operations = [
        migrations.AddField(
            model_name="blog",
            name="meta_title",
            field=models.CharField(default="blog", max_length=30),
        ),
    ]
