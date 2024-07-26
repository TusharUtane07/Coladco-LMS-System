import React, { Component, Fragment, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import profilephoto from "../assets/profile.jpg";
import logo from "../assets/logo.jpg";
import Popupchat from "./Popupchat";
import background from "../assets/images/background.png"
import yatin from "../assets/images/yatin.png"

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import python from '../assets/python.jpeg';
import django from '../assets/django.png';
import mysql from '../assets/mysql.png';
import github from '../assets/github.jpeg';
import vps from '../assets/vps.png';

import bharatDigital from "../assets/partnership/bharatdigital.png"
import techkareer from "../assets/partnership/techkareer.png"
import banner1 from "../assets/banners/banner1.png"
import banner2 from "../assets/banners/banner2.png"
import additional1 from "../assets/additional/additional1.png"
import additional2 from "../assets/additional/additional2.png"
import additional3 from "../assets/additional/additional3.png"
import person1 from "../assets/people/1.png"
import person2 from "../assets/people/2.png"
import person3 from "../assets/people/3.png"
import person4 from "../assets/people/4.png"
import person5 from "../assets/people/5.png"

const blogList = [
  {
    imageUrl: additional1,
    title: "Mock Interviews",
    meta: "React Native",
    des: " Prepare for job interviews with our mock interview sessions by professionals.",
  },
  {
    imageUrl: additional2,
    title: "Preparation & Placements",
    meta: "Freelance Mastery",
    des: "Get help crafting a professional resume that highlights your skills and projects.",
  },
  {
    imageUrl: additional3,
    title: "Live Projects",
    meta: "Drop Shipping",
    des: "Work on live projects that simulate real-world challenges and scenarios.",
  },
];
const courseList = [
  {
    imageUrl: banner1,
    title: "Complete Web Development Bootcamp From Scratch",
    tag: "ONLINE",
    lesson: "32 ",
    status: "alert-warning text-warning",
  },
  {
    imageUrl: banner2,
    title: "Offline Co-Hort / Internship development program",
    tag: "OFFLINE",
    time: "6 ",
    status: "alert-warning text-warning",
  },
];

const priceList = [
  {
    color: "bg-primary shadow-xss",
    price: "₹4999",
    title: "Premium",
    des: "For anyone validating Framer as a professional prototyping tool.",
    status: "text-white",
    btn: "btn btn-block border-0 w-100 bg-white p-3 text-primary fw-600 rounded-lg d-inline-block font-xssss btn-light",
  },
  {
    color: "bg-white shadow-lg",
    price: "₹0",
    title: "Free",
    des: "For anyone validating Framer as a professional prototyping tool.",
    status: "text-grey-900",
    btn: "btn btn-block border-0 w-100 bg-primary p-3 text-white fw-600 rounded-lg d-inline-block font-xssss btn-light",
  },
];

const classesList = [
  {
    imageUrl: html,
    title: "HTML",
    num: "Course",
    bg: "#fcf1eb",
  },
  {
    imageUrl: css,
    title: "CSS",
    num: "Course",
    bg: "#fff9eb",
  },
  {
    imageUrl: javascript,
    title: "Javascript",
    num: "Course",
    bg: "#e5f4fb",
  },
  {
    imageUrl: react,
    title: "React",
    num: "Course",
    bg: "#dcf4f8",
  },
  {
    imageUrl: python,
    title: "Python",
    num: "Course",
    bg: "#e5f4fb",
  },
  {
    imageUrl: django,
    title: "Django",
    num: "Course",
    bg: "#fcf1eb",
  },
  {
    imageUrl: mysql,
    title: "MYSQL",
    num: "Course",
    bg: "#fcf1eb",
  },
  {
    imageUrl: github,
    title: "GitHub",
    num: "Course",
    bg: "#fff9eb",
  },
  {
    imageUrl: vps,
    title: "VPS",
    num: "Course",
    bg: "#fff9eb",
  },
];
const feedbackList = [
  {
    name: "Yatin Vohra",
    status: "Full Stack Developer and Freelancer",
    color: "bg-warning",
    icon: "ti-quote-right",
    des: "Stay ahead with a curriculum designed by industry experts to meet current market demands",
  },
];

const brandList = [
  bharatDigital,
  techkareer
];

const Homefive  = () => {
  const [onChat,setoffChat] = useState(false)
    const brandsettings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 5,
      centerMode: false,
      variableWidth: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
      prevArrow: (
        <button className="btn btn-primary slick-prev">Previous</button>
      ),
      nextArrow: <button className="btn btn-primary slick-next">Next</button>,
    };
    const categorysettings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 1000,
      arrows: true,
      dots: false,
      centerMode: false,
      variableWidth: true,
      autoplay: true,

      prevArrow: (
        <button className="btn btn-primary slick-prev">Previous</button>
      ),
      nextArrow: <button className="btn btn-primary slick-next">Next</button>,
    };
    const feedbacksettings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      arrows: true,
      dots: false,
      centerMode: false,
      variableWidth: true,
      autoplay: true,

      prevArrow: (
        <button className="btn btn-primary slick-prev">Previous</button>
      ),
      nextArrow: <button className="btn btn-primary slick-next">Next</button>,
    };
    return (
      <Fragment>
        <Header
          divclassName="shadow-none pos-fixed position-absolute"
          color="light"
        />
        <div
          className="banner-wrapper bg-image-cover bg-image-bottomcenter"
          style={{
            backgroundImage: `${background}`,
            height: "42rem",
            overflow: 'hidden'
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 vh-lg--100 align-items-center d-flex sm-mt-3">
                <div className="card w-100 border-0 bg-transparent d-block sm-mt-2" style={{
                height:"90vh"
              }}>
                  <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-primary d-inline-block text-primary mb-3">
                  Choose Your Path: Online Course or Offline Internship Cohort


                  </span>
                  <h2 className="fw-700 text-grey-900 display4-size display4-lg-size display4-md-size lh-1 mb-0 os-init aos-init aos-animate overflow-hidden">
                  Transform Your Career with Our Courses{" "}
                    <i className="feather-slack text-success font-xxl"></i>
                  </h2>
                  <h4 className="fw-500 mb-4 lh-30 font-xsss text-grey-500 mt-3 os-init aos-init aos-animate">
                  For those who have already mastered the basics or starting from scratch and are looking to deepen their knowledge, our Advanced Full Stack Specialization Courses offer the perfect next step. These courses are designed to help you become an expert in the latest technologies and best practices in full stack development.                  </h4>
                  <Link
                    to="/course-details"
                    className="btn border-0 w200 bg-primary p-3 text-white fw-600 rounded-lg d-inline-block font-xssss btn-light mt-1 os-init aos-init aos-animate"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 align-items-center d-flex " style={{
                height:"80vh",
                padding:"0rem"
              }}>
                <img
                  src={yatin}
                  alt="icon"
                  className="pt-5 d-none d-lg-block"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="search-wrap position-relative" style={{ top: "-50px", background:"rgb(243,242,240)", display:"flex", alignItems:"center",justifyContent:"center" }}>
          <div className="container">
            <div className="row" >
              <div className="col-lg-12"  style={{
                margin:"2rem 0rem"
          }}>
                <div className="card rounded-lg p-3 border-0 bg-no-repeat bg-white shadow-lg">
                  <div className="card-body w-100 p-0">
                    <div className="form-group mt-0 p-2 mb-0 bg-white rounded-lg">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="form-group icon-input mb-0">
                            <i className="ti-search font-xs text-grey-400"></i>
                            <input
                              type="text"
                              className="style1-input border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500"
                              placeholder="Search your doubt.."
                            />
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="form-group icon-input mb-0">
                            <i className="ti-package font-xs text-grey-400"></i>
                            <select className="style1-select bg-transparent border-0 pl-5">
                              <option value="">All Categories</option>
                              <option value="Bootstrap">Bootstrap</option>
                              <option value="React">React</option>
                              <option value="Backend">Backend</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <Link
                            to="#"
                            className="w-100 d-block btn bg-current text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase "
                          >
                            Search
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="category-wrapper pb-lg--7 pb-5">
          <div className="container">
            <div className="row">
              <div className="page-title style1 col-xl-4 col-lg-4 col-md-6 text-left">
                <h2 className="text-grey-900 fw-700  display2-md-size pb-3 mb-0 mt-1 d-block lh-3">
                  Tech You Will Learn
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 mt-4 ">
                <Slider {...categorysettings}>
                  {classesList.map((value, index) => (
                    <div
                      key={index}
                      className="card cat-card-hover mr-1 w140 border-0 p-0 text-center"
                    >
                      <div
                        className="card-body p-4 ml-0 rounded-lg"
                        style={{ background: `${value.bg}` }}
                      >
                        <Link to="#@" className="btn-round-xl bg-white">
                          <img
                            src={value.imageUrl}
                            alt="icon"
                            className="p-2 w-100"
                          />
                        </Link>
                        <h4 className="fw-600 font-xsss mt-3 mb-0">
                          {value.title}
                          <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                            {value.num}
                          </span>
                        </h4>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="how-to-work pb-lg--7 pt-3">
          <div className="container">
            <div className="row justify-content-center">
              <div className="page-title style1 col-xl-6 col-lg-6 col-md-10 text-center mb-5">
                <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block">
                  Join our course
                </h2>
                <p className="fw-300 font-xsss lh-28 text-grey-500">
                  Join our latest course and master the skills you need for
                  success in web development. Learn from industry experts, gain
                  hands-on experience, and build real-world projects. Enroll now
                  and take your career to the next level!
                </p>
              </div>
            </div>

            <div className="row">
              {courseList.map((value, index) => (
                // Strat Single Demo
                <div
                  className="card course-card  h-25 shadow-xss border-0 rounded-lg overflow-hidden mb-4 col-6"
                  key={index}
                >
                  <div
                    className="card-image w-100 mb-3"
                   style={{
                    overflow:"hidden"
                   }}
                  >
                    <span
                      to="/coursedetails"
                      className="video-bttn position-relative d-block"
                    >
                      <img
                        src={`${value.imageUrl}`}
                        alt="course"
                        className="w-100"
                      />
                    </span>
                  </div>
                  <div className="card-body pt-0">
                    <span
                      className={`font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block mr-1 ${value.status}`}
                    >
                      {value.tag}
                    </span>
                    
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                      <span className="text-dark text-grey-900">
                        {value.title}
                      </span>
                    </h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                      {value?.lesson && value?.lesson + "Modules"} 
                      {value?.time && value?.time + "Months Duration"} 
                    </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                      <li>
                        <img
                          src={person1}
                          alt="avater"
                          className="w30 d-inline-block rounded-circle"
                        />
                      </li>
                      <li>
                        <img
                          src={person2}
                          alt="avater"
                          className="w30 d-inline-block rounded-circle"
                        />
                      </li>
                      <li>
                        <img
                          src={person3}
                          alt="avater"
                          className="w30 d-inline-block"
                        />
                      </li>
                      <li>
                        <img
                          src={person4}
                          alt="avater"
                          className="w30 d-inline-block rounded-circle"
                        />
                      </li>
                      <li className="last-member">
                        <Link
                          to="/default-course-one"
                          className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center"
                        >
                          +2
                        </Link>
                      </li>
                      <li className="pl-4 w-auto">
                        <Link
                          to="/default-course-one"
                          className="fw-500 text-grey-500 font-xssss"
                        >
                          Student apply
                        </Link>
                      </li>
                    </ul>
                    <Link
                      to="/course-details"
                      className="btn btn-primary mt-3 p-3"
                    >
                      View Course
                    </Link>
                  </div>
                </div>

                // End Single Demo
              ))}
            </div>
          </div>
        </div>

        <div className="blog-page bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5">
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-warning d-inline-block text-warning mr-1">
                  Additional Offerings
                </span>
                <h2 className="text-grey-900 fw-700 font-xxl mb-0 mt-3 d-block lh-3">
                  Don't Miss Out Our Additional Offerings
                </h2>
                <p className="fw-300 font-xssss lh-28 text-grey-500">
                  Explore our latest courses designed to enhance your skills and
                  career prospects. Whether you're diving into React Native,
                  mastering freelance mastery, or exploring drop shipping, our
                  practical knowledge and hands-on experience will help you
                  succeed in today's competitive market.
                </p>
              </div>
            </div>
            <div className="row">
              {blogList.map((value, index) => (
                <div className="col-lg-4 col-md-6 col-sm-6 mb-4" key={index}>
                  <article className="post-article p-0 border-0 shadow-xss rounded-lg overflow-hidden aos-init aos-animate">
                    <Link to="/blog-single">
                      <img
                        src={`${value.imageUrl}`}
                        alt="blog"
                        className="w-100"
                      />
                    </Link>
                    <div className="post-content p-4">
                     
                      <div className="clearfix"></div>
                      <h2 className="post-title mt-2 mb-2 pr-3">
                        <Link
                          to="/blog-single"
                          className="lh-30 font-sm mont-font text-grey-800 fw-700"
                        >
                          {value.title}
                        </Link>
                      </h2>
                      <p className="font-xsss fw-400 text-grey-500 lh-26 mt-0 mb-2 pr-3">
                        {value.des}
                      </p>
                     
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="feature-wrapper pt-lg--7 pt-7">
          <div className="container">
            <div className="row justify-content-center"></div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <Slider {...feedbacksettings}>
                  {feedbackList.map((value, index) => (
                    <div key={index} className="text-center">
                    
                      <h4 className="fw-500 lh-5 font-md mb-3 text-grey-700">
                        " {value.des} "
                      </h4>
                      <div className="clearfix"></div>
                     
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className="price-wrap pt-lg--7 pt-5 layer-after ">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 sm-mb-4">
                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-success d-inline-block text-success mr-1">
                  Our Pricing
                </span>
                <h2 className="text-grey-900 fw-700 font-xxl pb-3 mb-0 mt-3 d-block lh-3">
                Ready to Start Your Journey?
                </h2>
                <p className="fw-300 font-xssss lh-28 text-grey-500">
                Complete the program with a potential internship or job placement at our partnering companies.
                </p>
               
              </div>

              <div className="col-lg-7 offset-lg-1">
                <div className="row">
                  {priceList.map((value, index) => (
                    <div className="col-lg-6" key={index}>
                      <div
                        className={`card p-4 mb-4 border-0 rounded-lg ${value.color}`}
                      >
                        <div className="card-body">
                          <h2
                            className={`font-xsssss fw-700 text-uppercase ls-3 ${value.status}`}
                          >
                            {value.title}
                          </h2>
                          <h1
                            className={`display2-size  fw-700 ${value.status}`}
                          >
                            {value.price}
                          </h1>
                          <h4
                            className={`fw-500 mb-4 lh-24 font-xssss ${value.status}`}
                          >
                            {value.des}
                          </h4>
                          <h4 className={`font-xssss mb-2 ${value.status}`}>
                            <i className={`ti-check mr-2 ${value.status}`}></i>
                            lorem
                          </h4>
                          <h4 className={`font-xssss mb-2 ${value.status}`}>
                            <i className={`ti-check mr-2 ${value.status}`}></i>
                            lorem
                          </h4>
                          <h4 className={`font-xssss mb-4 ${value.status}`}>
                            <i className={`ti-check mr-2 ${value.status}`}></i>{" "}
                            lorem
                          </h4>
                          <Link to="#" className={value.btn}>
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="brand-wrapper pt-5 pb-5">
          <div className="container">
            <div className="row">
             
            </div>
          </div>
        </div>
        <Popupchat onChat={onChat} setoffChat={setoffChat}/>
        <Footer bgColor="bg-dark" />
      </Fragment>
    );
  }

export default Homefive;
