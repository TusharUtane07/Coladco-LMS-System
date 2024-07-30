import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../assets/logo.jpg";
import './Header.css';  // Import the CSS file
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import IsMobileView from "../components/IsMobile";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Header = ({ divClass, color = 'light' }) => {
  const isMobile = IsMobileView()  
  const route = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const location = useLocation();
  
  const navClass = `${isOpen ? ' show' : ''}`;
  const colorClass = color === 'dark' ? 'text-white' : '';

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`header-wrapper pt-3 pb-3 shadow-xss ${divClass}`}>
      <div className="container" >
        <div className="row">
          <div className="col-lg-9 navbar pt-0 pb-0">
            <Link to="/">
              <div style={{ display: "flex" }}>
                <img
                  src={logo}
                  style={{ width: "86px", height: "76px", marginRight: "0.3rem", marginTop: "3px" }}
                  alt="Logo"
                />
              </div>
            </Link>
            <button className="navbar-toggler" onClick={toggleOpen}>
             {isOpen ? <FaTimes/> :<FaBars/>} 
            </button>
            <div className={`collapse navbar-collapse ${navClass}`} id="navbarNavDropdown">
              <Navbar expand="lg" className="nav-menu">
                <Navbar id="basic-navbar-nav" className="w-100 d-block">
                  <Nav className={`${colorClass} w-100 d-flex justify-content-around`}>
                    <Nav.Item>
                      <Nav.Link 
                        as={Link} 
                        to="/" 
                        className={isActive('/') ? 'nav-link-active' : ''}
                      >
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link 
                        as={Link} 
                        to="/about" 
                        className={isActive('/about') ? 'nav-link-active' : ''}
                      >
                        About
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link 
                        as={Link} 
                        to="/course-details" 
                        className={isActive('/course-details') ? 'nav-link-active' : ''}
                      >
                        Internship Details
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link 
                        as={Link} 
                        to="/course-details-online" 
                        className={isActive('/course-details-online') ? 'nav-link-active' : ''}
                      >
                        Online Guidance Course
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link 
                        as={Link} 
                        to="/contact" 
                        className={isActive('/contact') ? 'nav-link-active' : ''}
                      >
                        Contact
                      </Nav.Link>
                    </Nav.Item>
                    {isMobile &&
                  
                      <button
                        
                        onClick={()=>{
                          route.push("/login")
                        }}
                        className="btn border-0 w00 bg-primary p-3 text-white fw-600 rounded-lg d-inline-block font-xssss btn-light mt-4 os-init aos-init aos-animate overflow-hidden"
                        style={{
                          color:"white !important"
                        }}
                      >
                        Account
                      </button>
                  
                    }
                  </Nav>
                </Navbar>
              </Navbar>
            </div>
          </div>
          <div className="col-lg-3 text-right " style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"flex-end"
          }}>
            <Link
              to="/login"
              className={`float-right d-none d-lg-block text-center mt-1 ml-4 text-grey-800 ${colorClass}`}
            >
              <i className="ti-user font-lg"></i>
              <span className="font-xssss fw-500 d-block ">Account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
