from rest_framework.views import APIView
from rest_framework.response import Response

from .constants import PostConstants, CommentsConstants
from .manage import PostManager,  CommentsManager
from .serializers import PostSerializer, CommentsSerializer

class PostViewSet(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            post_objs = PostManager.get_all_posts(data)
            serialized_data = PostSerializer(post_objs, many=True).data
            return Response({"result": serialized_data, "message": PostConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

class PostSingleView(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.data
            post_objs = PostManager.get_single_posts(data)
            serialized_data = PostSerializer(post_objs).data
            return Response({"result": serialized_data, "message": PostConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
        
class CommentViewSet(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            comments_objs = CommentsManager.get_all_comments(data)
            serialized_data = CommentsSerializer(comments_objs, many=True).data
            return Response({"result": serialized_data, "message": CommentsConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

class CommentSingleView(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.data
            comments_objs = CommentsManager.get_all_comments(data)
            serialized_data = CommentsSerializer(comments_objs).data
            return Response({"result": serialized_data, "message": CommentsConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
        
