from django.db import transaction
from django.db.models import Q
from rest_framework_simplejwt.tokens import RefreshToken

from users.models import User, Profile
import jwt
from django.conf import settings

class UserManager:

    @staticmethod
    def get_all_user(data):
        all_users_objs = User.objects.all()
        return all_users_objs

    @staticmethod
    def get_single_user(data):
        user_id = data.get("userId", False)
        if not user_id:
            raise Exception("No User id provided")
        all_user_objs = User.objects.filter(id=user_id)
        return all_user_objs

    @staticmethod
    def update_single_user(data):
        user_id = data.get("userId", False)
        if not user_id:
            raise Exception("No user id provided")

        all_user_objs = User.objects.filter(id=user_id)
        if all_user_objs:
            user = all_user_objs[0]
            user.email = data.get("email", user.email)
            user.username = data.get("username", user.username)
            user.password = data.get("password", user.password)
            user.save()

        return all_user_objs

    @staticmethod
    def delete_single_user(data):
        user_id = data.get("userId", False)
        if not user_id:
            raise Exception("No user id provided")

        all_user_objs = User.objects.filter(id=user_id)
        if all_user_objs:
            all_user_objs[0].delete()

        return all_user_objs

    @staticmethod
    def register_new_user(data):
        username = data.get('username', None)
        password = data.get('password', None)
        email = data.get('email', None)
        phone_number = data.get('phone_number', None)
        instagram = data.get('instagram', "")
        linkedin = data.get('linkedin', "")
        twitter = data.get('twitter', "")
        bio = data.get('bio', None)

        # profile_image = data.get('password', None)
        with transaction.atomic():
            query = Q(Q(user__username=username) | Q(email=email) | Q(phone_number=phone_number))

            old_user = Profile.objects.filter(query)
            if old_user:
                raise Exception("Duplicate usrname/email/phone")
            user = User.objects.create(username=username, password=password)
            profile = Profile.objects.create(user=user, email=email, phone_number=phone_number, instagram = instagram,
                                   twitter=twitter, linkedin = linkedin, bio=bio)
            refresh = RefreshToken.for_user(profile)

            access_token = refresh.access_token
            access_token['username'] = user.username
            # access_token['email'] = user.email

        return str(access_token), str(refresh)

    @staticmethod
    def generate_jwt(payload):
        # payload['exp'] = datetime.utcnow() + timedelta(seconds=settings.JWT_EXP_DELTA_SECONDS)
        token = jwt.encode(payload, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)
        return token

    @staticmethod
    def decode_jwt(token):
        try:
            decoded_payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
            return decoded_payload
        except jwt.ExpiredSignatureError:
            return None
        except jwt.InvalidTokenError:
            return None


class ProfileManager:

    @staticmethod
    def get_all_profile(data):
        all_profile_objs = Profile.objects.filter().prefetch_related("user")
        return all_profile_objs

    @staticmethod
    def get_single_profile(data):
        profile_id = data.get("profileId", False)
        if not profile_id:
            raise Exception("No Profile id provided")
        all_profile_objs = Profile.objects.filter(id=profile_id)
        return all_profile_objs

    @staticmethod
    def update_single_profile(data):
        profile_id = data.get("profileId", False)
        if not profile_id:
            raise Exception("No profile id provided")

        all_profile_objs = Profile.objects.filter(id=profile_id)
        if all_profile_objs:
            profile = all_profile_objs[0]
            profile.email = data.get("email", profile.email)
            profile.phone_number = data.get("phone_number", profile.phone_number)
            profile.linkedin = data.get("linkedin", profile.linkedin)
            profile.twitter = data.get("twitter", profile.twitter)
            profile.instagram = data.get("instagram", profile.instagram)
            profile.bio = data.get("bio", profile.bio)
            profile.profile_image = data.get("profile_image", profile.profile_image)
            profile.save()

        return all_profile_objs

    @staticmethod
    def delete_single_profile(data):
        profile_id = data.get("profileId", False)
        if not profile_id:
            raise Exception("No profile id provided")

        all_profile_objs = Profile.objects.filter(id=profile_id)
        if all_profile_objs:
            all_profile_objs[0].delete()

        return all_profile_objs


    @staticmethod
    def get_login_token(data):
        username = data.get('username', False)
        password = data.get('password', False)
        try:
            all_profile_objs = Profile.objects.select_related('user').get(user__username=username, user__password=password)
            refresh = RefreshToken.for_user(all_profile_objs)
            access_token = str(refresh.access_token)
            refresh_token = str(refresh)
            return all_profile_objs,  access_token, refresh_token
        except Exception as e:
            raise Exception("User doesnt exits")

