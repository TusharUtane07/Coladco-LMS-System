import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Register extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {
      name: '',
      email: '',
      phone: '',
    },
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { name, email, phone } = this.state;
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

    this.setState({ errors });
    return formIsValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      // Submit form
      console.log('Form submitted');
      this.props.history.push('/register-next');
    }
  };

  render() {
    const { name, email, phone, errors } = this.state;

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
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-user text-grey-500 pr-0"></i>
                      <input
                        type="text"
                        name="name"
                        className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                        placeholder="Your Name"
                        value={name}
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                      />
                      {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-email text-grey-500 pr-0"></i>
                      <input
                        type="number"
                        name="phone"
                        className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                        placeholder="Your Phone Number"
                        value={phone}
                        onChange={this.handleChange}
                      />
                      {errors.phone && <div className="text-danger">{errors.phone}</div>}
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
                  <h6 className="text-grey-500 font-xssss fw-500 mt-0 mb-0 lh-32">
                    Already have account{' '}
                    <a href="/login" className="fw-700 ml-1">
                      Login
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Register;
