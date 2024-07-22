/* eslint-disable */
export class Urls {
    static MPHRMS_API_PREFIX = 'api/v1/';

    // users
    static LOGIN_USER = Urls.MPHRMS_API_PREFIX + 'users/login-user/';
    static REGISTER_USER = Urls.MPHRMS_API_PREFIX + 'users/register-profile/';
    static VERIFY_OTP = Urls.MPHRMS_API_PREFIX + 'users/verify-otp/';
    static CHANGE_PASSWORD_USER = Urls.MPHRMS_API_PREFIX + 'users/change-password-user/';

    // tech to learn
    static TECH_TO_LEARN = Urls.MPHRMS_API_PREFIX + 'additional/all-tech-to-learn-fetch/'

    // course
    static COURSE = Urls.MPHRMS_API_PREFIX + 'course/all-courses-fetch/'

    // module
    static MODULE = Urls.MPHRMS_API_PREFIX + 'course/all-modules-fetch/'

    // people
    static PEOPLE = Urls.MPHRMS_API_PREFIX + 'users/all-profile-fetch/'
    static USER_PROFILE = Urls.MPHRMS_API_PREFIX + 'users/single-profile-fetch/'

    // job posting
    static JOBPOSTING = Urls.MPHRMS_API_PREFIX + 'jobposting/all-job-postings-fetch/'
    static JOBLISTINGDETAILS = Urls.MPHRMS_API_PREFIX + 'jobposting/single-job-posting-fetch/'
    
    // feed post 
    static FEEDPOST = Urls.MPHRMS_API_PREFIX + 'feed/all-posts-fetch/'

}
