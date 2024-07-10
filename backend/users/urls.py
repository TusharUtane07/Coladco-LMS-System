
from django.urls import path

from .views import UserSingleView, UserViewSet, ProfileViewSet, profileSingleView

urlpatterns = [
    path('all-profile-fetch/',  ProfileViewSet.as_view(), name='all-profile-fetch'),
    path('single-profile-fetch/',  profileSingleView.as_view(), name='single-profile-fetch'),
    
    path('all-users-fetch/',  UserViewSet.as_view(), name='all-users-fetch'),
    path('single-users-fetch/',  UserSingleView.as_view(), name='single-users-fetch'),
]
