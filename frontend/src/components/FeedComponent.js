import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { GoComment } from "react-icons/go";

const FeedComponent = () => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 1200px) {
          .main-content {
            width: 60rem !important;
            margin-left: -10rem !important; /* Adjust margin-left for smaller screens */
          }
        }

        @media (max-width: 768px) {
          .main-content {
            width: 40rem !important;
            margin-left: -5rem !important; /* Adjust margin-left for even smaller screens */
          }
        }

        @media (max-width: 480px) {
          .main-content {
            width: 20rem !important;
            margin-left:0.6rem !important; /* Adjust margin-left for very small screens */
          }
        }
      `}</style>
      <div className="main-content" style={{ marginLeft: "-17rem", marginRight: "1rem", width: "78rem" }}>
        <div 
          className="feed-container" 
          style={{
            width: "100%",
            padding: "1rem", 
            border: "1px solid #ddd", 
            borderRadius: "8px", 
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
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
                  Can someone explain how Flexbox works in CSS? I am trying to create a layout where items are centered both horizontally and vertically.
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
          <hr style={{ margin: "1rem 0" }} />
        </div>
      </div>
    </>
  );
};

export default FeedComponent;
