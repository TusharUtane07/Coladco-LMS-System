<<<<<<< HEAD
from django.urls import path
from . import views
from .views import GetProfileData

urlpatterns = [
    path('get-profile/',  GetProfileData.as_view(), name='get-profile'),
    path('get-profile2/',  GetProfileData.as_view(), name='get-profile')

]
=======
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, UserViewSet

router = DefaultRouter()
router.register(r'profiles', ProfileViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
>>>>>>> 8cdf9200481393ef0596ce76c12a462deeddaa81
