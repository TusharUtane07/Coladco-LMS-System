from rest_framework import serializers
from .models import Course, Module, Video, Review

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = '__all__'

class VideoSerializer(serializers.ModelSerializer):
    module = ModuleSerializer()
    class Meta:
        model = Video
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
