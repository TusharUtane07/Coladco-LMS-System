from django.urls import path
from .views import PostViewSet, PostSingleView, CommentSingleView, CommentViewSet, NewPostUserSet, NewCommentUserSet

urlpatterns = [
    path('/all-posts-fetch/', PostViewSet.as_view(), name='all-posts-fetch'),
    path('/new-post-user/', NewPostUserSet.as_view(), name='new-post-user'),
    path('/single-posts-fetch/', PostSingleView.as_view(), name='single-posts-fetch'),
    path('/single-posts-update/', PostSingleView.as_view(), name='single-posts-update'),
    path('/single-posts-delete/', PostSingleView.as_view(), name='single-posts-delete'),
    
    path('/all-comments-fetch/', CommentViewSet.as_view(), name='all-comments-fetch'),
    path('/new-comment-user/', NewCommentUserSet.as_view(), name='new-comment-user'),
    path('/single-comments-fetch/', CommentSingleView.as_view(), name='single-comments-fetch'),
    path('/single-comments-update/', CommentSingleView.as_view(), name='single-comments-update'),
    path('/single-comments-delete/', CommentSingleView.as_view(), name='single-comments-delete'),
]
