# Generated by Django 5.0.4 on 2024-07-20 06:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feed', '0009_delete_comments'),
        ('users', '0002_remove_profile_social_remove_profile_username_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='PostComments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('Post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='post_comments', to='feed.post')),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile_comments', to='users.profile')),
            ],
            options={
                'db_table': 'post_comments',
                'managed': True,
            },
        ),
    ]
