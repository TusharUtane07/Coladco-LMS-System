# Generated by Django 5.0.4 on 2024-07-21 08:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_alter_profile_user_otpverify'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='is_verified',
            field=models.BooleanField(default=False),
            preserve_default=False,
        ),
    ]
