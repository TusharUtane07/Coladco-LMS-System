# Generated by Django 5.0.6 on 2024-07-22 09:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0013_remove_otpverify_user_otpverify_phone_number_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='facebook',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='github',
            field=models.TextField(null=True),
        ),
    ]
