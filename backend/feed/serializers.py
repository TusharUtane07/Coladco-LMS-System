from rest_framework import serializers
from .models import Post, PostComments
from users.serializers import ProfileSerializer

class CommentsSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()
    class Meta:
        model = PostComments
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    post_comments = CommentsSerializer(many=True)
    profile = ProfileSerializer()
    class Meta:
        model = Post
        fields = '__all__'
