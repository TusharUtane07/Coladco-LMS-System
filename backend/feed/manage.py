from feed.models import Post, Comments


class PostManager:

    @staticmethod
    def get_all_posts(data):
        all_posts_objs = Post.objects.all()
        return all_posts_objs

    @staticmethod
    def get_single_posts(data):
        posts_id = data.get("postsId", False)
        if not posts_id:
            raise Exception("No Post id provided")
        all_posts_objs = Post.objects.filter(id=posts_id)
        return all_posts_objs
    
class CommentsManager:

    @staticmethod
    def get_all_comments(data):
        all_comments_objs = Comments.objects.all()
        return all_comments_objs

    @staticmethod
    def get_single_comments(data):
        comments_id = data.get("commentsId", False)
        if not comments_id:
            raise Exception("No Comment id provided")
        all_comments_objs = Comments.objects.filter(id=comments_id)
        return all_comments_objs
