from django.contrib import admin

from .models import Post, PostComments, PostLike

admin.site.register(Post)
admin.site.register(PostComments)
admin.site.register(PostLike)
