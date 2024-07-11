from rest_framework.views import APIView
from rest_framework.response import Response

from .constants import UserConstants, ProfileConstants
from .manage import UserManager, ProfileManager
from .serializers import UserSerializer, ProfileSerializer

class UserViewSet(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            user_objs = UserManager.get_all_user(data)
            serialized_data = UserSerializer(user_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": UserConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

class UserSingleView(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.data
            user_objs = UserManager.get_single_user(data)
            serialized_data = UserSerializer(user_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": UserConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
    
    @staticmethod
    def post(request):
        try:
            data = request.data
            user_objs = UserManager.update_single_user(data)
            return Response({"result": "success", "message": UserConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

    @staticmethod
    def delete(request):
        try:
            data = request.data
            UserManager.delete_single_user(data)
            return Response({"result": "success", "message": UserConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

class ProfileViewSet(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            profile_objs = ProfileManager.get_all_profile(data)
            serialized_data = ProfileSerializer(profile_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": ProfileConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

class ProfileSingleView(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.data
            profile_objs = ProfileManager.get_single_profile(data)
            serialized_data = ProfileSerializer(profile_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": ProfileConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
    
    @staticmethod
    def post(request):
        try:
            data = request.data
            profile_objs = ProfileManager.update_single_profile(data)
            return Response({"result": "success", "message": ProfileConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

    @staticmethod
    def delete(request):
        try:
            data = request.data
            ProfileManager.delete_single_profile(data)
            return Response({"result": "success", "message": ProfileConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
