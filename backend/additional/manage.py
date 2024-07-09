from additional.models import Bookmarks, TechToLearn


class BookmarksManager:

    @staticmethod
    def get_all_bookmarks(data):
        all_bookmarks_objs = Bookmarks.objects.all()
        return all_bookmarks_objs

    @staticmethod
    def get_single_bookmarks(data):
        bookmarks_id = data.get("bookmarksId", False)
        if not bookmarks_id:
            raise Exception("No bookmarks id provided")
        all_bookmarks_objs = Bookmarks.objects.filter(id=bookmarks_id)
        return all_bookmarks_objs
    
class TechToLearnManager:

    @staticmethod
    def get_all_tech_to_learn(data):
        all_tech_to_learn_objs = TechToLearn.objects.all()
        return all_tech_to_learn_objs

    @staticmethod
    def get_single_tech_to_learn(data):
        tech_to_learn_id = data.get("techToLearnId", False)
        if not tech_to_learn_id:
            raise Exception("No Tech id provided")
        all_tech_to_learn_objs = TechToLearn.objects.filter(id=tech_to_learn_id)
        return all_tech_to_learn_objs