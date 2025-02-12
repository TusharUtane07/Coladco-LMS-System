import React, { Fragment, useEffect, useState, version } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';
import { Accordion } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { Modal, Input, Rate, Form, Button } from 'antd';
import { courseApi, gettingReviewsDataApi, gettingReviewSummary, moduleApi, NewCourseReview, videosApi } from '../urls/urls';
import useAxios from '../network/useAxios';
import { toast, ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import moment from 'moment'

const Defaultcourseone = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [formValues, setFormValues] = useState({
    rating: 0,
    review: '',
  });

  const [courseResponse, courseError, courseLoading, courseFetch] = useAxios();
  const [moduleResponse, moduleError, moduleLoading, moduleFetch] = useAxios();
  const [videosResponse, videosError, videosLoading, videosFetch] = useAxios();
  const [gettingReviewResponse, gettingReviewError, gettingReviewLoading, gettingReviewFetch] = useAxios();
  const [addingReviewResponse, addingReviewError, addingReviewLoading, addingReviewFetch] = useAxios();
  const [reviewSummaryResponse, reviewSummaryError, reviewSummaryLoading, reviewSummaryFetch] = useAxios();

  const [course, setCourse] = useState([]);
  const [module, setModule] = useState([]);
  const [videos, setVideos] = useState([]);
  const [reviewToDisplay, setReviewsToDisply] = useState(null);
  const [activeVideoUrl, setVideoUrl] = useState(false)
  const [reviewSummary, setReviewSummary] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await courseFetch(courseApi());
      await moduleFetch(moduleApi());
      await videosFetch(videosApi());
      await gettingReviewFetch(gettingReviewsDataApi())
      await reviewSummaryFetch(gettingReviewSummary())
    };

    fetchData();
  }, []);
  
  useEffect(() => {
    window.scrollTo(0,0)
    if (courseResponse?.data) {
      setCourse(courseResponse.data);
      console.log(courseResponse.data);
    }
    if (addingReviewError) {
      toast.error(addingReviewError?.response?.data);
    }
    if (addingReviewResponse.result === "success") {
      toast.success("Added review successfully");
    }
    if (moduleResponse?.data) {
      setModule(moduleResponse.data);
      console.log(moduleResponse.data);
    }
    if (videosResponse?.data) {
      setVideos(videosResponse.data);
      console.log(videosResponse.data);
    }
    if (gettingReviewResponse?.data) {
      setReviewsToDisply(gettingReviewResponse.data);
      console.log(gettingReviewResponse.data);
    }
    
  }, [courseResponse, moduleResponse,addingReviewResponse, addingReviewError, videosResponse, gettingReviewResponse, reviewSummaryResponse]);


  useEffect(() => {
    if (reviewSummaryResponse?.data) {
      setReviewSummary(reviewSummaryResponse?.data);
      console.log(reviewSummaryResponse.data);
    }
  }, [reviewSummaryResponse])

  function formatDateToMonthDay(timestamp) {
    return moment(timestamp).format('MMMM D');
}

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleChange = (changedFields) => {
    setFormValues(prevValues => ({
      ...prevValues,
      ...changedFields
    }));
  };

  const addNewReview = async () => {
    try {
      await addingReviewFetch(NewCourseReview(formValues));
      form.resetFields();

    } catch (error) {
      toast.error('Error adding review');
    }
  }

  const handleOk = () => {
    if (formValues.rating < 1) {
      toast.error("Please select a rating");
      return;
    }
    if (!formValues?.review?.trim()) {
      toast.error("Please add a review message");
      return;
    }
    
    
    addNewReview();
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if(reviewSummaryLoading){
    return <div>loadingg.....</div>
  }

  return (
    <Fragment>
      <div className="main-wrapper">
        <Navheader />
        <div className="main-content">
          <Appheader />

          <div className="middle-sidebar-bottom theme-dark-bg">
            <div className="middle-sidebar-left">
              <div className="row">
                <div className="col-xl-8 col-xxl-9">
                  <div className="card border-0 mb-0 rounded-lg overflow-hidden">
                    <ReactPlayer
                      controls="true"
                      width="100%"
                      height="auto"
                      className="react-player"
                      playing
                      // light={`assets/images/${value.videoimage}`}
                      url={activeVideoUrl?activeVideoUrl:`assets/images/video4.mp4`}
                    />
                  </div>
                  <div className="card d-block border-0 rounded-lg overflow-hidden dark-bg-transparent bg-transparent mt-4 pb-3">
                    <div className="row">
                      <div className="col-10">
                        <h2 className="fw-700 font-md d-block lh-4 mb-2">
                        {course ? <p>{course[0]?.name}</p> : <p>Loading course...</p>}
                        </h2>
                      </div>
                      <div className="col-2">
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
                      </div>
                    </div>

                    <span className="font-xssss fw-700 text-grey-900 d-inline-block ml-0 text-dark">
                      Instructor: Yatin Vohra
                    </span>
                    <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
                    {/* <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                      Developer
                    </span>
                    <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                      Design
                    </span>
                    <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                      Developer
                    </span>
                    <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                      HTML5
                    </span>
                    <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
                      Jquery
                    </span>
                    <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
                    <span className="font-xssss fw-700 text-primary d-inline-block ml-0 ">
                      Follow Author
                    </span> */}
                  </div>
                  {module?.map((item) => {
  const filteredVideos = videos?.filter(video => video?.module.id === item?.id);

  return (
    <div key={item.id} className="card d-block border-0 rounded-lg overflow-hidden mt-3"

    >
      <Accordion
        defaultActiveKey="0"
        className="accordian mb-0 accordian-course"
      >
        <Accordion.Item
          eventKey="0"
          className="accordion-item border-0 mb-0 shadow-xss rounded-sm bg-white"
        >
          <Accordion.Header>
            {item.name}
          </Accordion.Header>
          <Accordion.Body>
            {filteredVideos.length > 0 ? (
              filteredVideos.map(video => (
                <div key={video.id} className="card-body cursor-pointer d-flex p-2" 
                onClick={()=>{
                  console.log(video)
                  setVideoUrl(video.url)
                }}
                >
                  <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                    {video.id}
                  </span>
                  <span className="font-xssss fw-500 text-grey-500 ml-2">
                    {video.title}
                  </span>
                  <span className="ml-auto font-xssss fw-500 text-grey-500">
                    12:34
                  </span>
                </div>
              ))
            ) : (
              <p className='font-xssss fw-500 text-grey-500 ml-2'>No videos available for this module.</p>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
})}

                  <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4 alert-success">
                    <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 text-success mb-4">
                      What you'll learn from this lesson
                    </h2>
                    <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                      <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                      Create awesome animated splash screens for any Excel
                      project such as animation with password access to a work
                      book, loading animation.
                    </h4>
                    <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                      <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                      After completing this course you'll be confident to create
                      any subtle to complex animation that will turn any project
                      a professional work and surely you'll become an awesome
                      developer and designer
                    </h4>
                    <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                      <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                      Create awesome animated splash screens for any Excel
                      project such as animation with password access to a work
                      book, loading animation.
                    </h4>
                    <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                      <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                      After completing this course you'll be confident to create
                      any subtle to complex animation that will turn any project
                      a professional work and surely you'll become an awesome
                      developer and designer
                    </h4>
                    <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                      <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                      Create awesome animated splash screens for any Excel
                      project such as animation with password access to a work
                      book, loading animation.
                    </h4>
                    <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                      <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                      After completing this course you'll be confident to create
                      any subtle to complex animation that will turn any project
                      a professional work and surely you'll become an awesome
                      developer and designer
                    </h4>
                  </div>

                  <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4">
                    <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 mb-3">
                      Description
                    </h2>
                    <p className="font-xssss fw-500 lh-28 text-grey-600 mb-0 pl-2">
                    {course ? <p>{course[0]?.description}</p> : <p>Loading course...</p>}
                    </p>
                  </div>

                  {/* <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4 mb-5">
                    <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 mb-3">
                      Requirements
                    </h2>
                    <p className="font-xssss fw-500 lh-28 text-grey-600 mb-0 pl-2">
                      After creating more than a dozen courses on Microsoft
                      Access databases and programming in VBA, many students
                      have contacted me with discussions on specific problems
                      and scenarios. From these discussions.
                    </p>
                  </div> */}
                </div>
                <div className="col-xl-4 col-xxl-3">
                  {/* <div className="card p-4 mb-4 bg-primary border-0 shadow-xss rounded-lg"> */}
                  {/* <div className="card-body">
                        <h2 className="text-white font-xsssss fw-700 text-uppercase ls-3 ">
                          Starter
                        </h2>
                        <h1 className="display2-size text-white fw-700">
                          € 49
                        </h1>
                        <h4 className="text-white fw-500 mb-4 lh-24 font-xssss">
                          For anyone validating Framer as a professional
                          prototyping tool.
                        </h4>
                        <h4 className="text-white font-xssss mb-2">
                          <i className="ti-check mr-2 text-white"></i> Unlimited
                          views
                        </h4>
                        <h4 className="text-white font-xssss mb-2">
                          <i className="ti-check mr-2 text-white"></i>{' '}
                          Everything in Free
                        </h4>
                        <h4 className="text-white font-xssss mb-4">
                          <i className="ti-check mr-2 text-white"></i> Private
                          share links
                        </h4>
                        <a
                          href="/default-course-one"
                          className="btn btn-block border-0 w-100 bg-white p-3 text-primary fw-600 rounded-lg d-inline-block font-xssss btn-light"
                        >
                          Subscribe
                        </a>
                      </div> */}
                  {/* </div> */}
                  <div className="card shadow-xss rounded-lg border-0 p-4 mb-4">
                      <h4 className="font-xs fw-700 text-grey-900 d-block mb-3">
                      Module
                      <a href="/default-course-one" className="float-right">
                        <i className="ti-arrow-circle-right text-grey-500 font-xss"></i>
                      </a>
                    </h4>
                    { module?.map((item) => {
                      return(

  <>
                    <div className="card-body d-flex p-0">
                      <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                        {item?.id}
                      </span>
                      <span className="font-xssss fw-500 text-grey-500 ml-2">
                       {item.name}
                      </span>
                      <span className="ml-auto font-xssss fw-500 text-grey-500">
                       10:34
                      </span>
                    </div>
</>
)
                    })
                    }
                  </div>
                  <div className="card w-100 border-0 mt-0 mb-4 p-4 shadow-xss position-relative rounded-lg bg-white">
                  
<>
                    <div className="row">
                      <div className="col-5 pr-0">
                        <h2 className="display3-size lh-1 m-0 text-grey-900 fw-700">
                        {reviewSummaryResponse?.data?.average_rating && reviewSummaryResponse.data.average_rating.toFixed(1) }
                        </h2>
                      </div>
                      <div className="col-7 pl-0 text-right">
                        <div className="star d-block w-100 text-right">
                        {reviewSummaryResponse?.data?.average_rating && [...Array( Math.round(reviewSummaryResponse.data.average_rating) )]?.map((star, index) => (
                            <img
                              key={index}
                              src="assets/images/star.png"
                              alt="star"
                              className="w10"
                            />
                          ))}
                        </div>
                        <h4 className="font-xsssss text-grey-600 fw-600 mt-1">
                          Based on {reviewSummaryResponse?.data?.total_reviews && reviewSummaryResponse.data.total_reviews }{" "}rating
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
                          <h4 className="font-xssss fw-600 text-grey-800">
                          {reviewSummaryResponse?.data?.five_star_percentage && Math.round(reviewSummaryResponse.data.five_star_percentage) }%{" "}
                          </h4>
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
                          <h4 className="font-xssss fw-600 text-grey-800">
                          {reviewSummaryResponse?.data?.four_star_percentage && Math.round(reviewSummaryResponse.data.four_star_percentage) }%{" "}

                          </h4>
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
                          <h4 className="font-xssss fw-600 text-grey-800">
                          {reviewSummaryResponse?.data?.three_star_percentage && Math.round(reviewSummaryResponse.data.three_star_percentage) }%{" "}

                          </h4>
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
                          <h4 className="font-xssss fw-600 text-grey-800">
                          {reviewSummaryResponse?.data?.two_star_percentage && Math.round(reviewSummaryResponse.data.two_star_percentage) }%{" "}
                          </h4>
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
                          <h4 className="font-xssss fw-600 text-grey-800">
                          {reviewSummaryResponse?.data?.one_star_percentage && Math.round(reviewSummaryResponse.data.one_star_percentage) }%{" "}
                          </h4>
                        </div>
                      </div>
                    </div>
</>
                   
                    {/* new review added */}
                    <div className="row">
                    {reviewToDisplay?.slice(0, 3)?.map((item, index) => {
                      return(                  
                    <div className="col-10 pl-4">
                      <div className="content">
                        <h6 style={{textTransform: "capitalize"}} className="author-name font-xssss  fw-600 mb-0 text-grey-800">
                          {item?.profile?.full_name}
                        </h6>
                        <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                          {formatDateToMonthDay(item?.created_at)}
                        </h6>
                        <div className="star d-block text-left">
                          {[...Array(item?.rating)].map((star, index) => (
                            <img
                              key={index}
                              src="assets/images/star.png"
                              alt="star"
                              className="w10"
                            />
                          ))}
                        </div>
                        <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                         {item?.review_text}
                        </p>
                      </div>
                    </div>
                    )
                  }) }
                  </div>
                  <NavLink to={"/all-reviews"} className='text-grey-500'>Show all...</NavLink>

                  <div className="row mt-4">
                    {/* Review 2 */}
                    {/* {/* <div className="col-2 text-left">
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
                     */}
                  

                    </div>
                    {/*new review end */}
                    <Button type="primary" onClick={showModal} >
                      Add review
                    </Button>
                    <Modal 
                      title="Please add your review 😊"
                      visible={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <Form
                       form={form}
                      onValuesChange={(_, allValues) => handleChange(allValues)}
                      onFinish={handleOk}
>
  <Form.Item label="Rating" name="rating">
    <Rate onChange={value => handleChange({ rating: value })}/>
  </Form.Item>
  <Form.Item label="Review" name="review">
  <Input.TextArea onChange={e => handleChange({ review: e.target.value })} />
  </Form.Item>
</Form>

                    </Modal>
                  </div>
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
      <ToastContainer />

    </Fragment>
  );
};

export default Defaultcourseone;
