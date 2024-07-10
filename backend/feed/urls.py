
from django.urls import path
from .views import PostViewSet, PostSingleView, CommentSingleView, CommentViewSet

urlpatterns = [
    path('all-posts-fetch/',  PostViewSet.as_view(), name='all-posts-fetch'),
    path('single-posts-fetch/',  PostSingleView.as_view(), name='single-posts-fetch'),
    
    path('all-comments-fetch/',  CommentViewSet.as_view(), name='all-comments-fetch'),
    path('single-comments-fetch/',  CommentSingleView.as_view(), name='single-comments-fetch'),
]
