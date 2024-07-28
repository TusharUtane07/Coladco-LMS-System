import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Upperheader from "../components/Upperheader";
import Footer from "../components/Footer";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <style>
          {`
            .map-wrapper iframe {
              border: none;
            }
          `}
        </style>
        <Header />
        <div className="map-wrapper">
          <div style={{ border: "none" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.2063592405652!2d77.31077127382802!3d28.443195092656573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd5a5c0f5ee5%3A0xdb84e509fb0203a9!2sColadco%20Digital%20And%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1720693848739!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowfullscreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="map-wrapper pb-2 pb-lg--5 mt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="contact-wrap bg-white shadow-lg rounded-lg position-relative" style={
                  {
                    marginTop:"8rem"
                  }
                }>
                  <h1 className="text-grey-900 fw-700 display3-size mb-5 lh-1 overflow-hidden" >
                    Contact us
                  </h1>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control style2-input bg-color-none text-grey-700"
                            defaultValue="Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control style2-input bg-color-none text-grey-700"
                            defaultValue="Email"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group mb-3 md-mb-2">
                          <textarea className="w-100 h125 style2-textarea p-3 form-control">
                            Message
                          </textarea>
                        </div>
                        <div className="form-check text-left mt-3 float-left md-mb-2">
                          <input
                            type="checkbox"
                            className="form-check-input mt-2"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label font-xsss text-grey-500 fw-500"
                            htmlFor="exampleCheck1"
                          >
                            I agree to the term of this{" "}
                            <a href="/contact" className="text-grey-600 fw-600">
                              Privacy Policy
                            </a>
                          </label>
                        </div>
                        <div className="form-group">
                          <a
                            href="/contact"
                            className="rounded-lg style1-input float-right bg-current text-white text-center font-xss fw-500 border-2 border-0 p-0 w175"
                          >
                            Submit
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-12 pb-lg--7 pb-5 pt-0">
                <div className="row">
                  <div className="col-lg-4 col-md-4 xs-mb-2">
                    <div className="card shadow-xss border-0 p-5 rounded-lg">
                      <span className="btn-round-xxxl alert-success overflow-hidden">
                        <i className="feather-mail text-success font-xl "></i>
                      </span>
                      <h2 className="fw-700 font-sm mt-4 mb-3 text-grey-900 over">
                        Email us
                      </h2>
                      <p className="font-xsss text-grey-500 fw-500 mb-3">
                        Ask us a question by email and we will respond within a
                        few days.
                      </p>
                      <a
                        href="mailto:dummyemail@example.com"
                        className="fw-700 font-xsss text-primary"
                      >
                        Get in touch
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 xs-mb-2">
                    <div className="card shadow-xss border-0 p-5 rounded-lg">
                      <span className="btn-round-xxxl alert-danger overflow-hidden">
                        <i className="feather-phone text-danger font-xl"></i>
                      </span>
                      <h2 className="fw-700 font-sm mt-4 mb-3 text-grey-900">
                        Call us
                      </h2>
                      <p className="font-xsss text-grey-500 fw-500 mb-3">
                        Reach out to us via phone for immediate assistance.
                      </p>
                      <a
                        href="tel:+917042414212"
                        className="fw-700 font-xsss text-primary"
                      >
                        +91 70424 14212
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 xs-mb-2">
                    <div className="card shadow-xss border-0 p-5 rounded-lg">
                      <span className="btn-round-xxxl alert-primary overflow-hidden">
                        <i className="feather-map-pin text-primary font-xl"></i>
                      </span>
                      <h2 className="fw-700 font-sm mt-4 mb-3 text-grey-900">
                        Find us
                      </h2>
                      <p className="font-xsss text-grey-500 fw-500 mb-3">
                        Click the link below to open our location on Google
                        Maps.
                      </p>
                      <a
                        href="https://maps.app.goo.gl/pwznxoVA3qsd7aTKA"
                        className="fw-700 font-xsss text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Location
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer bgColor="bg-dark" />
      </Fragment>
    );
  }
}

export default Contact;
