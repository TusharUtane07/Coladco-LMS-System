from rest_framework import serializers
from .models import Profile, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

        
class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile

        
class UserProfileSerializer(serializers.ModelSerializer):
    user_profile = ProfileSerializer()

    class Meta:
        model = User
        fields = '__all__'