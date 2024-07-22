from rest_framework.permissions import BasePermission

from jwtconfig.manage import JwtManager


class IsUserAuth(BasePermission):
    def has_permission(self, request, view):
        token = request.headers.get('jwtToken')
        if not token:
            return False

        try:
            data = JwtManager.decode_token(token)
        except:
            return False

        request.user.id = data.get('profile_id')
        request.user.name = data.get('full_name')
        return True
