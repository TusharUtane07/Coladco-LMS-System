from django.db import models
from django.utils import timezone

class User(models.Model):
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=100, null=True)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        managed = True
        db_table = "user"

class Profile(models.Model):
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, unique=True)
    instagram = models.TextField(default="")
    linkedin = models.TextField(default="")
    twitter = models.TextField(default="")
    bio = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_profile", default=1)
    profile_image = models.ImageField(upload_to='profile_images/')

    class Meta:
        managed = True
        db_table = "profile"
