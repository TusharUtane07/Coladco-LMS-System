from django.urls import path
from .views import (
    CourseViewSet, CourseSingleView,
    ModuleViewSet, ModuleSingleView,
    VideoViewSet, VideoSingleView,
    ReviewViewSet, ReviewSingleView,
    NewReviewPostSet
)

urlpatterns = [
    path('/all-courses-fetch/',  CourseViewSet.as_view(), name='all-courses-fetch'),
    path('/single-courses-fetch/',  CourseSingleView.as_view(), name='single-courses-fetch'),
    path('/single-courses-update/', CourseSingleView.as_view(), name='single-courses-update'),
    path('/single-courses-delete/', CourseSingleView.as_view(), name='single-courses-delete'), 
    
    path('/all-modules-fetch/',  ModuleViewSet.as_view(), name='all-modules-fetch'),
    path('/single-modules-fetch/',  ModuleSingleView.as_view(), name='single-modules-fetch'),
    path('/single-modules-update/', ModuleSingleView.as_view(), name='single-modules-update'),
    path('/single-modules-delete/', ModuleSingleView.as_view(), name='single-modules-delete'), 
    
    path('/all-videos-fetch/',  VideoViewSet.as_view(), name='all-videos-fetch'),
    path('/single-videos-fetch/',  VideoSingleView.as_view(), name='single-videos-fetch'),
    path('/single-videos-update/', VideoSingleView.as_view(), name='single-videos-update'),
    path('/single-videos-delete/', VideoSingleView.as_view(), name='single-videos-delete'), 
    
    path('/all-reviews-fetch/',  ReviewViewSet.as_view(), name='all-reviews-fetch'),
    path('/new-review-course/', NewReviewPostSet.as_view(), name='new-review-course'),
    path('/single-reviews-fetch/',  ReviewSingleView.as_view(), name='single-reviews-fetch'),
    path('/single-reviews-update/', ReviewSingleView.as_view(), name='single-reviews-update'),
    path('/single-reviews-delete/', ReviewSingleView.as_view(), name='single-reviews-delete'), 
]
