import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

class RegisterNext extends Component {
  state = {
    password: '',
    confirmPassword: '',
    errors: {
      password: '',
      confirmPassword: '',
    },
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { password, confirmPassword } = this.state;
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

    this.setState({ errors });
    return formIsValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      // Submit form
      console.log('Form submitted');
      this.props.history.push('/'); 
    }
  };

  render() {
    const { password, confirmPassword, errors } = this.state;

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
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-user text-grey-500 pr-0"></i>
                      <input
                        type="password"
                        name="password"
                        className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                        placeholder="Password"
                        value={password}
                        onChange={this.handleChange}
                      />
                      {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-email text-grey-500 pr-0"></i>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={this.handleChange}
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
      </Fragment>
    );
  }
}

export default RegisterNext;
 