from rest_framework import serializers
from .models import Bookmarks, TechToLearn
from course.serializers import ModuleSerializer

class BookmarksSerializer(serializers.ModelSerializer):
    module = ModuleSerializer()
    class Meta:
        model = Bookmarks
        fields = '__all__'

class TechToLearnSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechToLearn
        fields = '__all__'

class SubscriptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechToLearn
        fields = '__all__'
