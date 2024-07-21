import React, { useState, Fragment } from "react";

import Adminsidebar from "../components/Adminsidebar";
import AdminTopnav from "../components/AdminTopnav";
import Pagination from "../components/Pagination";
import Adminfooter from "../components/Adminfooter";
import { Button, Modal } from "antd";
import useAxios from "../network/useAxios";

const AdminJobPanel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const [getJobResponse, getJobError, getJobLoading, getJobFetch] = useAxios();
    const [postJobResponse, postJobError, postJobLoading, postJobFetch] = useAxios();

    const [formValues, setFormValues] = useState( {
      companyName: '',
      yearsOfExperience: '',
      description: '',
      jobProfile:"",
      link: "",
      errors: {
        companyName: '',
        yearsOfExperience: '',
        description: '',
        jobProfile:"",
      link: "",
      },
    });
    const validateForm = () => {
      const {companyName, yearsOfExperience, description, jobProfile, link } = formValues;
      let errors = {};
      let formIsValid = true;
  
      if (!companyName) {
        formIsValid = false;
        errors["companyName"] = "companyName is required";
      }
  
      if (!yearsOfExperience) {
        formIsValid = false;
        errors["yearsOfExperience"] = "yearsOfExperience is required";
      } 
      // else if (!/\S+@\S+\.\S+/.test(email)) {
      //   formIsValid = false;
      //   errors["email"] = "Email is not valid";
      // }
  
      if (!description) {
        formIsValid = false;
        errors["description"] = "description is required";
      } 
      // else if (!/^\d{10}$/.test(description)) {
      //   formIsValid = false;
      //   errors["phone"] = "Phone number must be 10 digits";
      // }
      if (!jobProfile) {
        formIsValid = false;
        errors["jobProfile"] = "jobProfile is required";
      } 
      if (!link) {
        formIsValid = false;
        errors["link"] = "link is required";
      } 
  
      setFormValues((prev) => ({ ...prev, errors: errors }));
      return formIsValid;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        // firstRegister();
        console.log("Form submitted");
        // route.push('/verify-otp');
      }
    };

    const { companyName, yearsOfExperience, description, jobProfile, link , errors } = formValues;

  const orderList = [
    // Populate this array with your order data
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      total: 100,
      status: "Paid",
      date: "2021-07-21",
      color: "success",
    },
    // Add more orders as needed
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Fragment>
      <div id="wrapper">
        <Adminsidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AdminTopnav />

            <div className="container px-3 py-4">
              <div className="row">
                <div className="col-lg-12 mt-4">
                  <Button type="primary" onClick={showModal}>
                    Open Modal
                  </Button>
                  <Modal
                    title="Basic Modal"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                   <form onSubmit={handleSubmit}>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-user text-grey-500 pr-0"></i>
                    <input
                      type="text"
                      name="companyName"
                      className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Company Name"
                      value={companyName}
                      onChange={handleChange}
                    />
                    {errors.companyName && (
                      <div className="text-danger">{errors.companyName}</div>
                    )}
                  </div>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-email text-grey-500 pr-0"></i>
                    <input
                      type="text"
                      name="yearsOfExperience"
                      className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Your Email Address"
                      value={yearsOfExperience}
                      onChange={handleChange}
                    />
                    {errors.yearsOfExperience && (
                      <div className="text-danger">{errors.yearsOfExperience}</div>
                    )}
                  </div>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-mobile text-grey-500 pr-0"></i>
                    <input
                      type="text"
                      name="description"
                      className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="description"
                      value={description}
                      onChange={handleChange}
                    />
                    {errors.description && (
                      <div className="text-danger">{errors.description}</div>
                    )}
                  </div>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-mobile text-grey-500 pr-0"></i>
                    <input
                      type="text"
                      name="jobProfile"
                      className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="jobProfile"
                      value={jobProfile}
                      onChange={handleChange}
                    />
                    {errors.jobProfile && (
                      <div className="text-danger">{errors.jobProfile}</div>
                    )}
                  </div>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-mobile text-grey-500 pr-0"></i>
                    <input
                      type="text"
                      name="link"
                      className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="link"
                      value={link}
                      onChange={handleChange}
                    />
                    {errors.link && (
                      <div className="text-danger">{errors.link}</div>
                    )}
                  </div>
                 
                 
                  <div className="form-group mb-1">
                    <button
                      type="submit"
                      className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0"
                    >
                      Add
                    </button>
                  </div>
                </form>
                  </Modal>
                  <div className="card border-0 mt-2 rounded-10">
                    <div className="card-body d-flex p-4 pb-0">
                      <h4 className="font-xss text-grey-800 mt-3 fw-700">
                        Jobs List
                      </h4>
                      <select
                        className="form-select ml-auto float-right border-0 font-xssss fw-600 text-grey-700 bg-transparent"
                        aria-label="Default select example"
                      >
                        <option>Sort by latest</option>
                        <option value="1">Sort by popularity</option>
                        <option value="2">Sort by price: low to high</option>
                        <option value="3">Sort by price: high to low</option>
                      </select>
                    </div>
                    <div className="card-body p-4">
                      <div className="table-responsive">
                        <table className="table table-admin mb-0">
                          <thead className="bg-greylight rounded-10 ovh">
                            <tr>
                              <th className="border-0">ID</th>
                              <th className="border-0" scope="col">
                                Name
                              </th>
                              <th className="border-0" scope="col">
                                Email
                              </th>
                              <th className="border-0" scope="col">
                                Total
                              </th>
                              <th className="border-0" scope="col">
                                Status
                              </th>
                              <th className="border-0" scope="col">
                                Date
                              </th>
                              <th scope="col" className="text-end border-0">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {orderList.map((value, index) => (
                              <tr key={index}>
                                <td>{value.id}</td>
                                <td>
                                  <b>{value.name}</b>
                                </td>
                                <td>{value.email}</td>
                                <td>{value.total}</td>
                                <td>
                                  <span
                                    className={`badge rounded-pill font-xsssss fw-700 pr-3 pl-3 lh-24 text-uppercase rounded-3 ls-2 alert-${value.color}`}
                                  >
                                    {value.status}
                                  </span>
                                </td>
                                <td>{value.date}</td>
                                <td className="product-remove text-end">
                                  <a href="/admin-orderview">
                                    <i className="feather-edit me-1 font-xs text-grey-500"></i>
                                  </a>
                                  {/* <Button
                                    className="bg-transparent border-0"
                                    onClick={handleModel}
                                  >
                                    <i className="ti-trash font-xs text-danger"></i>
                                  </Button>
                                  <Modal
                                    size="sm"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                    show={location}
                                    onHide={handleModel}
                                  >
                                    <Button
                                      onClick={handleModel}
                                      className="btn-close z-index-5 posa right-0 top-0 mt-3 me-3 font-xss"
                                    ></Button>
                                    <Modal.Body className="text-center p-4">
                                      <i className="ti-info-alt text-warning display4-size"></i>
                                      <p className="text-grey-500 font-xsss mt-3 mb-4">
                                        Are you sure you want to delete this
                                        product?
                                      </p>
                                      <Button
                                        onClick={handleModel}
                                        className="border-0 btn rounded-6 lh-2 p-3 mt-0 mb-2 text-white bg-danger font-xssss text-uppercase fw-600 ls-3"
                                      >
                                        Yes, delete!
                                      </Button>
                                      <Button
                                        onClick={handleModel}
                                        className="border-0 btn rounded-6 lh-2 p-3 mt-0 mb-2 text-grey-600 bg-greylight font-xssss text-uppercase fw-600 ls-3 ms-1"
                                      >
                                        No, cancel!
                                      </Button>
                                    </Modal.Body>
                                  </Modal> */}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <Pagination divClass="pagination justify-content-center mt-5" />
                </div>
              </div>
            </div>

            <Adminfooter />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminJobPanel;
