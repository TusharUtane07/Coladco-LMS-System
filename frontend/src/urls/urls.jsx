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
  return project.post(Urls.LOGIN_USER, payload_data);
};

// tech to learn 
export const techToLearnApi = () => {
  return project.get(Urls.TECH_TO_LEARN)
}

// course 
export const courseApi = () => {
  return project.get(Urls.COURSE)
}

// people
export const peopleApi = () => {
  return project.get(Urls.PEOPLE)
}