# Generated by Django 5.0.6 on 2024-07-25 09:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0005_remove_review_rating'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='rating',
            field=models.IntegerField(choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')], default=0),
        ),
    ]
