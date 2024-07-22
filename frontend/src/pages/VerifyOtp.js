import React, { Component, Fragment, useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { verifyOtpFunctionApi } from '../urls/urls';
import useAxios from '../network/useAxios';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const VerifyOtp = () => {
  const route = useHistory()
  const [otpResponse, otpError, otpLoading, otpFetch] = useAxios();
  const location = useLocation();
  const data = location.state;

  const [formValues, setFormValues] = useState({
    number1:"", number2:"", number3:"", number4:"",
    errors: {
      password: '',
      confirmPassword: '',
    },
  });
  useEffect(()=>{
    if (!data?.phone){
      route.push("/register")
    }
  },[])
  const verifyOtp = () => {
    otpFetch(verifyOtpFunctionApi({...formValues , phone:data?.phone}))
  }
  const useRef1 = useRef()
  const useRef2 = useRef()
  const useRef3 = useRef()
  const useRef4 = useRef()
  const focusField = (fieldName) => {
    fieldName.current.focus();
  };
  const handleKeyDown = (event) => {
    const { name, value } = event.target;
    if (event.key === 'Backspace' && value.length === 0) {
      // Move to the previous input field
      moveToPreviousField(name);
    }
  };
  const moveToPreviousField = (currentField) => {
    const fieldOrder = ["number1", "number2", "number3", "number4"];
    const fieldOrderObj = {"number1": useRef1,"number2": useRef2, "number3":useRef3, "number4":useRef4};
    const currentIndex = fieldOrder.indexOf(currentField);
    if (currentIndex > 0) {
      const prevField = fieldOrder[currentIndex - 1];
      focusField(fieldOrderObj[prevField]);
    }
  };
  const moveToNextField = (currentField) => {
    const fieldOrderList = ["number1", "number2", "number3", "number4"];
    const fieldOrder = {"number1": useRef1,"number2": useRef2, "number3":useRef3, "number4":useRef4};
    const currentIndex = fieldOrderList.indexOf(currentField);

    if (currentIndex < fieldOrderList.length - 1) {
      const nextField = fieldOrderList[currentIndex + 1];
      focusField(fieldOrder[nextField]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev)=>({...prev,
      [name]: value
    }));
    moveToNextField(name);
  };

  const validateForm = () => {

    // setState({ errors });
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      verifyOtp()
      // console.log('Form submitted');
    }
  };

  useEffect(()=>{
    if(otpResponse?.result == "success"){
     route.push('/register-next', {phone: data?.phone});
    }
    if(otpError){
      toast.error(otpError?.response?.data)
    }
  },[otpResponse,otpError ])

    const { number1, number2, number3, number4 } = formValues;

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
                  <h2 className="fw-500 display1-size display2-md-size mb-4">
                   Enter your <span className='fw-800'>OTP</span>
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className='row'>
                    <div className="form-group icon-input mb-3 col-3">
                      <input
                        type="text"
                        name="number1"
                        style={{
                          textAlign:"center",
                          paddingLeft:"0"
                        }}
                        className="style2-input  form-control text-grey-900 font-xsss fw-600"
                        placeholder=""
                        value={number1}
                        ref={useRef1}
                        onKeyDown={handleKeyDown}
                        onChange={handleChange}
                        maxLength={1}
                      />
                    </div>
                    <div className="form-group icon-input mb-3 col-3">
                      <input
                        type="text"
                        name="number2"
                        style={{
                          textAlign:"center",
                          paddingLeft:"0"
                        }}
                        className="style2-input  form-control text-grey-900 font-xsss fw-600"
                        placeholder=""
                        ref={useRef2}
                        onKeyDown={handleKeyDown}
                        value={number2}
                        onChange={handleChange}
                        maxLength={1}

                      />
                    </div>
                    <div className="form-group icon-input mb-3 col-3">
                      <input
                        type="text"
                        style={{
                          textAlign:"center",
                          paddingLeft:"0"
                        }}
                        name="number3"
                        className="style2-input  form-control text-grey-900 font-xsss fw-600"
                        placeholder=""
                        value={number3}
                        ref={useRef3}
                        onKeyDown={handleKeyDown}
                        onChange={handleChange}
                        maxLength={1}

                      />
                    </div>
                    <div className="form-group icon-input mb-3 col-3">
                      <input
                        type="text"
                        name="number4"
                        style={{
                          textAlign:"center",
                          paddingLeft:"0"
                        }}
                        className="style2-input  form-control text-grey-900 font-xsss fw-600"
                        placeholder=""
                        value={number4}
                        ref={useRef4}
                        onKeyDown={handleKeyDown}
                        onChange={handleChange}
                        maxLength={1}
                      />
                    </div>
                    </div>
                   
                    <div className="form-group mb-1">
                      <button
                        type="submit"
                        className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0"
                      >
                        Verify Otp
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

export default VerifyOtp;
 