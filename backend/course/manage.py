from course.models import Course, Module, Video, Review


class CourseManager:

    @staticmethod
    def get_all_courses(data):
        all_courses_objs = Course.objects.all()
        return all_courses_objs

    @staticmethod
    def get_single_courses(data):
        course_id = data.get("courseId", False)
        if not course_id:
            raise Exception("No course id provided")
        all_courses_objs = Course.objects.filter(id=course_id)
        return all_courses_objs

    @staticmethod
    def update_single_courses(data):
        course_id = data.get("courseId", False)
        description = data.get("description", False)
        if not course_id:
            raise Exception("No course id provided")
        all_courses_objs = Course.objects.filter(id=course_id)
        if all_courses_objs:
            all_courses_objs[0].description = description
            all_courses_objs[0].save()
        return all_courses_objs
    
class ModuleManager:

    @staticmethod
    def get_all_modules(data):
        all_modules_objs = Module.objects.all()
        return all_modules_objs

    @staticmethod
    def get_single_modules(data):
        module_id = data.get("moduleId", False)
        if not module_id:
            raise Exception("No Module id provided")
        all_modules_objs = Module.objects.filter(id=module_id)
        return all_modules_objs
class VideoManager:

    @staticmethod
    def get_all_videos(data):
        all_videos_objs = Video.objects.all()
        return all_videos_objs

    @staticmethod
    def get_single_videos(data):
        video_id = data.get("videoId", False)
        if not video_id:
            raise Exception("No video id provided")
        all_videos_objs = Video.objects.filter(id=video_id)
        return all_videos_objs
class ReviewManager:

    @staticmethod
    def get_all_reviews(data):
        all_reviews_objs = Review.objects.all()
        return all_reviews_objs

    @staticmethod
    def get_single_reviews(data):
        review_id = data.get("reviewId", False)
        if not review_id:
            raise Exception("No Reviews id provided")
        all_reviews_objs = Review.objects.filter(id=review_id)
        return all_reviews_objs

    @staticmethod
    def delete_single_course(data):
        course_id = data.get("courseId", False)
        if not course_id:
            raise Exception("No course id provided")
        all_courses_objs = Course.objects.filter(id=course_id)
        if all_courses_objs:
            all_courses_objs[0].delete()
        return all_courses_objs