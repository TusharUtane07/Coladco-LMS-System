/* eslint-disable */
export class Urls {
    static MPHRMS_API_PREFIX = 'api/v1/';

    // users
    static LOGIN_USER = Urls.MPHRMS_API_PREFIX + 'users/login-user/';
    static REGISTER_USER = Urls.MPHRMS_API_PREFIX + 'users/register-profile/';
    static VERIFY_OTP = Urls.MPHRMS_API_PREFIX + 'users/verify-otp/';
    static CREATE_PASSWORD_USER = Urls.MPHRMS_API_PREFIX + 'users/create-password-user/';

    // tech to learn
    static TECH_TO_LEARN = Urls.MPHRMS_API_PREFIX + 'additional/all-tech-to-learn-fetch/'
    
    // reviews
    static REVIEWS_GET = Urls.MPHRMS_API_PREFIX + 'course/all-reviews-fetch/'
    static NEW_USER_REVIEW = Urls.MPHRMS_API_PREFIX + 'course/new-review-course/'


    // course
    static COURSE = Urls.MPHRMS_API_PREFIX + 'course/all-courses-fetch/'

    // module
    static MODULE = Urls.MPHRMS_API_PREFIX + 'course/all-modules-fetch/'

    // videos
    static VIDEOS = Urls.MPHRMS_API_PREFIX + 'course/all-videos-fetch/'

    // people
    static PEOPLE = Urls.MPHRMS_API_PREFIX + 'users/all-profile-fetch/'
    static USER_PROFILE = Urls.MPHRMS_API_PREFIX + 'users/single-profile-fetch/'

    // job posting
    static JOBPOSTING = Urls.MPHRMS_API_PREFIX + 'jobposting/all-job-postings-fetch/'
    static JOBLISTINGDETAILS = Urls.MPHRMS_API_PREFIX + 'jobposting/single-job-posting-fetch/'
    static JOB_POSTING_SINGLE_TASK =  Urls.MPHRMS_API_PREFIX + 'jobposting/single-job-posting-delete/'
    
    // feed post 
    static FEEDPOST = Urls.MPHRMS_API_PREFIX + 'feed/all-posts-fetch/'
    static NEW_POST_USER = Urls.MPHRMS_API_PREFIX + 'feed/new-post-user/'
    static NEW_COMMENT_USER = Urls.MPHRMS_API_PREFIX + 'feed/new-comment-user/'
    static NEW_LIKE_POST = Urls.MPHRMS_API_PREFIX + 'feed/new-like-user/'



    // bookmarks
    static BOOKMARKS = Urls.MPHRMS_API_PREFIX + 'additional/all-bookmarks-fetch/'

}
