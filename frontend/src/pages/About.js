import React, { Component, Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "react-slick";
import axios from "axios";
import useAxios from "../network/useAxios";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import master from "../assets/about/master.png"
import fullStack from "../assets/about/full-stack-banner.png"
import IsMobileView from "../components/IsMobile";


const feedbackList = [
  {
    name: "Rajesh Patel",
    status: "Student",
    des: "I found the course very helpful in mastering full-stack web development. It covers everything from HTML and CSS to advanced frameworks like React and Django.",
  },
  {
    name: "Preeti Sharma",
    status: "Student",
    des: "As a frontend developer, this course helped me solidify my skills in React and Redux Toolkit. The projects were practical and relevant, preparing me well for real-world applications.",
  },
  {
    name: "Amit Singh",
    status: "Student",
    des: "Learning Python with Django was a game-changer for me. The course structure is excellent, and the support for freelancing and job placements is a big plus.",
  },
  {
    name: "Anjali Gupta",
    status: "Student",
    des: "I'm new to web development, and this course was perfect for beginners like me. The step-by-step approach and hands-on projects made learning enjoyable and effective.",
  },
  {
    name: "Sandeep Kumar",
    status: "Student",
    des: "Even as a designer, understanding front-end technologies like React and Redux Toolkit was crucial for my career growth. This course provided exactly what I needed.",
  },
];

const About = () => {
  const [url, setUrl] = useState("");
  const isMobile = IsMobileView()  
  const { loading, data, error } = useAxios(url);

  const check = () => {
    setUrl("https://jsonplaceholder.typicode.com/todos/1");
    console.log(loading, data, error);
  };

  
  const feedbacksettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: isMobile? 1 : 3,
    centerMode: false,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: (
      <button className="btn btn-primary slick-prev">Previous</button>
    ),
    nextArrow: (
      <button className="btn btn-primary slick-next">Next</button>
    ),
  };
  

  return (
    <Fragment>
      <Header />

      <div className="about-wrapper pb-lg--7 pt-lg--7 pt-5 pb-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-2 mb-0 mt-3 d-block lh-3">
                What you'll learn from this course
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h4 className=" fw-500 mb-4 lh-30 font-xsss text-grey-500 mt-0">
                Master the essentials of full-stack web development, including
                HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Redux Toolkit for
                front-end development, and Python with Django for backend
                development.{" "}
              </h4>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <ul className="d-block list-inline float-right-md mb-3">
                <li className="list-inline-item mr-1">
                  <a href="https://www.linkedin.com/in/yatinvohra/" target="_blank" className="btn-round-md bg-linkedin overflow-hidden">
                    <i className="font-xs ti-linkedin text-white"></i>
                  </a>
                </li>
                <li className="list-inline-item mr-1">
                  <a href="https://www.instagram.com/devwithyatin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"className="btn-round-md bg-instagram overflow-hidden">
                    <i className="font-xs ti-instagram text-white"></i>
                  </a>
                </li>
                 <li className="list-inline-item mr-1">
                  <a href="https://twitter.com/devwithyatin" target="_blank" className="btn-round-md bg-twiiter overflow-hidden">
                    <i className="font-xs ti-twitter-alt text-white"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-12 mt-3">
              <a
                href="/about"
                className=""
                data-toggle="modal"
                data-target="#Modalvideo"
              >
                <img
                  src={fullStack}
                  alt="about"
                  className="img-fluid rounded-lg"
                />
              </a>
            </div>
            <div className="col-lg-12 mt-5 text-center pt-3">
              <Link
                to="/course-details"
                className="ml-1 mr-1 rounded-lg text-primary font-xss border-size-md border-primary fw-600 open-font p-3 w200 btn md-mb-2"
              >
                Learn More
              </Link>
              <h3 className="font-xss fw-600 text-grey-500 p-3 d-inline-block d-none-xs">
                or
              </h3>
              <Link
                to="/contact"
                className="ml-1 mr-1 rounded-lg alert-primary text-primary font-xss border-size-md border-0 fw-600 open-font p-3 w200 btn"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="how-to-work">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-4">
              <img
                src={master}
                alt="about"
                className="rounded-lg img-fluid shadow-xs"
              />
            </div>
            <div className="col-lg-6 offset-lg-1 page-title style1">
              <h2 className="fw-700 text-grey-800 display1-size display2-md-size lh-3 pt-lg--5">
                Master the essentials of full-stack web development
              </h2>
              <p className="font-xsss fw-400 text-grey-500 lh-28 mt-0 mb-0 mt-3 w-75 w-xs-90">
                Gain proficiency in both front-end and backend technologies,
                including HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Redux
                Toolkit, Python, and Django.
              </p>

              <h4 className="fw-600 font-xs mt-5 mb-2">
                <i className="ti-check btn-round-xs text-white bg-success mr-2 border overflow-hidden"></i>
                Develop robust web applications
              </h4>
              <p className="fw-300 font-xsss lh-28 text-grey-500 mt-0 ml-4 pl-3 w-75 w-xs-90">
                Learn to build scalable and user-friendly interfaces that meet
                client requirements.
              </p>

              <h4 className="fw-600 font-xs mt-4 mb-2">
                <i className="ti-check btn-round-xs text-white bg-success mr-2 border overflow-hidden"></i>
                Master freelancing strategies
              </h4>
              <p className="fw-300 font-xsss lh-28 text-grey-500 mt-0 ml-4 pl-3 w-75 w-xs-90">
                Acquire essential skills to find clients and manage freelance
                projects effectively.
              </p>

              <h4 className="fw-600 font-xs mt-4 mb-2">
                <i className="ti-check btn-round-xs text-white bg-success mr-2 border overflow-hidden"></i>
                Career support and job opportunities
              </h4>
              <p className="fw-300 font-xsss lh-28 text-grey-500 mt-0 ml-4 pl-3 w-75 w-xs-90">
                Receive internship and job placement assistance, with
                connections to recruiter agencies in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="popular-wrapper pb-0 pt-5 review-screen-get" style={{
      background:"rgb(243, 242, 240)"
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-left mb-3 pb-0">
              <h2 className="text-grey-800 fw-700 font-xl lh-2">
              Student Reviews
              </h2>
            </div>

            <div className="col-lg-12 p-0 pick-check">
              <Slider {...feedbacksettings}>
                {feedbackList.map((value, index) => (
                  <div key={index} className="text-center py-4 px-3" >
                    <div className="card p-5 text-left border-0 shadow-xss rounded-lg"
                    >
                      <div className="card-body pl-0 pt-0">
                        <h4 className="text-grey-900 fw-700 font-xsss mt-0 pt-1">
                          {value.name}
                        </h4>
                        <h5 className="font-xssss fw-500 mb-1 text-grey-500">
                          {value.status}
                        </h5>
                      </div>
                      <p className="font-xsss fw-400 text-grey-500 lh-28 mt-0 mb-0 ">
                        {value.des}
                      </p>
                      <div className="star d-block w-100 text-right mt-4 mb-0">
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w15 mr-1 float-left mr-2"
                        />
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w15 mr-1 float-left mr-2"
                        />
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w15 mr-1 float-left mr-2"
                        />
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w15 mr-1 float-left mr-2"
                        />
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w15 mr-1 float-left mr-2"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe-wrapper pt-5 pt-lg--7">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card w-100 p-4 p-lg--5 rounded-xxl bg-current border-0">
                <div className="row justify-content-center">
                  <div className="col-lg-10 text-center">
                    <h2 className="fw-700 text-white display2-size lh-3 mb-2 display2-md-size">
                      Subscribe up to our newsletter
                    </h2>
                  </div>
                  <div className="col-lg-8 text-center">
                    <p className="font-xsss lh-28 text-white mb-0 d-none-xs">
                    Stay updated with our latest courses, special offers and valuable tech insights to keep ahead.
                    </p>
                  </div>
                  <div className="col-lg-6 text-center mt-4 mb-3">
                    <div className="form-group icon-right-input style2-input mb-0">
                      <input
                        type="text"
                        placeholder="Enter Email Address"
                        className="form-control style2 rounded-xl bg-greylight border-0 font-xsss fw-500 pl-3"
                      />
                      <i className="feather-mail text-primary font-lg m-1"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-wrapper pb-lg--7 pt-lg--7 pb-5 pt-5">
        <div className="container">
          <div className="row">
           
          </div>
        </div>
      </div>
      <Footer bgColor="bg-dark" />
    </Fragment>
  );
};

export default About;
