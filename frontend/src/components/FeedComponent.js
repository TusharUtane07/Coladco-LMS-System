import React, { Component, Fragment } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { GoComment } from "react-icons/go";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import Appheader from "../components/Appheader";

const FeedComponent = () => {
  return (
    <Fragment>
      <div className="main-wrapper">
        <Navheader />
        <div className="main-content">
          <Appheader />
          <div className="search-bar mb-3">
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
          <div className="m-3" style={{ display: "flex", gap: "1rem" }}>
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Dummy Image"
                style={{ width: "4rem", borderRadius: "50%" }}
              />
            </div>
            <div>
              <h4>
                Suraj Dahiya<span> - Jul 2</span>
              </h4>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  dolorem consequuntur facere dolore deserunt nostrum. Atque
                  impedit velit sint nostrum aspernatur animi, molestiae temporibus
                  iure.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                className="mr-3"
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
          <hr />
        </div>
        <Appfooter />
      </div>
    </Fragment>
  );
};

export default FeedComponent;
