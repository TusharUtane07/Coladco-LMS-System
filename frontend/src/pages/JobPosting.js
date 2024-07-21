import React, { Component, Fragment, useEffect, useState } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { jobPostingApi } from '../urls/urls';
import useAxios from '../network/useAxios.js'

const popularList = [
  {
    imageUrl: 'course.png',
    title: 'React Developer ',
    lesson: '32 ',
    status: 'alert-warning text-warning',
  },
  {
    imageUrl: 'course.png',
    title: 'Python Developer ',
    price: '40',
    tag: 'Desinger',
    lesson: '24 ',
    status: 'alert-danger text-danger',
  },
  {
    imageUrl: 'course.png',
    title: 'Full-stack Developer',
    price: '60',
    tag: 'Bootstrap',
    lesson: '14 ',
    status: 'alert-success text-success',
  },
  
];
const JobPosting = () => {

  const [jobPostingResponse, jobPostingError, jobPostingLoading, jobPostingFetch] = useAxios();

  const [jobPosting, setJobPosting] = useState([]);
  
  useEffect(()=> {
    jobPostingFetch(jobPostingApi())
  }, [])
  
  useEffect(() => {
    if(jobPostingFetch?.data){
      setJobPosting(jobPostingResponse?.data)
      console.log(jobPostingResponse)
    }
  }, [])
    
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
        <div className="main-wrapper">
          <Navheader />

          <div className="main-content">
            <Appheader />

            <div className="middle-sidebar-bottom theme-dark-bg">
              <div className="middle-sidebar-left">
                <div className="row">                  
                  <div className="col-lg-12 mt-3 d-flex flex-row justify-content-center">
                    
                      {jobPostingResponse?.data?.map((value, index) => (
                        <div
                          className="card course-card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-3 mb-4"
                          key={index}
                        >
                          <div className="card-image w-100 mb-3">
                            <Link
                              to={`/job-listing/${value.id}/`}
                              className=" position-relative d-block"
                            >
                              <img
                                src={`assets/images/${value.imageUrl}`}
                                alt="course"
                                className="w-100"
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
  }


export default JobPosting;
