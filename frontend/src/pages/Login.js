import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxios from '../network/useAxios';
import { loginFunctionApi } from '../urls/urls';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/UserSlice';
import { IoEyeOff, IoEye } from "react-icons/io5";

const Login = () => {
  const dispatch = useDispatch(); 
  const route = useHistory();
  const [logineResponse, logineError, logineLoading, logineFetch] = useAxios();
  const [formValues, setFormValues] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const loginFunction = () => {
    logineFetch(loginFunctionApi(formValues));
  };

  useEffect(() => {
    if (logineResponse?.result === "success") {
      localStorage.setItem("coladjsTk", logineResponse?.token);
      dispatch(setUser(logineResponse?.data));
      route.push('/overview');
    }
    if (logineError) {
      toast.error(logineError?.response?.data);
    }
  }, [logineResponse, logineError]);

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

          <div className="col-xl-7 vh-lg-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
            <div className="card shadow-none border-0 ml-auto mr-auto login-card">
              <div className="card-body rounded-0 text-left">
                <h2 className="fw-700 display1-size display2-md-size mb-3">
                  Login into <br />
                  your account
                </h2>
                <form>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-email text-grey-500 pr-0"></i>
                    <input
                      type="text"
                      className="style2-input pl-5 form-control text-grey-900 font-xssss fw-600"
                      placeholder="Enter your Username or Phone"
                      onChange={(e) => {
                        setFormValues((prev) => ({ ...prev, username: e.target.value }));
                      }}
                    />
                  </div>
                  <div className="form-group icon-input mb-1" style={{ position: 'relative' }}>
      <input
        type={showPassword ? "text" : "password"}
        className="style2-input pl-5 pr-5 form-control text-grey-900 font-xssss ls-3"
        placeholder="Password"
        onChange={(e) => {
          setFormValues((prev) => ({ ...prev, password: e.target.value }));
        }}
        style={{ paddingRight: '40px' }}
      />
      <i className="font-sm ti-lock text-grey-500 pr-0" style={{ position: 'absolute', left: '10px' }}></i>
      <span
        className="password-toggle-icon text-grey-500"
        onClick={() => setShowPassword(!showPassword)}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
        }}
      >
        {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
      </span>
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
                      Remember me
                    </label>
                    <Link
                      to="/forgot"
                      className="fw-600 font-xssss text-grey-700 mt-1 float-right"
                    >
                      Forgot Your Password?
                    </Link>
                  </div>
                </form>

                <div className="col-sm-12 p-0 text-left">
                  <div className="form-group mb-1">
                    <button
                      onClick={loginFunction}
                      className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0"
                    >
                      {logineLoading ? "Loading" : "Login"}
                    </button>
                  </div>
                  <h6 className="text-grey-500 font-xssss fw-500 mt-0 mb-0 lh-32">
                    Don't have an account?{' '}
                    <Link to="/register" className="fw-700 ml-1">
                      Register
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default Login;
