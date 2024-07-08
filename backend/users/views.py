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