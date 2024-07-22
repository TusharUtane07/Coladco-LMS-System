from django.db import models
from users.models import Profile


class Course(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to='thumbnails/')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    
    class Meta:
        managed = True
        db_table = "course"
        
class Module(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="modules")
    name = models.CharField(max_length=200)
    description = models.TextField()

    class Meta:
        managed = True
        db_table = "modules"
        
class Video(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name="videos")
    title = models.CharField(max_length=255)
    url = models.URLField()
    is_trail = models.BooleanField(default=False)

    class Meta:
        managed = True
        db_table = "video"
        
class Review(models.Model):
    course = models.ForeignKey(Course, related_name='reviews', on_delete=models.CASCADE)
    # profile = models.ForeignKey(Profile, related_name='profile_reviews', on_delete=models.CASCADE, default=1)
    review_text = models.TextField()
    rating = models.DecimalField(max_digits=5, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = True
        db_table = "review"