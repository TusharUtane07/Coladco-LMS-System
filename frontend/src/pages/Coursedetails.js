import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Upperheader from "../components/Upperheader";
import Footer from "../components/Footer";
import { Accordion } from "react-bootstrap";
import ReactPlayer from "react-player";
import { FaAngleDown } from "react-icons/fa";

class Coursedetails extends Component {
  render() {
    return (
      <Fragment>
        <Upperheader />
        <Header />

        <div className="course-details pt-lg--7 pb-lg--7 pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-xxl-9 col-lg-8 mt-n5">
                {/* <div className="card border-0 mb-0 rounded-lg overflow-hidden">
                  <ReactPlayer
                    controls="true"
                    width="100%"
                    height="auto"
                    className="react-player"
                    playing
                    // light={`assets/images/${value.videoimage}`}
                    url={`assets/images/video4.mp4`}
                  />
                </div> */}
                <div className="card d-block border-0 rounded-lg overflow-hidden dark-bg-transparent bg-transparent mt-4 pb-3">
                  <div className="row">
                    <div className="col-10">
                      <h2 className="fw-700 font-md d-block lh-4 mb-3 "style={{ width: '46rem' }}>
                        Complete Web Development Bootcamp From Zero to Hero
                      </h2>
                    </div>
                    {/* <div className="col-2">
                      <a
                        href="/default-course-one"
                        className="btn-round-md ml-3 d-inline-block float-right rounded-lg bg-danger"
                      >
                        <i className="feather-bookmark font-sm text-white"></i>
                      </a>
                      <a
                        href="/default-course-one"
                        className="btn-round-md ml-0 d-inline-block float-right rounded-lg bg-greylight"
                      >
                        <i className="feather-share-2 font-sm text-grey-700"></i>
                      </a>
                    </div> */}
                  </div>

                  <span className="font-xsss fw-700 text-grey-900 d-inline-block ml-0 text-dark">
                    Yatin Vohra
                  </span>
                  <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
                  <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                    Full Stack Developer,
                  </span>
                  <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                    Freelancer,
                  </span>
                  <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                    Javascript,
                  </span>
                  <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                    React Js,
                  </span>
                  <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                    Python,
                  </span>
                  <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                    Django
                  </span>
                  <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
                  <span className="font-xssss fw-700 text-primary d-inline-block ml-0 ">
                    Instructor
                  </span>
                </div>

                <div className="card d-block border-0 rounded-lg overflow-hidden mt-3">
                  <Accordion
                    defaultActiveKey="0"
                    className="accordian mb-0 accordian-course"
                  >
                    <Accordion.Item
                      eventKey="0"
                      className="accordion-item border-0 mb-0 shadow-xss rounded-sm bg-white"
                    >
                      <Accordion.Header
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <span>Course Overview</span>
                        <div style={{ marginLeft: "auto" }}>
                          <button
                            style={{
                              background: "transparent",
                              border: "none",
                              color: "#007bff",
                              cursor: "pointer",
                              fontSize: "1.2rem",
                            }}
                          >
                            <FaAngleDown />
                          </button>
                        </div>
                      </Accordion.Header>

                      <Accordion.Body>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            1
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            Introduction to Full Stack Web Development
                          </span>
                        </div>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            2
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            Frontend: HTML5, CSS3, Bootstrap, JavaScript,
                            ReactJS, Redux Toolkit
                          </span>
                        </div>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            3
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            Backend: Python and Django
                          </span>
                        </div>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            4
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            Certificate, Internship, and Job Assistance
                          </span>
                        </div>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            5
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            Freelancing Guidance and Client Acquisition
                          </span>
                        </div>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            6
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            Connections with 3 Recruiter Agencies for Jobs and
                            Internships
                          </span>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="1"
                      className="accordion-item border-0 mb-0 shadow-xss rounded-6"
                    >
                      <Accordion.Header
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <span>Frontend Developmeny</span>
                        <div style={{ marginLeft: "auto" }}>
                          <button
                            style={{
                              background: "transparent",
                              border: "none",
                              color: "#007bff",
                              cursor: "pointer",
                              fontSize: "1.2rem",
                            }}
                          >
                            <FaAngleDown />
                          </button>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            1
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            HTML5, CSS3, and Bootstrap
                          </span>
                        </div>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            2
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            JavaScript Fundamentals
                          </span>
                        </div>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            3
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            ReactJS and Redux Toolkit
                          </span>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="2"
                      className="accordion-item border-0 mb-0 shadow-xss rounded-6"
                    >
                      <Accordion.Header
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <span>Backend Development</span>
                        <div style={{ marginLeft: "auto" }}>
                          <button
                            style={{
                              background: "transparent",
                              border: "none",
                              color: "#007bff",
                              cursor: "pointer",
                              fontSize: "1.2rem",
                            }}
                          >
                            <FaAngleDown />
                          </button>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            1
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            Python Basics
                          </span>
                        </div>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            2
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            Django Framework
                          </span>
                        </div>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            3
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            Building RESTful APIs
                          </span>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="3"
                      className="accordion-item border-0 mb-0 shadow-xss rounded-6"
                    >
                      <Accordion.Header
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <span>Job and Internship Assistance</span>
                        <div style={{ marginLeft: "auto" }}>
                          <button
                            style={{
                              background: "transparent",
                              border: "none",
                              color: "#007bff",
                              cursor: "pointer",
                              fontSize: "1.2rem",
                            }}
                          >
                            <FaAngleDown />
                          </button>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            1
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            Resume Building
                          </span>
                        </div>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            2
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            Interview Preparation
                          </span>
                        </div>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            3
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            Connections with 3 Recruiter Agencies
                          </span>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="4"
                      className="accordion-item border-0 mb-0 shadow-xss rounded-6"
                    >
                      <Accordion.Header
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <span>Freelancing Guidance</span>
                        <div style={{ marginLeft: "auto" }}>
                          <button
                            style={{
                              background: "transparent",
                              border: "none",
                              color: "#007bff",
                              cursor: "pointer",
                              fontSize: "1.2rem",
                            }}
                          >
                            <FaAngleDown />
                          </button>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            1
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            How to Get Started with Freelancing
                          </span>
                        </div>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            2
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            Finding and Acquiring Clients
                          </span>
                        </div>
                        <div className="card-body d-flex p-2">
                          <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                            3
                          </span>
                          <span className="font-xssss fw-500 text-grey-500 ml-2">
                            Building a Strong Portfolio
                          </span>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4 alert-success">
                  <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 text-success mb-4">
                    What you'll learn from this course
                  </h2>
                  <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-4 position-relative lh-24">
                    <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                    Master the essentials of full-stack web development,
                    including HTML5, CSS3, Bootstrap, JavaScript, ReactJS, and
                    Redux Toolkit for front-end development.
                  </h4>
                  <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-4 position-relative lh-24">
                    <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                    Gain proficiency in backend development using Python and
                    Django, enabling you to build robust and scalable web
                    applications.
                  </h4>
                  <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-4 position-relative lh-24">
                    <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                    Receive a certificate upon completion, along with internship
                    and job placement assistance. Learn essential freelancing
                    skills and strategies to acquire clients.
                  </h4>
                  <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-4 position-relative lh-24">
                    <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                    Benefit from our network with 3 recruiter agencies,
                    providing opportunities for both jobs and internships in the
                    tech industry.
                  </h4>
                </div>

                <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4">
                  <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 mb-3">
                    Description
                  </h2>
                  <p className="font-xssss fw-500 lh-28 text-grey-600 mb-0 pl-2">
                    After creating many full-stack websites for multiple clients
                    across the world, I have accumulated extensive experience in
                    delivering scalable and effective web development courses.
                    These experiences have given me a deep understanding of
                    various client requirements and challenges, enabling me to
                    create industry-level projects. <br />
                    <br />
                    With a portfolio spanning diverse industries and client
                    needs, I specialize in using HTML5, CSS3, Bootstrap, Ant
                    Design, JavaScript, ReactJS, Redux Toolkit, Python, and
                    Django. My approach emphasizes writing clean code, creating
                    responsive designs, and building user-friendly interfaces.{" "}
                    <br />
                    <br />
                    In addition to technical skills, I offer comprehensive
                    support including certificate programs, internship
                    placements, and job assistance. I also provide guidance on
                    freelancing strategies and acquiring clients. Furthermore, I
                    maintain connections with 3 recruiter agencies, offering
                    opportunities for career growth in the tech industry. <br />
                    <br />
                    Whether you're starting your journey or looking to enhance
                    your skills, my courses provide practical insights and
                    hands-on experience to excel in web development.
                  </p>
                </div>

                <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4 mb-5">
                  <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 mb-3">
                    Requirements
                  </h2>
                  <p className="font-xssss fw-500 lh-28 text-grey-600 mb-0 pl-2">
                    You need one basic laptop or PC, and you have to have
                    dedication and fire inside you. Trust me, I can guide you
                    step-by-step to become a professional web developer. No
                    prior experience required, just a passion for learning.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-xxl-3 col-lg-4">
                {/* <div className="card p-4 mb-4 bg-primary border-0 shadow-xss rounded-lg">
                  <div className="card-body">
                    <h2 className="text-white font-xsssss fw-700 text-uppercase ls-3 ">
                      Starter
                    </h2>
                    <h1 className="display2-size text-white fw-700">€ 49</h1>
                    <h4 className="text-white fw-500 mb-4 lh-24 font-xssss">
                      For anyone validating Framer as a professional prototyping
                      tool.
                    </h4>
                    <h4 className="text-white font-xssss mb-2">
                      <i className="ti-check mr-2 text-white"></i> Unlimited
                      views
                    </h4>
                    <h4 className="text-white font-xssss mb-2">
                      <i className="ti-check mr-2 text-white"></i> Everything in
                      Free
                    </h4>
                    <h4 className="text-white font-xssss mb-4">
                      <i className="ti-check mr-2 text-white"></i> Private share
                      links
                    </h4>
                    <a
                      href="/default-course-one"
                      className="btn btn-block border-0 w-100 bg-white p-3 text-primary fw-600 rounded-lg d-inline-block font-xssss btn-light"
                    >
                      Subscribe
                    </a>
                  </div>
                </div> */}
                <div className="card w-100 border-0 mt-0 mb-4 p-4 shadow-xss position-relative rounded-lg bg-white">
                  <div className="row">
                    <div className="col-5 pr-0">
                      <h2 className="display3-size lh-1 m-0 text-grey-900 fw-700">
                        4.2
                      </h2>
                    </div>
                    <div className="col-7 pl-0 text-right">
                      <div className="star d-block w-100 text-right">
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w10"
                        />
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w10"
                        />
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w10"
                        />
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w10"
                        />
                        <img
                          src="assets/images/star-disable.png"
                          alt="star"
                          className="w10"
                        />
                      </div>
                      <h4 className="font-xsssss text-grey-600 fw-600 mt-1">
                        Based on 433 rating
                      </h4>
                    </div>
                  </div>
                  <div className="bg-greylight theme-dark-bg rounded-sm p-2 mt-3 mb-4">
                    <div className="row mt-3">
                      <div className="col-3 pr-1 mt-0">
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w10 float-left"
                        />
                        <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                          5
                        </h4>
                      </div>
                      <div className="col-7 pl-0 pr-2">
                        <div
                          id="bar_1"
                          data-value="45"
                          className="bar-container"
                        >
                          <div
                            className="bar-percentage"
                            style={{ Width: `70%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-2 pl-0">
                        <h4 className="font-xssss fw-600 text-grey-800">70%</h4>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-3 pr-1 mt-0">
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w10 float-left"
                        />
                        <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                          4
                        </h4>
                      </div>
                      <div className="col-7 pl-0 pr-2">
                        <div
                          id="bar_2"
                          data-value="45"
                          className="bar-container"
                        >
                          <div
                            className="bar-percentage"
                            style={{ Width: `50%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-2 pl-0">
                        <h4 className="font-xssss fw-600 text-grey-800">50%</h4>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-3 pr-1 mt-0">
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w10 float-left"
                        />
                        <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                          3
                        </h4>
                      </div>
                      <div className="col-7 pl-0 pr-2">
                        <div
                          id="bar_3"
                          data-value="45"
                          className="bar-container"
                        >
                          <div
                            className="bar-percentage"
                            style={{ Width: `40%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-2 pl-0">
                        <h4 className="font-xssss fw-600 text-grey-800">40%</h4>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-3 pr-1 mt-0">
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w10 float-left"
                        />
                        <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                          2
                        </h4>
                      </div>
                      <div className="col-7 pl-0 pr-2">
                        <div
                          id="bar_4"
                          data-value="45"
                          className="bar-container"
                        >
                          <div
                            className="bar-percentage"
                            style={{ Width: `30%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-2 pl-0">
                        <h4 className="font-xssss fw-600 text-grey-800">30%</h4>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-3 pr-1 mt-0">
                        <img
                          src="assets/images/star.png"
                          alt="star"
                          className="w10 float-left"
                        />
                        <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                          1
                        </h4>
                      </div>
                      <div className="col-7 pl-0 pr-2">
                        <div
                          id="bar_5"
                          data-value="45"
                          className="bar-container"
                        >
                          <div
                            className="bar-percentage"
                            style={{ Width: `20%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-2 pl-0">
                        <h4 className="font-xssss fw-600 text-grey-800">20%</h4>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {/* Review 1 */}
                    <div className="col-2 text-left">
                      <figure className="avatar float-left mb-0">
                        <img
                          src="assets/images/user.png"
                          alt="avatar"
                          className="float-right shadow-none w40 mr-2"
                        />
                      </figure>
                    </div>
                    <div className="col-10 pl-4">
                      <div className="content">
                        <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                          Rahul Kumar
                        </h6>
                        <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                          June 5
                        </h6>
                        <div className="star d-block text-left">
                          {[...Array(5)].map((star, index) => (
                            <img
                              key={index}
                              src="assets/images/star.png"
                              alt="star"
                              className="w10"
                            />
                          ))}
                        </div>
                        <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                          The web development course gave a thorough overview of
                          modern tools and frameworks, simplifying complex
                          concepts. Excited to apply these skills in real
                          projects.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    {/* Review 2 */}
                    <div className="col-2 text-left">
                      <figure className="avatar float-left mb-0">
                        <img
                          src="assets/images/user.png"
                          alt="avatar"
                          className="float-right shadow-none w40 mr-2"
                        />
                      </figure>
                    </div>
                    <div className="col-10 pl-4">
                      <div className="content">
                        <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                          Neha Sharma
                        </h6>
                        <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                          June 25
                        </h6>
                        <div className="star d-block text-left">
                          {[...Array(5)].map((star, index) => (
                            <img
                              key={index}
                              src="assets/images/star.png"
                              alt="star"
                              className="w10"
                            />
                          ))}
                        </div>
                        <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                          This course completely changed my perspective on web
                          development. The instructor's teaching style made
                          complex topics seem easy. Highly recommend it!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    {/* Review 3 */}
                    <div className="col-2 text-left">
                      <figure className="avatar float-left mb-0">
                        <img
                          src="assets/images/user.png"
                          alt="avatar"
                          className="float-right shadow-none w40 mr-2"
                        />
                      </figure>
                    </div>
                    <div className="col-10 pl-4">
                      <div className="content">
                        <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                          Vikram Singh
                        </h6>
                        <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                          June 20
                        </h6>
                        <div className="star d-block text-left">
                          {[...Array(4)].map((star, index) => (
                            <img
                              key={index}
                              src="assets/images/star.png"
                              alt="star"
                              className="w10"
                            />
                          ))}
                        </div>
                        <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                          The course content was very practical. I learned how
                          to build websites from scratch using the latest
                          technologies. It's a great starting point for anyone
                          interested in web development.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    {/* Review 4 */}
                    <div className="col-2 text-left">
                      <figure className="avatar float-left mb-0">
                        <img
                          src="assets/images/user.png"
                          alt="avatar"
                          className="float-right shadow-none w40 mr-2"
                        />
                      </figure>
                    </div>
                    <div className="col-10 pl-4">
                      <div className="content">
                        <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                          Pooja Patel
                        </h6>
                        <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                          June 5
                        </h6>
                        <div className="star d-block text-left">
                          {[...Array(5)].map((star, index) => (
                            <img
                              key={index}
                              src="assets/images/star.png"
                              alt="star"
                              className="w10"
                            />
                          ))}
                        </div>
                        <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                          I'm amazed by how much I've learned in such a short
                          time. The course structure is excellent, and the
                          hands-on projects are very helpful. I feel confident
                          to start my own web development projects now.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    {/* Review 5 */}
                    <div className="col-2 text-left">
                      <figure className="avatar float-left mb-0">
                        <img
                          src="assets/images/user.png"
                          alt="avatar"
                          className="float-right shadow-none w40 mr-2"
                        />
                      </figure>
                    </div>
                    <div className="col-10 pl-4">
                      <div className="content">
                        <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                          Deepak Verma
                        </h6>
                        <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                          June 8
                        </h6>
                        <div className="star d-block text-left">
                          {[...Array(4)].map((star, index) => (
                            <img
                              key={index}
                              src="assets/images/star.png"
                              alt="star"
                              className="w10"
                            />
                          ))}
                        </div>
                        <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                          Learning web development through this course has been
                          a game-changer for me. The explanations are clear, and
                          the projects are practical. I can't wait to implement
                          these skills in real-world scenarios.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="card shadow-xss rounded-lg border-0 p-4 mb-4">
                  <h4 className="font-xs fw-700 text-grey-900 d-block mb-3">
                    Modul
                    <a href="/default-course-one" className="float-right">
                      <i className="ti-arrow-circle-right text-grey-500 font-xss"></i>
                    </a>
                  </h4>
                  <div className="card-body d-flex p-0">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      1
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Introduction
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      12:34
                    </span>
                  </div>
                  <div className="card-body d-flex p-0 mt-3">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      2
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Watch the videos
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      22:34
                    </span>
                  </div>

                  <div className="card-body d-flex p-0 mt-3">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      3
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Creating a sliding
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      34:34
                    </span>
                  </div>

                  <div className="card-body d-flex p-0 mt-3">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      4
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Make a Dropdown
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      40:34
                    </span>
                  </div>

                  <div className="card-body d-flex p-0 mt-3">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      5
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Conclusion
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      2:34
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </Fragment>
    );
  }
}

export default Coursedetails;
