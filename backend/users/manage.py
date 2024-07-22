import random

from django.db import transaction
from django.db.models import Q
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import make_password, check_password
import random
import string

from jwtconfig.manage import JwtManager
from users.models import UserDefault, Profile, OtpVerify
import jwt
from django.utils import timezone
from datetime import timedelta
class UserManager:

    @staticmethod
    def get_all_user(data):
        all_users_objs = UserDefault.objects.all()
        return all_users_objs

    @staticmethod
    def get_single_user(data):
        user_id = data.get("userId", False)
        if not user_id:
            raise Exception("No User id provided")
        all_user_objs = UserDefault.objects.filter(id=user_id)
        return all_user_objs
    @staticmethod
    def is_otp_valid(obj):
        return timezone.now() <= obj.created_at + timedelta(minutes=3)

    @staticmethod
    def verify_otp(data):
        phone = data.get("phone", False)
        number_1 = data.get("number1", False)
        number_2 = data.get("number2", False)
        number_3 = data.get("number3", False)
        number_4 = data.get("number4", False)
        if not ( phone or number_1 or number_2 or number_3 or number_4 ):
            raise Exception("Invalid phone or otp entered")
        otp_entered = number_1 + number_2 + number_3 + number_4
        all_user_objs = OtpVerify.objects.filter(phone_number=phone, otp=otp_entered).first()
        if all_user_objs and UserManager.is_otp_valid(all_user_objs):
            return True
        raise Exception("Otp entered is either invalid or expired")

    @staticmethod
    def update_single_user(data):
        user_id = data.get("userId", False)
        if not user_id:
            raise Exception("No user id provided")

        all_user_objs = UserDefault.objects.filter(id=user_id)
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

        all_user_objs = UserDefault.objects.filter(id=user_id)
        if all_user_objs:
            all_user_objs[0].delete()

        return all_user_objs

    @staticmethod
    def register_new_user(data):
        name = data.get('name', None)
        email = data.get('email', None)
        phone = data.get('phone', None)
        gender = data.get('gender', None)

        if not (phone or email):
            raise Exception("Phone and Email are required")

        with transaction.atomic():
            query = Q(email=email) | Q(phone_number=phone)
            old_user = Profile.objects.filter(query)
            if old_user:
                raise Exception("The email or phone number is already in use")
            Profile.objects.create(full_name=name ,email=email, phone_number=phone, gender=gender)
            otp_random = random.randint(2194,9978)
            OtpVerify.objects.create(phone_number=phone ,otp=otp_random)

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
            profile.facebook = data.get("facebook", profile.facebook)
            profile.github = data.get("github", profile.github)
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
            query = Q()
            query &= Q(user__username=username) | Q(email=username) | Q(phone_number=username)
            query &= Q(user__password=password)
            all_profile_objs = Profile.objects.select_related('user').get(query)
            payload = {
                "profile_id": all_profile_objs.id,
                "full_name": all_profile_objs.full_name,
            }
            return JwtManager.create_token(payload, payload)
        except Exception as e:
            raise Exception("The ID or password you entered is incorrect. Please try again.")

    @staticmethod
    def generate_username(full_name, phone_number):
        name_parts = full_name.split(" ")
        if len(name_parts) >= 2:
            first_name = name_parts[0]
            last_name = name_parts[-1]
        else:
            first_name = name_parts[0]
            last_name = ''.join(random.choices(string.ascii_lowercase + string.digits, k=3))
        if len(phone_number) >= 4:
            last_four_digits = phone_number[-4:]
        else:
            return None

        random_string = ''.join(random.choices(string.ascii_lowercase + string.digits, k=3))
        username = first_name[0].lower() + last_name.lower() + last_four_digits + random_string

        return username
    @staticmethod
    @transaction.atomic
    def create_password(data):
        phone = data.get('phone', False)
        password = data.get('password', False)
        try:
            all_profile_objs = Profile.objects.filter(phone_number=phone)
            if not all_profile_objs:
                raise Exception("Something went wrong from our side")
            user_name = ProfileManager.generate_username(all_profile_objs[0].full_name, all_profile_objs[0].phone_number)
            user_obj = UserDefault.objects.create(username=user_name, password=password)
            all_profile_objs[0].user = user_obj
            all_profile_objs[0].save()
            payload = {
                "profile_id": all_profile_objs[0].id,
                "full_name": all_profile_objs[0].full_name,
            }
            return JwtManager.create_token(payload, payload)
        except Exception as e:
            raise Exception("User doesnt exits")

