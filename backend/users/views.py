from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from users.models import User, Profile
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
            data = request.query_params
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


class GetLoginToken(APIView):

    @staticmethod
    def post(request):
        try:
            data = request.data
            profile_objs = ProfileManager.get_login_token(data)
            serialized_data, token , refresh_token = ProfileSerializer(profile_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": ProfileConstants.SUCCESS,
                             "token" : token, 'refresh_token': refresh_token}, 200)
        except Exception as err:
            return Response(str(err), 500)


class RegisterUser(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.data
            token, refresh_token = UserManager.register_new_user(data)
            return Response({"result": "success", "message": ProfileConstants.SUCCESS, "token" : token, "refresh-token": refresh_token}, 200)
        except Exception as err:
            return Response(str(err), 500)
