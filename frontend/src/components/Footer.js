import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ bgColor } ) => {
    return (
      <div className={`footer-wrapper mt-0 ${bgColor}`}>
        <div className="container">
          <div className="row">
    
       
            <div className="col-sm-12">
              <div className="row">
                <div className="col-md-12 col-lg-4 col-sm-9 col-xs-12 md-mb-2">
                  <Link to="/">
                    <h1 className="fredoka-font ls-3 fw-700 text-current font-xxl">
                      Coladco
                     
                    </h1>
                  </Link>
                  <p className="w-100 mt-5">
                  425, Sector 31, Faridabad, Haryana 121002<br />
                  +91 70424 14212 <br /> support@coladco.com
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item mr-3">
                      <a href="https://www.linkedin.com/in/yatinvohra/" target="_blank">
                      <i className="ti-linkedin"></i>
                      </a>
                    </li>
                    <li className="list-inline-item mr-3">
                      <a href="https://twitter.com/devwithyatin" target="_blank">
                      <i className="ti-twitter-alt"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/devwithyatin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="target="_blank">
                        <i className="ti-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-lg-2 col-sm-3 col-xs-6 md-mb-2">
                  <h5>Company</h5>
                  <ul>
                    <li>
                      <Link to="#">About Us</Link>
                    </li>
                    <li>
                      <Link to="#">Careers</Link>
                    </li>
                    <li>
                      <Link to="#">Our Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-6">
                  <h5>Channel</h5>
                  <ul>
                    <li>
                      <Link to="#">Product</Link>
                    </li>
                    <li>
                      <Link to="#">Customers</Link>
                    </li>
                    <li>
                      <Link to="#">Pricing</Link>
                    </li>
                    <li>
                      <Link to="#">Help Center</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-6">
                  <h5>About</h5>
                  <ul>
                    <li>
                      <Link to="#">FAQ</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Feedback</Link>
                    </li>
                    <li>
                      <Link to="#">Careers</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-6">
                  <h5 className="mb-3">Office</h5>
                  <p className="w-100">
                  425, Sector 31, Faridabad, Haryana 121002
                  </p>
                  <p className="w-100">
                  +91 70424 14212
                  </p>
                </div>
              </div>
              <div className="middle-footer mt-5 pt-4"></div>
            </div>
            <div className="col-sm-12 lower-footer pt-0"></div>
            <div className="col-sm-6 col-xs-12">
              <p className="copyright-text">
                © 2024 Coladco. All rights reserved.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 text-right">
              
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Footer;
