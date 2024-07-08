/* eslint-disable */

import { HttpAxiosService } from './httpService.jsx';
import { Urls } from './constantsUrls';
import { test_url } from "../../src/config/environment.js"

const project = new HttpAxiosService(test_url);

//login and signup
export const phoneNumberOtp = (payload_data) => {
  return project.post(Urls.PHONE_NUMBER_OTP, payload_data);
};
export const courseRelated = (payload_data) => {
  return project.post(Urls.USER_PROFILE, payload_data);
};
export const loginFucntion = (payload_data) => {
  return project.get(Urls.TUSHAR_NEW_API, payload_data);
};
