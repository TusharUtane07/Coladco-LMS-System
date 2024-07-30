import React, { Fragment, useEffect, useState } from "react";
import Appheader from "../components/Appheader";
import Navheader from "../components/Navheader";
import { useParams } from "react-router-dom";
import { assignemnetsDetails, jobListingDetails } from "../urls/urls";
import useAxios from "../network/useAxios";
import { Link } from "react-router-dom";
import { test_url_images } from "../config/environment";

const AssignmentDetails = () => {
  const [
    assignmentsListingResponse,
    assignmentsListingError,
    assignmentsListingLoading,
    assignmentsListingFetch,
  ] = useAxios();
  const [assignmentsListing, setAssignmentsListing] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    assignmentsListingFetch(
    assignemnetsDetails({
        assignmentsId: id,
      })
    );
  }, []);

  useEffect(() => {
    if (assignmentsListingResponse?.data) {
      setAssignmentsListing(assignmentsListingResponse.data);
    }
  }, [assignmentsListingResponse]);

  console.log(assignmentsListingResponse?.data);
  console.log(assignmentsListingResponse?.data?.[0]?.title);

  return (
    <Fragment>
      <style>
        {`
.apply-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #28a745; /* Green color */
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.apply-btn:hover {
  background-color: #218838; 
  transform: translateY(-2px); 
  color:white;
}

@media  (min-width: 315px) and (max-width: 800px) {
 .jobInfo{
 margin-top:30px;
 }
}
`}
      </style>
      <div className="main-wrapper">
        <Navheader />
        <div className="main-content">
          <Appheader />
          <div className="post-title page-nav pt-lg--7 pt-lg--7 pt-5 pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h6 className="jobInfo text-uppercase fw-600 ls-3 text-success font-xsss">
                    Assignments Info
                  </h6>
                  <h2 className="mt-3 mb-2 lh-2 display2-size display2-md-size mont-font text-grey-900 fw-700">
                    {assignmentsListingResponse?.data?.[0]?.title}
                  </h2>
                  {/* <h6 className="font-xssss text-grey-500 fw-600 ml-3 mt-3 d-inline-block">
                    <i className="ti-time mr-2"></i>
                    {assignmentsListingResponse?.data?.} year
                    experience
                  </h6> */}
                  {/* <h6 className="font-xssss text-grey-500 fw-600 ml-3 mt-3 d-inline-block">
                    <i className="ti-user mr-1"></i>{" "}
                    {assignmentsListingResponse?.data?.job_profile}
                  </h6> */}
                  {/* <h6 className="font-xssss text-grey-500 fw-600 ml-3 mt-3 d-inline-block">
                    <i className="ti-comments mr-2"></i> 14 Comments
                  </h6> */}
                </div>
              </div>
            </div>
          </div>

          <div className="post-image">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <img
                    src={test_url_images + assignmentsListingResponse?.data?.[0]?.thumbnail}
                    alt="img-fluid rounded-lg"
                    className="img-fluid rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="post-content pt-lg--7 pt-lg--7 pt-5 pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-left">
                  <p className="lh-32 drop-cap font-xss text-grey-600 mb-5">
                    <h6 className="text-uppercase fw-600 ls-3 text-success font-xsss">
                      Assignment Description
                    </h6>
                  </p>
                  <p className="lh-32 font-xss text-grey-600">
                    {assignmentsListingResponse?.data?.[0]?.description}
                  </p>
                  {/* <h6 className="font-xss text-grey-600 ml-0 mt-4 mb-4">
                    <a
                      href={assignmentsListingResponse?.data?.link}
                      className="apply-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}
                    >
                      Apply Now
                    </a>
                  </h6> */}

                  <div className="card shadow-none w-100 border-0 mb-5">
                    <ul className="mt-0 list-inline">
                      <li className="list-inline-item">
                        <a className="btn-round-md bg-facebook">
                          <i className="font-xs ti-facebook text-white"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="btn-round-md bg-twiiter">
                          <i className="font-xs ti-twitter-alt text-white"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="btn-round-md bg-linkedin">
                          <i className="font-xs ti-linkedin text-white"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="btn-round-md bg-instagram">
                          <i className="font-xs ti-instagram text-white"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="btn-round-md bg-pinterest">
                          <i className="font-xs ti-pinterest text-white"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AssignmentDetails;
