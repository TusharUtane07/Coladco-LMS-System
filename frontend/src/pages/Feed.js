import React, { Fragment, useEffect, useState } from "react";
import FeedComponent from "../components/FeedComponent";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import Appheader from "../components/Appheader";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { GoComment } from "react-icons/go";
import { feedPostApi, LikePostApi, NewCommentPost, NewFeedPost } from "../urls/urls";
import useAxios from "../network/useAxios";
import { ToastContainer, toast } from 'react-toastify';

const Feed = () => {
  const [feedPostResponse, feedPostError, feedPostLoading, feedPostFetch] = useAxios();
  const [newFReedResponse, newFReedError, newFReedLoading, newFReedFetch] = useAxios();
  const [newCommentResponse, newCommentError, newCommentLoading, newCommentFetch] = useAxios();
  const [likeResponse, likeError, likeLoading, likeFetch] = useAxios();

  const [feedPost, setFeedPost] = useState([]);
  const [formValues, setFormValues] = useState({ message: "" });
  const [commentValues, setCommentValues]  = useState({comment: ""});
  const [commentsModal, setCommentsModal] = useState(null);

  useEffect(()=> {
    feedPostFetch(feedPostApi())
  }, []);

  const addNewPost = () => {
    newFReedFetch(NewFeedPost(formValues))
  }

  const addNewComment = (postId) => {
    newCommentFetch(NewCommentPost({ ...commentValues, postId }))
  }
  

  useEffect(() => {
    if (newFReedResponse?.result === "success") {
      feedPostFetch(feedPostApi());
    }
    if (newFReedError) {
      toast.error(newFReedError?.response?.data);
    }
    if (newCommentResponse?.result === "success") {
      feedPostFetch(feedPostApi());
      setCommentsModal(null);
    }
    if (newCommentError) {
      toast.error(newCommentError?.response?.data);
    }
    if (likeResponse?.result === "success") {
      feedPostFetch(feedPostApi());
    }
    if (likeError) {
      toast.error(likeError?.response?.data);
    }
  }, [newFReedResponse, newFReedError, newCommentError, newCommentResponse, likeResponse, likeError]);

  useEffect(() => {
    if(feedPostResponse?.data){
      setFeedPost(feedPostResponse?.data)
      console.log(feedPostResponse)
    }
  }, [feedPostResponse]);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!formValues.message.trim()) {
      toast.error("Empty message cannot be shared");
      return;
    }
    addNewPost();
    setFormValues({...formValues, message: ""});
  }

  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    if (!commentValues.comment.trim()) {
      toast.error("Empty comment cannot be shared");
      return;
    }
    addNewComment(postId);
    setCommentValues({ comment: "" });
  }
  
  const handleLike = (postId) => {
    likeFetch(LikePostApi({ postId }));
  };

  return (
    <Fragment>
      <style>
        {`
          body {
            background: #ebeef0;
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
            float: left;
          }

          .media-block .media-right {
            float: right;
          }

          .media-block .media-body {
            display: block;
            overflow: hidden;
            width: auto;
          }

          .middle .media-left,
          .middle .media-right,
          .middle .media-body {
            vertical-align: middle;
          }

          .thumbnail {
            border-radius: 0;
            border-color: #e9e9e9;
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
            transition: all .15s;
          }

          .text-muted, a.text-muted:hover, a.text-muted:focus {
            color: #acacac;
          }

          .text-sm {
            font-size: 0.9em;
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

        `}
      </style>
      <div className="main-wrapper">
        <Navheader />
        <div className="main-content">
          <Appheader />
          <div className="panel">
            <div className="panel-body">
              <textarea className="form-control" rows={2} placeholder="What are you thinking?" onChange={(e) => setFormValues({ ...formValues, message: e.target.value })} value={formValues.message} />
              <div className="mar-top clearfix">
                <button className="btn btn-sm btn-primary pull-right" onClick={handlePostSubmit} type="submit"><i className="fa fa-pencil fa-fw" /> Share</button>
                <a className="btn btn-trans btn-icon fa fa-camera add-tooltip" href="#" />
                <a className="btn btn-trans btn-icon fa fa-file add-tooltip" href="#" />
              </div>
            </div>
          </div>
          { feedPostResponse?.data?.map((item, index) => (
            <div key={index}>
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
                          </div>
                          <p className="ml-2">{item?.message}</p>
                          <div className="pad-ver">
                            <div className="btn-group">
                              <button className="btn btn-sm btn-default btn-hover-success" onClick={() => handleLike(item?.id)} ><i className="fa fa-thumbs-up" /></button>
                              <span className="text-sm">{item?.like_count}</span>
                            </div>

                            {/* user_liked */}

                            
                            <button className="btn btn-sm btn-default btn-hover-primary" onClick={() => setCommentsModal(commentsModal === item?.id ? null : item?.id)}>Comment</button>
                          </div>
                          {commentsModal === item?.id  ? (
                            <> <textarea className="form-control" rows={2} placeholder="Write a comment..." onChange={(e) => setCommentValues({ ...commentValues, comment: e.target.value })} value={commentValues.comment} />
                          <button className="btn btn-sm btn-primary pull-right" onClick={(e) => handleCommentSubmit(e, item?.id)} type="submit"><i className="fa fa-pencil fa-fw" /> Comment</button></>
                            
                          ) : <div>
                          <div className="media-block">
                            {item?.post_comments.length >= 1 && item?.post_comments?.map((comment, i) => (
                              <div key={i}>
                                <hr />
                                <a className="media-left" href="#"><img className="img-circle img-sm rounded-circle" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar2.png" /></a>
                                <div className="media-body">
                                  <div className="mar-btm ml-3">
                                    <a href="#" className="btn-link text-semibold media-heading box-inline">{comment?.profile?.full_name}</a>
                                  </div>
                                  <p className="ml-2">{comment?.comment}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                         
                        </div>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Appfooter />
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default Feed;
