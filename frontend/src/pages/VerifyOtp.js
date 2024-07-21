import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

class VerifyOtp extends Component {
  state = {
    number1:"", number2:"", number3:"", number4:"",
    errors: {
      password: '',
      confirmPassword: '',
    },
  };
  focusField = (fieldName) => {
    this.refs[fieldName].focus();
  };
  handleKeyDown = (event) => {
    const { name, value } = event.target;
    if (event.key === 'Backspace' && value.length === 0) {
      // Move to the previous input field
      this.moveToPreviousField(name);
    }
  };
  moveToPreviousField = (currentField) => {
    const fieldOrder = ['number1', 'number2', 'number3', 'number4'];
    const currentIndex = fieldOrder.indexOf(currentField);
    if (currentIndex > 0) {
      const prevField = fieldOrder[currentIndex - 1];
      this.focusField(prevField);
    }
  };
  moveToNextField = (currentField) => {
    const fieldOrder = ['number1', 'number2', 'number3', 'number4'];
    const currentIndex = fieldOrder.indexOf(currentField);
    if (currentIndex < fieldOrder.length - 1) {
      const nextField = fieldOrder[currentIndex + 1];
      this.focusField(nextField);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.moveToNextField(name);
  };

  validateForm = () => {

    // this.setState({ errors });
    // return formIsValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      console.log('Form submitted');
      this.props.history.push('/'); 
    }
  };

  render() {
    const { number1, number2, number3, number4 } = this.state;

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
                  <form onSubmit={this.handleSubmit}>
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
                        ref="number1"
                        onKeyDown={this.handleKeyDown}
                        onChange={this.handleChange}
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
                        ref="number2"
                        onKeyDown={this.handleKeyDown}
                        value={number2}
                        onChange={this.handleChange}
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
                        ref="number3"
                        onKeyDown={this.handleKeyDown}
                        onChange={this.handleChange}
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
                        ref="number4"
                        onKeyDown={this.handleKeyDown}
                        onChange={this.handleChange}
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
      </Fragment>
    );
  }
}

export default VerifyOtp;
 