<<<<<<< HEAD
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from myproject.Common import responseClass
from .manager import CustomManager

class GetProfileData(APIView):
    @staticmethod
    def post(request):
        try:
            data = request.query_params
            data = CustomManager.check_if_admin_exists(data)
            return Response({"result": responseClass.success, data:"", "message": "okay"}, 200)
        except Exception as err:
            return Response(str(err), 500)
=======
from rest_framework import viewsets
from .models import Profile, User
from .serializers import ProfileSerializer, UserSerializer
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


>>>>>>> 8cdf9200481393ef0596ce76c12a462deeddaa81
