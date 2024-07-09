from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

from .constants import CourseConstants
from .manage import CourseManager
from .models import Course, Module, Video, Review
from .serializers import CourseSerializer, ModuleSerializer, VideoSerializer, ReviewSerializer



class CourseViewSet(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            courses_objs = CourseManager.get_all_courses(data)
            serialized_data = CourseSerializer(courses_objs, many=True).data
            return Response({"result": serialized_data, "message": CourseConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

class CourseSingleView(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.data
            courses_objs = CourseManager.get_single_courses(data)
            serialized_data = CourseSerializer(courses_objs, many=True).data
            return Response({"result": serialized_data, "message": CourseConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

# class CourseViewSet(viewsets.ModelViewSet):
#     queryset = Course.objects.all()
#     serializer_class = CourseSerializer
#
# class ModuleViewSet(viewsets.ModelViewSet):
#     queryset = Module.objects.all()
#     serializer_class = ModuleSerializer
#
# class VideoViewSet(viewsets.ModelViewSet):
#     queryset = Video.objects.all()
#     serializer_class = VideoSerializer
#
# class ReviewViewSet(viewsets.ModelViewSet):
#     queryset = Review.objects.all()
#     serializer_class = ReviewSerializer
