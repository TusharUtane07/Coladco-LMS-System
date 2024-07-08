from django.db import models
from django.utils import timezone

class Profile(models.Model):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=20, unique=True)
    phone_number = models.CharField(max_length=15, unique=True)
    social = models.JSONField()
    bio = models.TextField()
    profile_image = models.ImageField(upload_to='profile_images/')

    class Meta:
        managed = True
        db_table = "profile"

class User(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="user")
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=100, null=True)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        managed = True
        db_table = "user"