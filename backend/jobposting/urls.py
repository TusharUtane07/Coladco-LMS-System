from django.urls import path
from .views import JobPostingViewSet, JobPostingSingleView

urlpatterns = [
    path('/all-job-postings-fetch/', JobPostingViewSet.as_view(), name='all-job-postings-fetch'),
    path('/single-job-posting-fetch/', JobPostingSingleView.as_view(), name='single-job-posting-fetch'),
    path('/single-job-posting-update/', JobPostingSingleView.as_view(), name='single-job-posting-update'),
    path('/single-job-posting-delete/', JobPostingSingleView.as_view(), name='single-job-posting-delete'),
]
