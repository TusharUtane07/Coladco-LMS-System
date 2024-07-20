from django.urls import path

from .views import UserSingleView, UserViewSet, ProfileViewSet, ProfileSingleView, GetLoginToken, RegisterUser

urlpatterns = [
    path('/login-user', GetLoginToken.as_view(), name='login-user'),
    path('/register-profile', RegisterUser.as_view(), name='register-profile'),
    path('/all-profile-fetch', ProfileViewSet.as_view(), name='all-profile-fetch'),
    path('/single-profile-fetch/', ProfileSingleView.as_view(), name='single-profile-fetch'),
    path('/single-profile-update/', ProfileSingleView.as_view(), name='single-profile-update'),
    path('/single-profile-delete/', ProfileSingleView.as_view(), name='single-profile-delete'),
    
    path('/all-users-fetch/', UserViewSet.as_view(), name='all-users-fetch'),
    path('/single-users-fetch/', UserSingleView.as_view(), name='single-users-fetch'),
    path('/single-users-update/', UserSingleView.as_view(), name='single-users-update'),
    path('/single-users-delete/', UserSingleView.as_view(), name='single-users-delete'),
]
