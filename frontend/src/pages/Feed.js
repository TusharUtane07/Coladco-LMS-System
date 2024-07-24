import React, { Fragment, useEffect, useState } from "react";
import FeedComponent from "../components/FeedComponent";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import Appheader from "../components/Appheader";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { GoComment } from "react-icons/go";
import { feedPostApi, NewCommentPost, NewFeedPost } from "../urls/urls";
import useAxios from "../network/useAxios";
import { ToastContainer, toast } from 'react-toastify';


const Feed = () => {

  const [feedPostResponse, feedPostError, feedPostLoading, feedPostFetch] = useAxios();
  const [newFReedResponse, newFReedError, newFReedLoading, newFReedFetch] = useAxios();
  const [newCommentResponse, newCommentError, newCommentLoading, newCommentFetch] = useAxios();

  const [feedPost, setFeedPost] = useState([]);
  const [formValues, setFormValues] = useState({ message: "" });

  
  useEffect(()=> {
    feedPostFetch(feedPostApi())
  }, [])
  
  const addNewPost = () => {
    newFReedFetch(NewFeedPost(formValues))
  }

  // const addNewComment = () => {
  //   newCommentFetch(NewCommentPost())
  // }

  useEffect(()=>{
    if(newFReedResponse?.result == "success"){
      feedPostFetch(feedPostApi())
    }
    if(newFReedError){
      toast.error(newFReedError?.response?.data)
    }
    if(newCommentResponse?.result == "success"){
      feedPostFetch(feedPostApi())
    }
    if(newCommentError){
      toast.error(newCommentError?.response?.data)
    }
  },[newFReedResponse,newFReedError, newCommentError, newCommentResponse  ])

  useEffect(() => {
    if(feedPostFetch?.data){
      setFeedPost(feedPostResponse?.data)
      console.log(feedPostResponse)
    }
  }, [feedPostResponse])

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!formValues.message.trim()) {
      toast.error("Empty message cannot be shared");
      return;
    }
    addNewPost()
    setFormValues({...formValues, message: ""})
  }

  return (
    <Fragment>
       <style>
        {`
          
            body{
    // margin-top:20px;
    background:#ebeef0;
}

.img-sm {
    width: 46px;
    height: 46px;
}

.panel {
    box-shadow: 0 2px 0 rgba(0,0,0,0.075);
    border-radius: 0;
    border: 0;
    margin-bottom: 15px;
}

.panel .panel-footer, .panel>:last-child {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.panel .panel-heading, .panel>:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.panel-body {
    padding: 25px 20px;
}


.media-block .media-left {
    display: block;
    float: left
}

.media-block .media-right {
    float: right
}

.media-block .media-body {
    display: block;
    overflow: hidden;
    width: auto
}

.middle .media-left,
.middle .media-right,
.middle .media-body {
    vertical-align: middle
}

.thumbnail {
    border-radius: 0;
    border-color: #e9e9e9
}

.tag.tag-sm, .btn-group-sm>.tag {
    padding: 5px 10px;
}

.tag:not(.label) {
    background-color: #fff;
    padding: 6px 12px;
    border-radius: 2px;
    border: 1px solid #cdd6e1;
    font-size: 12px;
    line-height: 1.42857;
    vertical-align: middle;
    -webkit-transition: all .15s;
    transition: all .15s;
}
.text-muted, a.text-muted:hover, a.text-muted:focus {
    color: #acacac;
}
.text-sm {
    font-size: 0.9em;
}
.text-5x, .text-4x, .text-5x, .text-2x, .text-lg, .text-sm, .text-xs {
    line-height: 1.25;
}

.btn-trans {
    background-color: transparent;
    border-color: transparent;
    color: #929292;
}

.btn-icon {
    padding-left: 9px;
    padding-right: 9px;
}

.btn-sm, .btn-group-sm>.btn, .btn-icon.btn-sm {
    padding: 5px 10px !important;
}

// .mar-top {
//     margin-top: 15px;
// }
        `}
      </style>
      <div className="main-wrapper">
        <Navheader />
        <div className="main-content">
          <Appheader />
          {/* <div className="m-2 text-center mt-sm-2">
            <div className="m-2">
              <textarea
                style={{ width: "98%", border: "none" }}
                className="p-3 h100 bg-greylight lh-16 mt-3"
                rows="5"
                placeholder="Write your question..."
                onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                value={formValues.message}
              ></textarea>
              <div className="mx-3" style={{ width: `98%` }}>
                <form className="chat-form d-block clearfix">
                  <button className="bg-dark border-0 btn-round-md float-left">
                    <i className="ti-microphone text-white lh-4 font-md"></i>
                  </button>
                  <button className="bg-dark border-0 btn-round-md ml-2 float-left">
                    <i className="ti-clip text-white lh-4 font-md"></i>
                  </button>
                  <button className="bg-dark border-0 btn-round-md ml-2 float-left">
                    <i className="ti-image text-white lh-4 font-md"></i>
                  </button>
                  <button onClick={handlePostSubmit} className="bg-current p-0 float-right w200 text-white fw-600 font-xsss text-uppercase">
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div> */}
          {/* <hr />
          { feedPostResponse?.data?.map((item, index) => {

            return(
              <div 
              className="feed-container" 
              style={{
                width: "97%",
                padding: "1rem", 
                border: "1px solid #ddd", 
                borderRadius: "8px", 
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                margin: "0.5rem"
              }}
            >
              <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
                <div>
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Profile Image"
                    style={{ width: "4rem", borderRadius: "50%" }}
                  />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{textTransform: "capitalize"}}>
                    {item?.profile?.full_name}<span> - Jul 2</span>
                  </h4>
                  <div>
                    <p>
                      {item?.message}
                    </p>
                  </div>
                </div>
              </div>
                <div
                  style={{
                    width: "100%", 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "0.5rem",
                  }}
                >
                  <div>
                    <IoIosHeartEmpty size={20} />
                  </div>
                  <div>
                    <GoComment size={20} />
                  </div>
                  <div>
                    <IoShareOutline size={20} />
                  </div>
                </div>
            </div>
          )
          })
          } */}

            <div className="panel">
              <div className="panel-body">
                <textarea className="form-control" rows={2} placeholder="What are you thinking?"onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                value={formValues.message} />
                <div className="mar-top clearfix">
                  <button className="btn btn-sm btn-primary pull-right" onClick={handlePostSubmit} type="submit"><i className="fa fa-pencil fa-fw" /> Share</button>
                  {/* <a className="btn btn-trans btn-icon fa fa-video-camera add-tooltip" href="#" /> */}
                  <a className="btn btn-trans btn-icon fa fa-camera add-tooltip" href="#" />
                  <a className="btn btn-trans btn-icon fa fa-file add-tooltip" href="#" />
                </div>
              </div>
            </div>
{ feedPostResponse?.data?.map((item, index) => {

return(
<div>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className="">
          <div className="col-md-12 bootstrap snippets">
            <div className="panel">
              <div className="panel-body">
                <div className="media-block">
                  <a className="media-left" href="#"><img className="img-circle img-sm rounded-circle" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar1.png" /></a>
                  <div className="media-body">
                    <div className="mar-btm ml-3">
                      <a href="#" className="btn-link text-semibold media-heading box-inline">{item?.profile?.full_name}</a>
                      {/* <p className="text-muted text-sm"><i className="fa fa-mobile fa-lg" /> - From Mobile - 11 min ago</p> */}
                    </div>
                    <p className="ml-2">{item?.message}</p>
                    <div className="pad-ver">
                      <div className="btn-group">
                        <a className="btn btn-sm btn-default btn-hover-success" href="#"><i className="fa fa-thumbs-up" /></a>
                        {/* <a className="btn btn-sm btn-default btn-hover-danger" href="#"><i className="fa fa-thumbs-down" /></a> */}
                      </div>
                      <a className="btn btn-sm btn-default btn-hover-primary" href="#">Comment</a>
                    </div>
                    {/* Comments */}
                    <div>
                      <div className="media-block">
                        {item?.post_comments.length >= 1 && item?.post_comments?.map((item) => {
                          
                          return(
                            <>
                            <hr />
                          <a className="media-left" href="#"><img className="img-circle img-sm rounded-circle" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar2.png" /></a>
                        <div className="media-body">
                          <div className="mar-btm ml-3">
                            <a href="#" className="btn-link text-semibold media-heading box-inline">{item?.profile?.full_name}</a>
                            {/* <p className="text-muted text-sm"><i className="fa fa-mobile fa-lg" /> - From Mobile - 7 min ago</p> */}
                          </div>
                          <p className="ml-2">{item?.comment}</p>
                          <div className="pad-ver">
                            <div className="btn-group">
                              {/* <a className="btn btn-sm btn-default btn-hover-success active" href="#"><i className="fa fa-thumbs-up" /></a> */}
                              {/* <a className="btn btn-sm btn-default btn-hover-danger" href="#"><i className="fa fa-thumbs-down" /></a> */}
                            </div>
                            {/* <a className="btn btn-sm btn-default btn-hover-primary" href="#">Comment</a> */}
                          </div>
                          {/* <hr /> */}
                        </div>
                            </>
                        )
                        })
}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
)
      })
      }
        </div>
        <Appfooter />
      </div>
      <ToastContainer/>
    </Fragment>
  );
};

export default Feed;
