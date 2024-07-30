/* eslint-disable */

import { HttpAxiosService } from './httpService.jsx';
import { Urls } from './constantsUrls';
import { test_url } from "../../src/config/environment.js"

const project = new HttpAxiosService(test_url);

//login and signup
export const loginFunctionApi = (payload_data) => {
  return project.post(Urls.LOGIN_USER, payload_data);
};
export const userRegisterFunctionApi = (payload_data) => {
  return project.post(Urls.REGISTER_USER, payload_data);
};
export const verifyOtpFunctionApi = (payload_data) => {
  return project.post(Urls.VERIFY_OTP, payload_data);
};
export const changePasswordFunctionApi = (payload_data) => {
  return project.post(Urls.CREATE_PASSWORD_USER, payload_data);
};

// tech to learn 
export const techToLearnApi = (payload_data) => {
  return project.get(Urls.TECH_TO_LEARN, payload_data)
}

// reviews 
export const gettingReviewsDataApi = (payload_data) => {
  return project.get(Urls.REVIEWS_GET, payload_data)
}
export const gettingReviewSummary = (payload_data) => {
  return project.get(Urls.REVIEWS_SUMMARY_GET, payload_data)
}
export const NewCourseReview = (payload_data) => {
  return project.post(Urls.NEW_USER_REVIEW, payload_data)
}

// course 
export const courseApi = (payload_data) => {
  return project.get(Urls.COURSE, payload_data)
}
// videos 
export const videosApi = (payload_data) => {
  return project.get(Urls.VIDEOS, payload_data)
}

// modules
export const moduleApi = (payload_data) => {
  return project.get(Urls.MODULE, payload_data)
}

// people
export const peopleApi = (payload_data) => {
  return project.get(Urls.PEOPLE, payload_data)
}
export const profileApi = (payload_data) => {
  return project.get(Urls.USER_PROFILE, payload_data)
}

// assignemnets
export const assignmentsApi = (payload_data) => {
  return project.get(Urls.ASSIGNMENTS, payload_data)
}

export const assignemnetsDetails = (payload_data) => {
  return project.get(Urls.AASSIGNMENTS_DETAILS, payload_data)
}

// job posting
export const jobPostingApi = (payload_data) => {
  return project.get(Urls.JOBPOSTING, payload_data)
}

export const jobPostingPostApi = (payload_data) => {
  return project.post(Urls.JOBPOSTING, payload_data)
}

export const jobPostingDeleteApi = (payload_data) => {
  return project.post(Urls.JOB_POSTING_SINGLE_TASK, payload_data)
}


export const jobListingDetails = (payload_data) => {
  return project.get(Urls.JOBLISTINGDETAILS, payload_data)
}

// post
export const feedPostApi = (payload_data) => {
  return project.get(Urls.FEEDPOST, payload_data)
}
export const NewFeedPost = (payload_data) => {
  return project.post(Urls.NEW_POST_USER, payload_data)
}
export const NewCommentPost = (payload_data) => {
  return project.post(Urls.NEW_COMMENT_USER, payload_data)
}
export const LikePostApi = (payload_data) => {
  return project.post(Urls.NEW_LIKE_POST, payload_data)
}


// bookmarks
export const fetchBookmarksApi = (payload_data) => {
  return project.get(Urls.BOOKMARKS, payload_data)
}