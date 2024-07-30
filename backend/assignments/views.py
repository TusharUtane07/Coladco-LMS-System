from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Assignments
from .serializers import AssignmentSerializer
from .constants import AssignmentConstant
from .manage import AssignmentManager

class AssignmentViewSet(APIView):
    @staticmethod
    def get(request):
        try:
            data = request.query_params
            assignments_objs = AssignmentManager.get_all_assignments(data)
            serialized_data = AssignmentSerializer(assignments_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": AssignmentConstant.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)


class AssignmentSingleView(APIView):
    @staticmethod
    def get(request):
        try:
            data = request.query_params
            assignments_objs = AssignmentManager.get_single_assignment(data)
            serialized_data = AssignmentSerializer(assignments_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": AssignmentConstant.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
        
    @staticmethod
    def post(request):
        try:
            data = request.data
            assignments_objs = AssignmentManager.update_single_assignment(data)
            return Response({"result": "success", "message": AssignmentConstant.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
    
    @staticmethod
    def delete(request):
        try:
            data = request.data
            AssignmentManager.delete_single_assignment(data)
            return Response({"result": "success", "message": AssignmentConstant.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)


class NewAssignmentPostSet(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            AssignmentManager.create_assignment(data)
            return Response({"result": "success", "message": AssignmentConstant.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
