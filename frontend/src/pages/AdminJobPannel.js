import React, { useState, Fragment, useEffect } from "react";

import Adminsidebar from "../components/Adminsidebar";
import AdminTopnav from "../components/AdminTopnav";
import Pagination from "../components/Pagination";
import Adminfooter from "../components/Adminfooter";
import { Button, Modal } from "antd";
import useAxios from "../network/useAxios";
import { jobPostingApi, jobPostingDeleteApi, jobPostingPostApi } from "../urls/urls";
import { toast, ToastContainer } from "react-toastify";

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
  const [deleteJobResponse, deleteJobError, deleteJobLoading, deleteJobFetch] = useAxios();
  const [postJobResponse, postJobError, postJobLoading, postJobFetch] =
    useAxios();

  const [jobData, setJobData] = useState([]);

  const [formValues, setFormValues] = useState({
    companyName: "",
    yearsOfExperience: "",
    description: "",
    jobProfile: "",
    link: "",
    errors: {
      companyName: "",
      yearsOfExperience: "",
      description: "",
      jobProfile: "",
      link: "",
    },
  });
  const validateForm = () => {
    const { companyName, yearsOfExperience, description, jobProfile, link } =
      formValues;
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
      postJobFetch(jobPostingPostApi(formValues));
      console.log("Form submitted");
      // route.push('/verify-otp');
    }
  };

  const {
    companyName,
    yearsOfExperience,
    description,
    jobProfile,
    link,
    errors,
  } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setIsModalOpen(false);
    getJobFetch(jobPostingApi());
  }, [postJobResponse, deleteJobResponse]);

  useEffect(() => {
    toast.error(deleteJobError?.message);
  }, [ deleteJobError]);

  useEffect(() => {
    setJobData(getJobResponse?.data);
  }, [getJobResponse]);

  useEffect(() => {
    if (postJobError) {
      toast.error(postJobError?.message);
    }
  }, [postJobError]);

  const [isDeleteModalOpen, setDeleteIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState('');
  const showDeleteModal = (id) => {
    setDeleteIsModalOpen(true);
    setSelectedRecord(id)
  };
  const handleDeleteOk = (id) => {
    deleteJobFetch(jobPostingDeleteApi({'jobPostingId': id}))
    setDeleteIsModalOpen(false);
    
    setSelectedRecord('')
  };
  const handleDeleteCancel = () => {
    setDeleteIsModalOpen(false);
    setSelectedRecord('')
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
                  <Button type="primary" onClick={showModal} className="mb-2">
                   Add Posting
                  </Button>
                  <Modal
                    title="Basic Modal"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}
                  >
                    <form onSubmit={handleSubmit}>
                      <div className="form-group icon-input mb-3">
                        {/* <i className="font-sm ti-user text-grey-500 pr-0"></i> */}
                        <input
                          type="text"
                          name="companyName"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Company Name"
                          value={companyName}
                          onChange={handleChange}
                        />
                        {errors.companyName && (
                          <div className="text-danger">
                            {errors.companyName}
                          </div>
                        )}
                      </div>
                      <div className="form-group icon-input mb-3">
                        {/* <i className="font-sm ti-email text-grey-500 pr-0"></i> */}
                        <input
                          type="text"
                          name="yearsOfExperience"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Years of Experience"
                          value={yearsOfExperience}
                          onChange={handleChange}
                        />
                        {errors.yearsOfExperience && (
                          <div className="text-danger">
                            {errors.yearsOfExperience}
                          </div>
                        )}
                      </div>
                      <div className="form-group icon-input mb-3">
                        {/* <i className="font-sm ti-mobile text-grey-500 pr-0"></i> */}
                        <input
                          type="text"
                          name="description"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Description"
                          value={description}
                          onChange={handleChange}
                        />
                        {errors.description && (
                          <div className="text-danger">
                            {errors.description}
                          </div>
                        )}
                      </div>
                      <div className="form-group icon-input mb-3">
                        {/* <i className="font-sm ti-mobile text-grey-500 pr-0"></i> */}
                        <input
                          type="text"
                          name="jobProfile"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Job Profile"
                          value={jobProfile}
                          onChange={handleChange}
                        />
                        {errors.jobProfile && (
                          <div className="text-danger">{errors.jobProfile}</div>
                        )}
                      </div>
                      <div className="form-group icon-input mb-3">
                        {/* <i className="font-sm ti-mobile text-grey-500 pr-0"></i> */}
                        <input
                          type="url"
                          name="link"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Link"
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
                              <th className="border-0"></th>
                              <th className="border-0" scope="col">
                                Name
                              </th>
                              <th className="border-0" scope="col">
                                Years of Experience
                              </th>
                              <th className="border-0" scope="col">
                                Description
                              </th>
                              <th className="border-0" scope="col">
                                Job Profile
                              </th>
                              <th className="border-0" scope="col">
                                Link
                              </th>
                              <th scope="col" className="text-end border-0">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {jobData?.map((value, index) => (
                              <tr key={index}>
                                <td>{index+1}</td>
                                <td>
                                  <b>{value.company_name}</b>
                                </td>
                                <td>{value.years_of_experience}</td>
                                <td>{value.description}</td>
                                <td>
                                  <span
                                    className={`badge rounded-pill font-xsssss fw-700 pr-3 pl-3 lh-24 text-uppercase rounded-3 ls-2 alert-${value.color}`}
                                  >
                                    {value.job_profile}
                                  </span>
                                </td>
                                <td>
                                  <a href={value.link}>link</a>
                                </td>
                                <td className="product-remove text-end">
                                  {/* <a href="/admin-orderview">
                                    <i className="feather-edit me-1 font-xs text-grey-500"></i>
                                  </a> */}
                                  <Button
                                    className="bg-transparent border-0"
                                    onClick={()=>showDeleteModal(value?.id)
                                     
                                    }
                                  >
                                    <i className="ti-trash font-xs text-danger"></i>
                                  </Button>
                                  <Modal
                                    title="Add Job"
                                    open={isDeleteModalOpen}
                                    onOk={()=>handleDeleteOk(value?.id)}
                                    onCancel={handleDeleteCancel}
                                  >
                                    <p>Are You sure you want to delete</p>
                                   
                                  </Modal>
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
      <ToastContainer />
    </Fragment>
  );
};

export default AdminJobPanel;
