import React, { Component, Fragment, useEffect, useState } from "react";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import Appheader from "../components/Appheader";
import Profile from "../components/Profile";
import Myclass from "../components/Myclass";
import Subscribe from "../components/Subscribe";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { jobPostingApi } from "../urls/urls";
import useAxios from "../network/useAxios.js";

const popularList = [
  {
    imageUrl: "course.png",
    title: "React Developer ",
    lesson: "32 ",
    status: "alert-warning text-warning",
  },
  {
    imageUrl: "course.png",
    title: "Python Developer ",
    price: "40",
    tag: "Desinger",
    lesson: "24 ",
    status: "alert-danger text-danger",
  },
  {
    imageUrl: "course.png",
    title: "Full-stack Developer",
    price: "60",
    tag: "Bootstrap",
    lesson: "14 ",
    status: "alert-success text-success",
  },
];
const JobPosting = () => {
  const [
    jobPostingResponse,
    jobPostingError,
    jobPostingLoading,
    jobPostingFetch,
  ] = useAxios();

  const [jobPosting, setJobPosting] = useState([]);

  useEffect(() => {
    jobPostingFetch(jobPostingApi());
  }, []);

  useEffect(() => {
    if (jobPostingFetch?.data) {
      setJobPosting(jobPostingResponse?.data);
      console.log(jobPostingResponse);
    }
  }, []);

  const popularSlider = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: false,
    variableWidth: true,
  };

  return (
    <Fragment>
      <style>
        {`
            .course-card {
  transition: transform 0.3s, box-shadow 0.3s;
}

.course-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.card-body {
  padding: 15px;
}

.card-image img {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.text-dark:hover {
  color: #007bff;
}

a {
  text-decoration: none;
  color: inherit;
}

.read-more-btn {
  margin-top: 10px;
  padding: 6px 6px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  display: block;
  width: 50%;
}

.read-more-btn:hover {
  background-color: #0056b3;
  color: white;
}

`}
      </style>
      <div className="main-wrapper">
        <Navheader />

        <div className="main-content">
          <Appheader />

          <div className="middle-sidebar-bottom theme-dark-bg">
            <div className="middle-sidebar-left">
              <div className="row">
                <div className="col-lg-12 mt-3 d-flex flex-row justify-content-center flex-wrap">
                  {jobPostingResponse?.data?.map((value, index) => (
                    <div
                      className="card course-card w300 p-0 shadow-sm border-0 rounded-lg overflow-hidden mr-3 mb-4"
                      key={index}
                      style={{ width: "18rem" }}
                    >
                      <div className="card-image w-100 mb-3">
                        <Link
                          to={`/job-listing/${value.id}/`}
                          className="position-relative d-block"
                        >
                          <img
                            src={`assets/images/${value.imageUrl}`}
                            alt="course"
                            className="w-100"
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                        </Link>
                      </div>
                      <div className="card-body pt-0">
                        <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                          <Link
                            to={`/job-listing/${value.id}/`}
                            className="text-dark text-grey-900"
                          >
                            {value.company_name}
                          </Link>
                        </h4>
                        <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                          YOE: {value.years_of_experience}
                        </h6>
                        <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                          Job Profile: {value.job_profile}
                        </h6>
                        <Link
                          to={`/job-listing/${value.id}/`}
                          className="read-more-btn"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="middle-sidebar-right scroll-bar">
              <div className="middle-sidebar-right-content">
                <Profile />
                <Myclass />
                <Subscribe />
              </div>
            </div>
          </div>
        </div>

        <Appfooter />
      </div>
    </Fragment>
  );
};

export default JobPosting;
