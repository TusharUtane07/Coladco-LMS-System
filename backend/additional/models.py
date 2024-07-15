from django.db import models
from users.models import Profile
from course.models import Course
from course.models import Video
from course.models import Module

class Bookmarks(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="bookmarks")
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name="bookmarks")
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name="bookmarks")
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        managed = True
        db_table = "bookmarks"
        
class TechToLearn(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to='techImages/')
    
    class Meta:
        managed = True
        db_table = "techtolearn"
        
class Subscriptions(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="subscriptions")
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="coursesubscription")
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        managed = True
        db_table = "subscriptions"