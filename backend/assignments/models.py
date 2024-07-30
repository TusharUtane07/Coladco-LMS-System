from django.db import models
from course.models import Module

class Assignments(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name="assignments")
    title = models.CharField(max_length=255)
    thumbnail = models.ImageField(upload_to='assignments/', default="")
    description = models.TextField()

    class Meta:
        managed = True
        db_table = "assignments"