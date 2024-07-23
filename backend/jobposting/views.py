from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .constants import JobPostingConstants
from .manage import JobPostingManager
from .serializers import JobPostingSerializer

class JobPostingViewSet(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            job_postings_objs = JobPostingManager.get_all_job_postings(data)
            serialized_data = JobPostingSerializer(job_postings_objs, many=True).data
            return Response({
                "result": "success",
                "data": serialized_data,
                "message": JobPostingConstants.SUCCESS
            }, status=status.HTTP_200_OK)
        except Exception as err:
            return Response({
                "result": "error",
                "message": str(err)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @staticmethod
    def post(request):
        try:
            data = request.data
            JobPostingManager.post_new_job_posting(data)
            return Response({
                "result": "success",
                "message": JobPostingConstants.NEW_JOB_ADDED
            }, status=status.HTTP_200_OK)
        except Exception as err:
            return Response({
                "result": "error",
                "message": str(err)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class JobPostingSingleView(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            job_posting_obj = JobPostingManager.get_single_job_posting(data)
            serialized_data = JobPostingSerializer(job_posting_obj).data
            return Response({
                "result": "success",
                "data": serialized_data,
                "message": JobPostingConstants.SUCCESS
            }, status=status.HTTP_200_OK)
        except Exception as err:
            return Response({
                "result": "error",
                "message": str(err)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    @staticmethod
    def post(request):
        try:
            data = request.data
            job_posting_obj = JobPostingManager.update_single_job_posting(data)
            serialized_data = JobPostingSerializer(job_posting_obj).data
            return Response({
                "result": "success",
                "data": serialized_data,
                "message": JobPostingConstants.SUCCESS
            }, status=status.HTTP_200_OK)
        except Exception as err:
            return Response({
                "result": "error",
                "message": str(err)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class JobPostingDelete(APIView):

    @staticmethod
    def post(request):
        try:
            data = request.data
            JobPostingManager.delete_single_job_posting(data)
            return Response({
                "result": "success",
                "message": JobPostingConstants.SUCCESS
            }, status=status.HTTP_200_OK)
        except Exception as err:
            return Response({
                "result": "error",
                "message": str(err)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
