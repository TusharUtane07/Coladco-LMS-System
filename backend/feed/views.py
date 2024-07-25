from rest_framework.views import APIView
from rest_framework.response import Response

from jwtconfig.custom_permissions import IsUserAuth
from .constants import PostConstants, CommentsConstants
from .manage import PostManager,  CommentsManager
from .serializers import PostSerializer, CommentsSerializer, PostWithLikeSerializer


class PostViewSet(APIView):
    permission_classes = [IsUserAuth]

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            post_objs = PostManager.get_all_posts(request, data)
            serialized_data = PostWithLikeSerializer(post_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": PostConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

class NewPostUserSet(APIView):
    permission_classes = [IsUserAuth]

    @staticmethod
    def post(request):
        try:
            data = request.data
            PostManager.add_new_post(request, data)
            return Response({"result": "success", "message": PostConstants.FEED_SUCCESS_UPDATE}, 200)
        except Exception as err:
            return Response(str(err), 500)

class PostSingleView(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.data
            post_objs = PostManager.get_single_posts(data)
            serialized_data = PostSerializer(post_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": PostConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

    @staticmethod
    def post(request):
        try:
            data = request.data
            post_objs = PostManager.update_single_post(data)
            return Response({"result": "success", "message": PostConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
    
    @staticmethod
    def delete(request):
        try:
            data = request.data
            PostManager.delete_single_post(data)
            return Response({"result": "success", "message": PostConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

        
class CommentViewSet(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            comments_objs = CommentsManager.get_all_comments(data)
            serialized_data = CommentsSerializer(comments_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": CommentsConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
        
class NewCommentUserSet(APIView):
    permission_classes = [IsUserAuth]

    @staticmethod
    def post(request):
        try:
            data = request.data
            CommentsManager.add_new_comment(request, data)
            return Response({"result": "success", "message": CommentsConstants.COMMENT_SUCCESS_UPDATE}, 200)
        except Exception as err:
            return Response(str(err), 500)


class CommentSingleView(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.data
            comments_objs = CommentsManager.get_single_comments(data)
            serialized_data = CommentsSerializer(comments_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": CommentsConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

    @staticmethod
    def post(request):
        try:
            data = request.data
            comments_objs = CommentsManager.update_single_comment(data)
            return Response({"result": "success", "message": CommentsConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
    
    @staticmethod
    def delete(request):
        try:
            data = request.data
            CommentsManager.delete_single_comment(data)
            return Response({"result": "success", "message": CommentsConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

class LikePostView(APIView):

    permission_classes = [IsUserAuth]

    @staticmethod
    def post(request):
        try:
            data = request.data
            post_id = data.get("postId", False)
            PostManager.like_post(request, post_id)
            return Response({"result": "success", "message": PostConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
