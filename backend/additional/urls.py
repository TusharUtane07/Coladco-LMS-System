from django.urls import path
from .views import (
    BookmarksViewSet, 
    BookmarksSingleView, 
    TechToLearnSingleView, 
    TechToLearnViewSet,
    SubscriptionsViewSet, 
    SubscriptionsSingleView
)

urlpatterns = [
    path('all-bookmarks-fetch/', BookmarksViewSet.as_view(), name='all-bookmarks-fetch'),
    path('single-bookmarks-fetch/', BookmarksSingleView.as_view(), name='single-bookmarks-fetch'),
    path('single-bookmarks-update/', BookmarksSingleView.as_view(), name='single-bookmarks-update'),
    path('single-bookmarks-delete/', BookmarksSingleView.as_view(), name='single-bookmarks-delete'),

    path('all-tech-to-learn-fetch/', TechToLearnViewSet.as_view(), name='all-tech-to-learn-fetch'),
    path('single-tech-to-learn-fetch/', TechToLearnSingleView.as_view(), name='single-tech-to-learn-fetch'),
    path('single-tech-to-learn-update/', TechToLearnSingleView.as_view(), name='single-tech-to-learn-update'),
    path('single-tech-to-learn-delete/', TechToLearnSingleView.as_view(), name='single-tech-to-learn-delete'),

    path('all-subscriptions-fetch/', SubscriptionsViewSet.as_view(), name='all-subscriptions-fetch'),
    path('single-subscription-fetch/', SubscriptionsSingleView.as_view(), name='single-subscription-fetch'),
    path('single-subscription-update/', SubscriptionsSingleView.as_view(), name='single-subscription-update'),
    path('single-subscription-delete/', SubscriptionsSingleView.as_view(), name='single-subscription-delete'),
]
