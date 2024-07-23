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
export const techToLearnApi = () => {
  return project.get(Urls.TECH_TO_LEARN)
}

// course 
export const courseApi = () => {
  return project.get(Urls.COURSE)
}
// videos 
export const videosApi = () => {
  return project.get(Urls.VIDEOS)
}

// modules
export const moduleApi = () => {
  return project.get(Urls.MODULE)
}

// people
export const peopleApi = () => {
  return project.get(Urls.PEOPLE)
}
export const profileApi = (payload_data) => {
  return project.get(Urls.USER_PROFILE, payload_data)
}

// job posting
export const jobPostingApi = () => {
  return project.get(Urls.JOBPOSTING)
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

// bookmarks
export const fetchBookmarksApi = () => {
  return project.get(Urls.BOOKMARKS)
}