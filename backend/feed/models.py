from django.db import models
from users.models import Profile

class Post(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="feed")
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        managed = True
        db_table = "feed"

class PostComments(models.Model):
    Post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="post_comments")
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="profile_comments")
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = True
        db_table = "post_comments"
