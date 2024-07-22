from rest_framework import serializers
from .models import Profile, UserDefault


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDefault
        fields = '__all__'

        
class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = '__all__'

        
class UserProfileSerializer(serializers.ModelSerializer):
    user_profile = ProfileSerializer()

    class Meta:
        model = UserDefault
        fields = '__all__'