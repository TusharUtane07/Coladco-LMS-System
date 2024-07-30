from rest_framework import serializers
from .models import Assignments
from course.serializers import ModuleSerializer


class AssignmentSerializer(serializers.ModelSerializer):
    module = ModuleSerializer() 
    class Meta:
        model = Assignments
        fields = '__all__'