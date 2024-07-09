from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, CourseSingleView

# router = DefaultRouter()
# router.register(r'courses', CourseViewSet)
# router.register(r'modules', ModuleViewSet)
# router.register(r'videos', VideoViewSet)
# router.register(r'reviews', ReviewViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]


urlpatterns = [
    path('all-courses-fetch/',  CourseViewSet.as_view(), name='all-courses-fetch'),
    path('single-courses-fetch/',  CourseSingleView.as_view(), name='single-courses-fetch'),
]
