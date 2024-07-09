from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, CommentsViewSet

router = DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
