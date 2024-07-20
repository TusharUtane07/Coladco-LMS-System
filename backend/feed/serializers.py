from rest_framework import serializers
from .models import Post, PostComments


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostComments
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    post_comments = CommentsSerializer(many=True)
    class Meta:
        model = Post
        fields = '__all__'
