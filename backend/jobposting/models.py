from django.db import models

class JobPosting(models.Model):
    company_name = models.CharField(max_length=255)
    years_of_experience = models.PositiveIntegerField()
    description = models.TextField()
    link = models.URLField()
    
    class Meta:
        managed = True
        db_table = "jobposting"
