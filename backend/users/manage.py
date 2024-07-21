from users.models import User, Profile

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
        all_profile_objs = User.objects.filter(username=username, password=password)
        if all_profile_objs:
            return True
        return False
