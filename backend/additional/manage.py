from additional.models import Bookmarks, TechToLearn


from additional.models import Bookmarks

class BookmarksManager:

    @staticmethod
    def get_all_bookmarks(data):
        all_bookmarks_objs = Bookmarks.objects.all()
        return all_bookmarks_objs

    @staticmethod
    def get_single_bookmark(data):
        bookmarks_id = data.get("bookmarksId", False)
        if not bookmarks_id:
            raise Exception("No bookmarks id provided")
        bookmark = Bookmarks.objects.filter(id=bookmarks_id)
        return bookmark
    
    @staticmethod
    def update_single_bookmark(data):
        bookmarks_id = data.get("bookmarksId", False)
        if not bookmarks_id:
            raise Exception("No bookmarks id provided")
        
        bookmark = Bookmarks.objects.filter(id=bookmarks_id)
        bookmark.video_id = data.get("videoId", bookmark.video_id)
        bookmark.module_id = data.get("moduleId", bookmark.module_id)
        bookmark.save()
        
        return bookmark

    @staticmethod
    def delete_single_bookmark(data):
        bookmarks_id = data.get("bookmarksId", False)
        if not bookmarks_id:
            raise Exception("No bookmarks id provided")
        
        bookmark = Bookmarks.objects.filter(id=bookmarks_id)
        bookmark.delete()
        
        return bookmark


from additional.models import TechToLearn

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
        tech_to_learn = TechToLearn.objects.filter(id=tech_to_learn_id)
        return tech_to_learn
    
    @staticmethod
    def update_single_tech_to_learn(data):
        tech_to_learn_id = data.get("techToLearnId", False)
        if not tech_to_learn_id:
            raise Exception("No Tech id provided")
        
        tech_to_learn = TechToLearn.objects.filter(id=tech_to_learn_id)
        tech_to_learn.name = data.get("name", tech_to_learn.name)
        tech_to_learn.description = data.get("description", tech_to_learn.description)
        tech_to_learn.thumbnail = data.get("thumbnail", tech_to_learn.thumbnail)
        tech_to_learn.save()
        
        return tech_to_learn

    @staticmethod
    def delete_single_tech_to_learn(data):
        tech_to_learn_id = data.get("techToLearnId", False)
        if not tech_to_learn_id:
            raise Exception("No Tech id provided")
        
        tech_to_learn = TechToLearn.objects.filter(id=tech_to_learn_id)
        tech_to_learn.delete()
        
        return tech_to_learn
