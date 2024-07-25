from django.db import models
from .models import JobPosting

class JobPostingManager:

    @staticmethod
    def get_all_job_postings(data):
        all_job_postings_objs = JobPosting.objects.all()
        return all_job_postings_objs

    @staticmethod
    def get_single_job_posting(data):
        job_posting_id = data.get("jobPostingId", False)
        if not job_posting_id:
            raise Exception("No job posting id provided")
        job_posting = JobPosting.objects.filter(id=job_posting_id).first()
        if job_posting is None:
            raise Exception("Job posting not found")
        return job_posting
    
    @staticmethod
    def update_single_job_posting(data):
        job_posting_id = data.get("jobPostingId", False)
        if not job_posting_id:
            raise Exception("No job posting id provided")
        
        job_posting = JobPosting.objects.filter(id=job_posting_id).first()
        if job_posting is None:
            raise Exception("Job posting not found")
        
        job_posting.company_name = data.get("companyName", job_posting.company_name)
        job_posting.company_job_profile = data.get("jobProfile", job_posting.job_profile)
        job_posting.years_of_experience = data.get("yearsOfExperience", job_posting.years_of_experience)
        job_posting.description = data.get("description", job_posting.description)
        job_posting.link = data.get("link", job_posting.link)
        job_posting.save()
        
        return job_posting

    @staticmethod
    def delete_single_job_posting(data):
        job_posting_id = data.get("jobPostingId", False)
        if not job_posting_id:
            raise Exception("No job posting id provided")
        
        job_posting = JobPosting.objects.filter(id=job_posting_id).first()
        if job_posting is None:
            raise Exception("Job posting not found")
        
        job_posting.delete()
        
        return job_posting

    @staticmethod
    def post_new_job_posting(data):
        company_name = data.get('companyName')
        years_of_experience = data.get('yearsOfExperience')
        description = data.get('description')
        job_profile = data.get('jobProfile')
        link = data.get('link')

        JobPosting.objects.create(company_name=company_name, years_of_experience = years_of_experience,
                                  description= description, job_profile= job_profile, link = link)

