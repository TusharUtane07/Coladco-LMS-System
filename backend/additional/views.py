from rest_framework import viewsets
from .models import Bookmarks, TechToLearn
from .serializers import BookmarksSerializer, TechToLearnSerializer

class BookmarksViewSet(viewsets.ModelViewSet):
    queryset = Bookmarks.objects.all()
    serializer_class = BookmarksSerializer

class TechToLearnViewSet(viewsets.ModelViewSet):
    queryset = TechToLearn.objects.all()
    serializer_class = TechToLearnSerializer
