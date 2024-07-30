from assignments.models import Assignments
from course.models import Module

class AssignmentManager:
    
    @staticmethod
    def get_all_assignments(data):
        all_assignments_objs = Assignments.objects.select_related('module').all()
        return all_assignments_objs

    @staticmethod
    def get_single_assignment(data):
        assignment_id = data.get("assignmentsId", False)
        if not assignment_id:
            raise Exception("No assignment id provided")
        all_assignments_objs = Assignments.objects.select_related('module').filter(id=assignment_id)
        return all_assignments_objs


    @staticmethod
    def create_assignment(data):
        module_id = data.get("moduleId", False)
        if not module_id:
            raise Exception("No module id provided")
        title = data.get("title", "")
        description = data.get("description", "")
        thumbnail = data.get("thumbnail", thumbnail)
        module = Module.objects.get(id=module_id)
        assignment = Assignments.objects.create(module=module, title=title, description=description)
        return assignment

    @staticmethod
    def update_single_assignment(data):
        assignment_id = data.get("assignmentId", False)
        if not assignment_id:
            raise Exception("No assignment id provided")
        assignment_objs = Assignments.objects.filter(id=assignment_id)
        if assignment_objs:
            assignment = assignment_objs[0]
            assignment.title = data.get("title", assignment.title)
            assignment.description = data.get("description", assignment.description)
            assignment.thumbnail = data.get("thumbnail", assignment.thumbnail)
            assignment.save()
        return assignment_objs

    @staticmethod
    def delete_single_assignment(data):
        assignment_id = data.get("assignmentId", False)
        if not assignment_id:
            raise Exception("No assignment id provided")
        assignment_objs = Assignments.objects.filter(id=assignment_id)
        if assignment_objs:
            assignment_objs[0].delete()
        return assignment_objs
