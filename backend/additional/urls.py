
from django.urls import path
from .views import BookmarksViewSet, BookmarksSingleView, TechToLearnSingleView, TechToLearnViewSet

urlpatterns = [
    path('all-bookmarks-fetch/',  BookmarksViewSet.as_view(), name='all-bookmarks-fetch'),
    path('single-bookmarks-fetch/',  BookmarksSingleView.as_view(), name='single-bookmarks-fetch'),
    
    path('all-tech-to-learn-fetch/',  TechToLearnViewSet.as_view(), name='all-tech-to-learn-fetch'),
    path('single-tech-to-learn-fetch/',  TechToLearnSingleView.as_view(), name='single-tech-to-learn-fetch'),
]
