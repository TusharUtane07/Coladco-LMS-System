import React, { Fragment, useEffect, useState } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Myclass from '../components/Myclass';
import Subscribe from '../components/Subscribe';
import { Link } from 'react-router-dom';
import { profileApi } from '../urls/urls';
import useAxios from '../network/useAxios';

const Social = () => {
  const [profileResponse, profileError, profileLoading, profileFetch] = useAxios();
  const [formValues, setFormValues] = useState({
    instagram: '',
    twitter: '',
    linkedin: '',
    facebook: '',
    github: ''
  });
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    profileFetch(profileApi({ profileId: 1 }));
  }, []);

  useEffect(() => {
    if (profileResponse?.result === 'success' && profileResponse?.data) {
      setProfile(profileResponse?.data[0]);
      setFormValues({
        instagram: profileResponse?.data[0]?.instagram || '',
        twitter: profileResponse?.data[0]?.twitter || '',
        linkedin: profileResponse?.data[0]?.linkedin || '',
        facebook: profileResponse?.data[0]?.facebook || '',
        github: profileResponse?.data[0]?.github || ''
      });
      setIsLoading(false); 
    }
  }, [profileResponse]);

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <Fragment>
      <div className="main-wrapper">
        <Navheader />

        <div className="main-content">
          <Appheader />

          <div className="middle-sidebar-bottom  theme-dark-bg">
            <div className="middle-sidebar-left">
              <div className="middle-wrap">
                <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                  <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-lg">
                    <Link to="/default-settings" className="d-inline-block mt-2">
                      <i className="ti-arrow-left font-sm text-white"></i>
                    </Link>
                    <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                      Social Network
                    </h4>
                  </div>
                  <div className="card-body p-lg-5 p-4 w-100 border-0">
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss">Facebook</label>
                            <input
                              type="text"
                              name="facebook"
                              className="form-control"
                              value={formValues.facebook}
                              onChange={(e) => setFormValues({ ...formValues, facebook: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss">Twitter</label>
                            <input
                              type="text"
                              name="twitter"
                              className="form-control"
                              value={formValues.twitter}
                              onChange={(e) => setFormValues({ ...formValues, twitter: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss">Linkedin</label>
                            <input
                              type="text"
                              name="linkedin"
                              className="form-control"
                              value={formValues.linkedin}
                              onChange={(e) => setFormValues({ ...formValues, linkedin: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss">Instagram</label>
                            <input
                              type="text"
                              name="instagram"
                              className="form-control"
                              value={formValues.instagram}
                              onChange={(e) => setFormValues({ ...formValues, instagram: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss">Github</label>
                            <input
                              type="text"
                              name="github"
                              className="form-control"
                              value={formValues.github}
                              onChange={(e) => setFormValues({ ...formValues, github: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 mb-0 mt-2">
                          <Link
                            to="/"
                            className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block"
                          >
                            Save
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="middle-sidebar-right scroll-bar">
              <div className="middle-sidebar-right-content">
                <Profile />
                <Myclass />
                <Subscribe />
              </div>
            </div>
          </div>
        </div>

        <Appfooter />
      </div>
    </Fragment>
  );
};

export default Social;
