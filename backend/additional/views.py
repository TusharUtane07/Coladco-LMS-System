from rest_framework.views import APIView
from rest_framework.response import Response

from .constants import BookmarksConstants, TechToLearnConstants
from .manage import BookmarksManager, TechToLearnManager
from .serializers import BookmarksSerializer, TechToLearnSerializer

class BookmarksViewSet(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            bookmarks_objs = BookmarksManager.get_all_bookmarks(data)
            serialized_data = BookmarksSerializer(bookmarks_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": BookmarksConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

class BookmarksSingleView(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.data
            bookmarks_obj = BookmarksManager.get_single_bookmark(data)
            serialized_data = BookmarksSerializer(bookmarks_obj, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": BookmarksConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
        
    @staticmethod
    def post(request):
        try:
            data = request.data
            bookmarks_obj = BookmarksManager.update_single_bookmark(data)
            return Response({"result": "success", "message": BookmarksConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

    @staticmethod
    def delete(request):
        try:
            data = request.data
            BookmarksManager.delete_single_bookmark(data)
            return Response({"result": "success", "message": BookmarksConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
class TechToLearnViewSet(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.query_params
            tech_to_learn_objs = TechToLearnManager.get_all_tech_to_learn(data)
            serialized_data = TechToLearnSerializer(tech_to_learn_objs, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": TechToLearnConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

class TechToLearnSingleView(APIView):

    @staticmethod
    def get(request):
        try:
            data = request.data
            tech_to_learn_obj = TechToLearnManager.get_single_tech_to_learn(data)
            serialized_data = TechToLearnSerializer(tech_to_learn_obj, many=True).data
            return Response({"result": "success", "data": serialized_data, "message": TechToLearnConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)
        
    @staticmethod
    def post(request):
        try:
            data = request.data
            tech_to_learn_obj = TechToLearnManager.update_single_tech_to_learn(data)
            return Response({"result": "success", "message": TechToLearnConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)

    @staticmethod
    def delete(request):
        try:
            data = request.data
            TechToLearnManager.delete_single_tech_to_learn(data)
            return Response({"result": "success", "message": TechToLearnConstants.SUCCESS}, 200)
        except Exception as err:
            return Response(str(err), 500)