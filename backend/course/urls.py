from django.urls import path
from .views import CourseViewSet, CourseSingleView, ModuleViewSet, ModuleSingleView, VideoViewSet, VideoSingleView, \
    ReviewViewSet, ReviewSingleView, deleteSingleCourse

urlpatterns = [
    path('all-courses-fetch/',  CourseViewSet.as_view(), name='all-courses-fetch'),
    path('single-courses-fetch/',  CourseSingleView.as_view(), name='single-courses-fetch'),
    
    path('all-modules-fetch/',  ModuleViewSet.as_view(), name='all-modules-fetch'),
    path('single-modules-fetch/',  ModuleSingleView.as_view(), name='single-modules-fetch'),
    
    path('all-videos-fetch/',  VideoViewSet.as_view(), name='all-videos-fetch'),
    path('single-videos-fetch/',  VideoSingleView.as_view(), name='single-videos-fetch'),
    
    path('all-reviews-fetch/',  ReviewViewSet.as_view(), name='all-reviews-fetch'),
    path('single-reviews-fetch/',  ReviewSingleView.as_view(), name='single-reviews-fetch'),
    path('update-single-course/', CourseSingleView.as_view(), name='update-users-fetch'),
    path('delete-single-course/', deleteSingleCourse.as_view(), name='delete-single-course'),

]
