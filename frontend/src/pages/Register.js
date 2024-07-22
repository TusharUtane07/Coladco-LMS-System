import React, { Component, Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { userRegisterFunctionApi } from '../urls/urls';
import useAxios from '../network/useAxios';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Register = () => {
  const route = useHistory()
  const [registerResponse, registerError, registerLoading, registerFetch] = useAxios();

  const [formValues, setFormValues] = useState( {
    name: '',
    email: '',
    phone: '',
    gender:"",
    errors: {
      name: '',
      email: '',
      phone: '',
    },
  });
  const firstRegister = () => {
    registerFetch(userRegisterFunctionApi(formValues))
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormValues((prev)=>({...prev,
      [name]: value

    }));
  };

  const validateForm = () => {
    const { name, email, phone } = formValues;
    let errors = {};
    let formIsValid = true;

    if (!name) {
      formIsValid = false;
      errors['name'] = 'Name is required';
    }

    if (!email) {
      formIsValid = false;
      errors['email'] = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      errors['email'] = 'Email is not valid';
    }

    if (!phone) {
      formIsValid = false;
      errors['phone'] = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone)) {
      formIsValid = false;
      errors['phone'] = 'Phone number must be 10 digits';
    }

setFormValues((prev)=>({...prev,
      errors: errors

    }));    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      firstRegister()
      console.log('Form submitted');
      // route.push('/verify-otp');
    }
  };
  const { name, email, phone,gender, errors } = formValues;
  useEffect(()=>{
    if(registerResponse?.result == "success"){
     route.push('/verify-otp', {phone: formValues?.phone});
    }
    if(registerError){
      toast.error(registerError?.response?.data)
    }
  },[registerResponse,registerError ])
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
                    your account
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-user text-grey-500 pr-0"></i>
                      <input
                        type="text"
                        name="name"
                        className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                        placeholder="Your Name"
                        value={name}
                        onChange={handleChange}
                      />
                      {errors.name && <div className="text-danger">{errors.name}</div>}
                    </div>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-email text-grey-500 pr-0"></i>
                      <input
                        type="text"
                        name="email"
                        className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                        placeholder="Your Email Address"
                        value={email}
                        onChange={handleChange}
                      />
                      {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-mobile text-grey-500 pr-0"></i>
                      <input
                        type="number"
                        name="phone"
                        className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                        placeholder="Your Phone Number"
                        value={phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <div className="text-danger">{errors.phone}</div>}
                    </div>
                    <div className="form-group icon-input mb-3">
  <i className="font-sm ti-medall-alt text-grey-500 pr-0"></i>
  <select
    name="gender"
    className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
    value={gender}
    onChange={handleChange}
  >
    <option value="">Select Gender</option>
    <option value="M">Male</option>
    <option value="F">Female</option>
    <option value="O">Others</option>
  </select>
  {errors.gender && <div className="text-danger">{errors.gender}</div>}
</div>
                    <div className="form-group mb-1">
                      <button
                        type="submit"
                        className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0"
                      >
                        Next
                      </button>
                    </div>
                  </form>
                  <h6 className="text-grey-500 font-xssss fw-500 mt-0 mb-0 lh-32">
                    Already have account{' '}
                    <Link to="/login" className="fw-700 ml-1">
                      Login
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />

      </Fragment>
    );
  
  }


export default Register;
