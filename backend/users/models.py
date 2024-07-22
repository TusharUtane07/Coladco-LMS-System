from django.db import models
from django.utils import timezone

class UserDefault(models.Model):
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=100, null=True)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        managed = True
        db_table = "userDefault"

class Profile(models.Model):
    user = models.ForeignKey(UserDefault, on_delete=models.CASCADE, related_name="user_profile", null=True)
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=30)
    gender = models.CharField(max_length=3)
    phone_number = models.CharField(max_length=15, unique=True)
    instagram = models.TextField(null=True)
    facebook = models.TextField(null=True)
    github = models.TextField(null=True)
    linkedin = models.TextField(null=True)
    twitter = models.TextField(null=True)
    bio = models.TextField()
    is_verified = models.BooleanField(default=False)
    profile_image = models.ImageField(upload_to='profile_images/')

    class Meta:
        managed = True
        db_table = "profile"


class OtpVerify(models.Model):
    phone_number = models.CharField(max_length=12)
    otp = models.CharField(max_length=7, null=True)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        managed = True
        db_table = "otp_verify"
