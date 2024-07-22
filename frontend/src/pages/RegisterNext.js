import React, { Component, Fragment, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from 'react-router-dom';
import useAxios from '../network/useAxios';
import { changePasswordFunctionApi } from '../urls/urls';
import { ToastContainer, toast } from 'react-toastify';

const RegisterNext = () => {
  const route = useHistory()
  const [createPasswordResponse, createPasswordError, createPasswordLoading, createPasswordFetch] = useAxios();
  const location = useLocation();
  const data = location.state;
  const [formValues, setFormValues] = useState ({
    password: '',
    confirmPassword: '',
    errors: {
      password: '',
      confirmPassword: '',
    },
  });
  const changePassword = () => {
    createPasswordFetch(changePasswordFunctionApi({...formValues , phone:data?.phone}))
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev)=>({...prev,
      [name]: value
    }));  
  };

  const validateForm = () => {
    const { password, confirmPassword } = formValues;
    let errors = {};
    let formIsValid = true;

    if (!password) {
      formIsValid = false;
      errors['password'] = 'Password is required';
    } else if (password.length <= 6) {
      formIsValid = false;
      errors['password'] = 'Password must be greater than 6 characters';
    }

    if (!confirmPassword) {
      formIsValid = false;
      errors['confirmPassword'] = 'Confirm password is required';
    } else if (password !== confirmPassword) {
      formIsValid = false;
      errors['confirmPassword'] = 'Passwords do not match';
    }
    setFormValues((prev)=>({...prev,
      errors: errors
    }));
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      changePassword()
    }
  };
  useEffect(()=>{
    if (!data?.phone){
      route.push("/register")
    }
  },[])
  useEffect(()=>{

    if(createPasswordError){
      toast.error(createPasswordError?.response?.data)
    }
  },[createPasswordError ])
  useEffect(()=>{
    if (createPasswordResponse?.result == "success" && createPasswordResponse?.token){
      localStorage.setItem("coladjsTk",  createPasswordResponse?.token)
      route.push("/overview")
    }
  },[createPasswordResponse])

    const { password, confirmPassword, errors } = formValues;

    return (
      <Fragment>
        <div className="main-wrap">
          <div className="row">
            <div
              className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
              style={{
                backgroundImage: `url("https://via.placeholder.com/800x950.png")`,
              }}
            ></div>

            <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
              <div className="card shadow-none border-0 ml-auto mr-auto login-card">
                <div className="card-body rounded-0 text-left">
                  <h2 className="fw-700 display1-size display2-md-size mb-4">
                    Create <br />
                    your password
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-user text-grey-500 pr-0"></i>
                      <input
                        type="password"
                        name="password"
                        className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                      />
                      {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>
                    <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-user text-grey-800 pr-0"></i>
                    <input
                        type="password"
                        name="confirmPassword"
                        className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleChange}
                      />
                      {errors.confirmPassword && (
                        <div className="text-danger">{errors.confirmPassword}</div>
                      )}
                    </div>
                    <div className="form-check text-left mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input mt-2"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label font-xssss text-grey-500"
                        htmlFor="exampleCheck1"
                      >
                        Accept Term and Conditions
                      </label>
                    </div>
                    <div className="form-group mb-1">
                      <button
                        type="submit"
                        className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </Fragment>
    );
  
}

export default RegisterNext;
 