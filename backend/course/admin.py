from django.contrib import admin

from .models import Course, Module, Review, Video

# Register your models here.
admin.site.register(Course)
admin.site.register(Module)
admin.site.register(Review)
admin.site.register(Video)
