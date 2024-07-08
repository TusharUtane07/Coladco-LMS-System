from rest_framework import serializers
from .models import Bookmarks, TechToLearn

class BookmarksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmarks
        fields = '__all__'

class TechToLearnSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechToLearn
        fields = '__all__'
