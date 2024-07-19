import React, { Fragment, useEffect, useState } from "react";
import FeedComponent from "../components/FeedComponent";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import Appheader from "../components/Appheader";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { GoComment } from "react-icons/go";
import { feedPostApi } from "../urls/urls";
import useAxios from "../network/useAxios";



const Feed = () => {

  const [feedPostResponse, feedPostError, feedPostLoading, feedPostFetch] = useAxios();

  const [feedPost, setFeedPost] = useState([]);
  
  useEffect(()=> {
    feedPostFetch(feedPostApi())
  }, [])
  
  useEffect(() => {
    if(feedPostFetch?.data){
      setFeedPost(feedPostResponse?.data)
      console.log(feedPostResponse)
    }
  }, [])

  return (
    <Fragment>
       <style>
        {`
          @media (max-width: 768px) {
            .mt-sm-2 {
              margin-top:4rem !important;
            }
          }
        `}
      </style>
      <div className="main-wrapper">
        <Navheader />
        <div className="main-content">
          <Appheader />
          <div className="m-2 text-center mt-sm-2">
            <div className="m-2">
              <textarea
                style={{ width: "98%", border: "none" }}
                className="p-3 h100 bg-greylight lh-16 mt-3"
                rows="5"
                placeholder="Write your question..."
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
                  <button className="bg-current p-0 float-right w200 text-white fw-600 font-xsss text-uppercase">
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>
          <hr />
		  <div 
          className="feed-container" 
          style={{
            width: "97%",
            padding: "1rem", 
            border: "1px solid #ddd", 
            borderRadius: "8px", 
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
			marginLeft:"0.5rem",
			marginRight:"0.5rem"
          }}
        >
          <div style={{ display: "flex", gap: "1rem" }}>
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Profile Image"
                style={{ width: "4rem", borderRadius: "50%" }}
              />
            </div>
            <div>
              <h4>
                Suraj Turkar<span> - Jul 2</span>
              </h4>
              <div>
                <p>
                  Can someone explain how Flexboxt works in CSS? I am trying to create a layout where items are centered both horizontally and vertically.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "0.5rem"
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
          </div>
        
        </div>
        </div>
        <Appfooter />
      </div>
    </Fragment>
  );
};

export default Feed;
