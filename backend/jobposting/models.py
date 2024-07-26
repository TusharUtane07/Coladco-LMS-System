from django.db import models
from datetime import datetime

class JobPosting(models.Model):
    company_name = models.CharField(max_length=255)
    years_of_experience = models.TextField()
    description = models.TextField()
    job_profile = models.CharField(max_length=255, default="")
    link = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    
    class Meta:
        managed = True
        db_table = "jobposting"
