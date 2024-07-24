from feed.models import Post, PostComments


class PostManager:

    @staticmethod
    def get_all_posts(data):
        all_posts_objs = Post.objects.filter().prefetch_related("post_comments", "profile").order_by("-created_at")
        return all_posts_objs

    @staticmethod
    def add_new_post(request, data):
        message = data.get("message")
        user_id = request.user.id
        if not message:
            raise Exception("No message is provided")
        if not user_id:
            raise Exception("No user is provided")
        Post.objects.create(message=message, profile_id=user_id)

    @staticmethod
    def like_post(post_id):
        post = Post.objects.filter(id=post_id).first()
        if post:
            post.likes += 1
            post.save()
        return post
    
    @staticmethod
    def get_single_posts(data):
        posts_id = data.get("postId", False)
        if not posts_id:
            raise Exception("No Post id provided")
        all_posts_objs = Post.objects.filter(id=posts_id)
        return all_posts_objs
    
    @staticmethod
    def update_single_post(data):
        post_id = data.get("postId", False)
        if not post_id:
            raise Exception("No post id provided")
        
        all_posts_objs = Post.objects.filter(id=post_id)
        if all_posts_objs:
            post = all_posts_objs[0]
            post.message = data.get("message", post.message)
            post.save()
        
        return all_posts_objs

    @staticmethod
    def delete_single_post(data):
        post_id = data.get("postId", False)
        if not post_id:
            raise Exception("No post id provided")
        
        all_posts_objs = Post.objects.filter(id=post_id)
        if all_posts_objs:
            all_posts_objs[0].delete()
        
        return all_posts_objs
    
class CommentsManager:

    @staticmethod
    def get_all_comments(data):
        all_comments_objs = PostComments.objects.order_by('-created_at')
        return all_comments_objs
    
    @staticmethod
    def add_new_comment(request, data):
        comment = data.get("comment")
        post_id = data.get("postId")
        user_id = request.user.id
        if not comment:
            raise Exception("No comment is provided")
        if not user_id:
            raise Exception("No user is provided")
        if not post_id:
            raise Exception("No post id is provided")
        post = Post.objects.get(id=post_id)
        PostComments.objects.create(comment=comment, profile_id=user_id, post=post)

    @staticmethod
    def get_single_comments(data):
        profile_id = 1
        comments_id = data.get("commentsId", False)
        if not comments_id:
            raise Exception("No Comment id provided")
        all_comments_objs = PostComments.objects.filter(id=comments_id, profile=profile_id)
        all_comments_objs = []
        return all_comments_objs
    
    @staticmethod
    def update_single_comment(data):
        comment_id = data.get("commentId", False)
        if not comment_id:
            raise Exception("No comment id provided")
        
        all_comments_objs = []
        # all_comments_objs = Comments.objects.filter(id=comment_id)
        if all_comments_objs:
            comment = all_comments_objs[0]
            comment.message = data.get("message", comment.message)
            comment.save()
        
        return all_comments_objs

    @staticmethod
    def delete_single_comment(data):
        comment_id = data.get("commentId", False)
        if not comment_id:
            raise Exception("No comment id provided")
        
        all_comments_objs = []
        # all_comments_objs = Comments.objects.filter(id=comment_id)
        if all_comments_objs:
            all_comments_objs[0].delete()
        
        return all_comments_objs