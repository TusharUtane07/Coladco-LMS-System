from rest_framework.views import APIView
from rest_framework.response import Response

from jwtconfig.custom_permissions import IsUserAuth
from .constants import CourseConstants, ModuleConstants, VideoConstants, ReviewConstants
from .manage import CourseManager, ModuleManager, ReviewManager, VideoManager
from .serializers import CourseSerializer, ModuleSerializer, VideoSerializer, ReviewSerializer


class CourseViewSet(APIView):
    permission_classes = [IsUserAuth]

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            courses_objs = CourseManager.get_all_courses(data)
            serialized_data = CourseSerializer(courses_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": CourseConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)


class CourseSingleView(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.data
            courses_objs = CourseManager.get_single_courses(data)
            serialized_data = CourseSerializer(courses_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": CourseConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
        
    @staticmethod
    def post(request):
        try:
            data = request.data
            courses_objs = CourseManager.update_single_courses(data)
            return Response({"result": "success", "message": CourseConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
    
    @staticmethod
    def delete(request):
        try:
            data = request.data
            CourseManager.delete_single_course(data)
            return Response({"result": "success", "message": CourseConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)


class ModuleViewSet(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            modules_objs = ModuleManager.get_all_modules(data)
            serialized_data = ModuleSerializer(modules_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": ModuleConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)


class ModuleSingleView(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.data
            modules_objs = ModuleManager.get_single_modules(data)
            serialized_data = ModuleSerializer(modules_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": ModuleConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
        
    @staticmethod
    def post(request):
        try:
            data = request.data
            modules_objs = ModuleManager.update_single_modules(data)
            return Response({"result": "success", "message": ModuleConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
    
    @staticmethod
    def delete(request):
        try:
            data = request.data
            ModuleManager.delete_single_module(data)
            return Response({"result": "success", "message": ModuleConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)


class VideoViewSet(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            videos_objs = VideoManager.get_all_videos(data)
            serialized_data = VideoSerializer(videos_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": VideoConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)


class VideoSingleView(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.data
            videos_objs = VideoManager.get_single_videos(data)
            serialized_data = VideoSerializer(videos_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": VideoConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
        
    @staticmethod
    def post(request):
        try:
            data = request.data
            videos_objs = VideoManager.update_single_videos(data)
            return Response({"result": "success", "message": VideoConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
    
    @staticmethod
    def delete(request):
        try:
            data = request.data
            VideoManager.delete_single_video(data)
            return Response({"result": "success", "message": VideoConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)


class ReviewViewSet(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            reviews_objs = ReviewManager.get_all_reviews(data)
            serialized_data = ReviewSerializer(reviews_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": ReviewConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)


class ReviewSingleView(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.data
            reviews_objs = ReviewManager.get_single_reviews(data)
            serialized_data = ReviewSerializer(reviews_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": ReviewConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
        
    @staticmethod
    def post(request):
        try:
            data = request.data
            reviews_objs = ReviewManager.update_single_reviews(data)
            return Response({"result": "success", "message": ReviewConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
    
    @staticmethod
    def delete(request):
        try:
            data = request.data
            ReviewManager.delete_single_review(data)
            return Response({"result": "success", "message": ReviewConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
