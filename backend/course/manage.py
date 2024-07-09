from course.models import Course


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