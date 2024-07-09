from rest_framework.routers import DefaultRouter
from .views import BookmarksViewSet, TechToLearnViewSet

router = DefaultRouter()
router.register(r'bookmarks', BookmarksViewSet, basename='bookmarks')
router.register(r'tech-to-learn', TechToLearnViewSet, basename='techtolearn')
urlpatterns = router.urls
