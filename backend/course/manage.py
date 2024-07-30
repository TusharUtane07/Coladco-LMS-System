from course.models import Course, Module, Video, Review
from django.db.models import Count, Avg
from django.db import models
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
        if not course_id:
            raise Exception("No course id provided")
        all_courses_objs = Course.objects.filter(id=course_id)
        if all_courses_objs:
            course = all_courses_objs[0]
            course.name = data.get("name", course.name)
            course.description = data.get("description", course.description)
            course.thumbnail = data.get("thumbnail", course.thumbnail)
            course.price = data.get("price", course.price)
            course.rating = data.get("rating", course.rating)
            course.save()
        return all_courses_objs
    
    @staticmethod
    def delete_single_course(data):
        course_id = data.get("courseId", False)
        if not course_id:
            raise Exception("No course id provided")
        all_courses_objs = Course.objects.filter(id=course_id)
        if all_courses_objs:
            all_courses_objs[0].delete()
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
            raise Exception("No module id provided")
        all_modules_objs = Module.objects.filter(id=module_id)
        return all_modules_objs

    @staticmethod
    def update_single_modules(data):
        module_id = data.get("moduleId", False)
        if not module_id:
            raise Exception("No module id provided")
        all_modules_objs = Module.objects.filter(id=module_id)
        if all_modules_objs:
            module = all_modules_objs[0]
            module.course = data.get("course", module.course)
            module.name = data.get("name", module.name)
            module.description = data.get("description", module.description)
            module.save()
        return all_modules_objs


class VideoManager:

    @staticmethod
    def get_all_videos(data):
        all_videos_objs = Video.objects.select_related('module').all()
        return all_videos_objs

    @staticmethod
    def get_single_videos(data):
        video_id = data.get("videoId", False)
        if not video_id:
            raise Exception("No video id provided")
        all_videos_objs = Video.objects.filter(id=video_id)
        return all_videos_objs

    @staticmethod
    def update_single_videos(data):
        video_id = data.get("videoId", False)
        if not video_id:
            raise Exception("No video id provided")
        all_videos_objs = Video.objects.filter(id=video_id)
        if all_videos_objs:
            video = all_videos_objs[0]
            video.module = data.get("module", video.module)
            video.title = data.get("title", video.title)
            video.url = data.get("url", video.url)
            video.duration = data.get("duration", video.duration)
            video.save()
        return all_videos_objs


class ReviewManager:

    @staticmethod
    def get_all_reviews(data):
        all_reviews_objs = Review.objects.all()
        return all_reviews_objs
    
    @staticmethod
    def add_new_review(request, data):
        review_text = data.get("review")
        rating = data.get("rating")
        course_id = 1
        user_id = request.user.id
        if not review_text:
            raise Exception("No review message is provided")
        if not user_id:
            raise Exception("No user is provided")
        
        existing_review = Review.objects.filter(course_id=course_id, profile_id=user_id).first()
        if existing_review:
            raise Exception("User has already reviewed this course")
        Review.objects.create(review_text=review_text, rating=rating, profile_id=user_id, course_id=course_id)


    @staticmethod
    def get_single_reviews(data):
        review_id = data.get("reviewId", False)
        if not review_id:
            raise Exception("No review id provided")
        all_reviews_objs = Review.objects.filter(id=review_id)
        return all_reviews_objs

    @staticmethod
    def update_single_reviews(data):
        review_id = data.get("reviewId", False)
        if not review_id:
            raise Exception("No review id provided")
        all_reviews_objs = Review.objects.filter(id=review_id)
        if all_reviews_objs:
            review = all_reviews_objs[0]
            review.course = data.get("course", review.course)
            review.user = data.get("user", review.user)
            review.review_text = data.get("review_text", review.review_text)
            review.rating = data.get("rating", review.rating)
            review.save()
        return all_reviews_objs
    
    @staticmethod
    def get_reviews_summary(data):
        course_id = 1
        if not course_id:
            raise Exception("No course id provided")

        review_counts = Review.objects.filter(course_id=course_id).aggregate(
            one_star=Count('rating', filter=models.Q(rating=1)),
            two_star=Count('rating', filter=models.Q(rating=2)),
            three_star=Count('rating', filter=models.Q(rating=3)),
            four_star=Count('rating', filter=models.Q(rating=4)),
            five_star=Count('rating', filter=models.Q(rating=5)),
            total_reviews=Count('rating')
        )

        total_reviews = review_counts['total_reviews']
        if total_reviews == 0:
            percentages = {
                'one_star_percentage': 0,
                'two_star_percentage': 0,
                'three_star_percentage': 0,
                'four_star_percentage': 0,
                'five_star_percentage': 0,
            }
        else:
            percentages = {
                'one_star_percentage': (review_counts['one_star'] / total_reviews) * 100,
                'two_star_percentage': (review_counts['two_star'] / total_reviews) * 100,
                'three_star_percentage': (review_counts['three_star'] / total_reviews) * 100,
                'four_star_percentage': (review_counts['four_star'] / total_reviews) * 100,
                'five_star_percentage': (review_counts['five_star'] / total_reviews) * 100,
            }

        review_summary = {
            **percentages,
            'average_rating': Review.objects.filter(course_id=course_id).aggregate(average_rating=Avg('rating'))['average_rating'],
            'total_reviews': total_reviews
        }

        return review_summary