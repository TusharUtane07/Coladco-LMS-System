from django.contrib import admin

from .models import UserDefault, Profile, OtpVerify

# Register your models here.
admin.site.register(UserDefault)
admin.site.register(OtpVerify)
admin.site.register(Profile)
