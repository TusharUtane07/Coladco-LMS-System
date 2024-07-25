import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Make sure to install this package
import click from '../../src/assets/openclosesound.wav'; 
import profile from '../assets/bot.jpeg';

const Popupchat = () => {
  const [onChat, setOnChat] = useState(false); // Use local state for controlling visibility
  const [step, setStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({
    offlineCoding: false,
    cohortInternships: false,
    onlineFullStack: false,
    other: false,
  });
  const [userName, setUserName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const playSound = () => {
    const sound = new Audio(click);
    sound.play().catch(error => {
      console.error('Error playing sound:', error);
    });
  };

  const handleChatToggle = () => {
    setOnChat(prevState => !prevState);
    playSound();
  };

  const handleOptionChange = (event) => {
    const { name, checked } = event.target;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
    const serviceID = 'service_hxdupy7';
    const templateID = 'template_okaqtw8';
    const publicKey = 'BJkIfTD2K83BpACiU';

    const serviceType = selectedOptions.other ? userMessage : Object.keys(selectedOptions).find(key => selectedOptions[key]) || 'Not specified';

    const templateParams = {
      user_name_coladco: userName,
      contact_info_coladco: contactInfo,
      service_type_coladco: serviceType,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      })
      .catch((error) => {
        console.error('Email sending failed:', error.text);
      });

    // Show thank you message and then close chatbox
    setTimeout(() => {
      setStep(4);
      setTimeout(() => {
        setOnChat(false);
        playSound();
      }, 4000);
    }, 1000);
  };

  const handleNextStep = () => {
    if (step === 0) {
      setStep(1);
    } else if (step === 1 && selectedOptions.other) {
      setStep(2);
    } else if (step === 2 || step === 1) {
      setStep(3);
    } else if (step === 3) {
      handleSubmit();
    }
  };

  return (
    <div
      className="modal-popup-chat"
      style={{
        width: '400px',
        height: onChat ? '475px' : '60px',
        position: 'fixed',
        bottom: '4rem',
        right: '10px',
        zIndex: 1000,
        transition: 'height 0.3s ease',
      }}
    >
      <div className="modal-popup-wrap bg-white p-0 shadow-lg rounded-lg" style={{ height: '100%' }}>
        <div
          className="modal-popup-header w-100 border-bottom"
          onClick={handleChatToggle}
          style={{ cursor: 'pointer' }}
        >
          <div className="card p-3 d-block border-0 d-block">
            <figure className="avatar mb-0 float-left mr-2">
              <img
                src={profile}
                alt="avatar"
                className="w50 mr-1 rounded-circle"
              />
            </figure>
            <h5 className="fw-700 text-primary font-xss mt-2 mb-1">
              Chat with Yatin
            </h5>
            <h4 className="text-grey-500 font-xssss mt-0">
              <span className="d-inline-block bg-success btn-round-xss m-0 mr-1"></span>
              Available
            </h4>
          </div>
        </div>

        {onChat && (
          <>
            <div className="modal-popup-body w-100 p-4 h-auto" style={{ overflowY: 'auto', maxHeight: '300px' }}>
              <div className="message">
                <div className="message-content font-xssss lh-24 fw-500">
                  Hi, how can I help you?
                </div>
              </div>
              <div className="message">
                <div className="message-content font-xssss lh-24 fw-500 mt-3">
                  Hi, my name is Yatin, I will be happy to assist you.
                </div>
              </div>
              {step === 0 && (
                <div className="message self text-right mt-4">
                  <div className="message-content font-xssss lh-24 fw-500">
                    Please provide your name :
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Your Name"
                      className="form-control rounded-xl bg-greylight border-0 font-xssss fw-500 pl-3 mt-2"
                    />
                    <button
                      onClick={() => setStep(1)}
                      className="btn btn-primary mt-3"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {step === 1 && (
                <div className="message self text-right mt-4">
                  <div className="message-content font-xssss lh-24 fw-500">
                    Which type of help do you need {userName} ?
                    <div className="option mt-2">
                      <label>
                        <input
                          type="checkbox"
                          name="offlineCoding"
                          checked={selectedOptions.offlineCoding}
                          onChange={handleOptionChange}
                        />
                        Offline Coding Course
                      </label>
                    </div>
                    <div className="option mt-2 ">
                      <label>
                        <input
                          type="checkbox"
                          name="cohortInternships"
                          checked={selectedOptions.cohortInternships}
                          onChange={handleOptionChange}
                        />
                        Co-hort & Internships
                      </label>
                    </div>
                    <div className="option mt-2">
                      <label>
                        <input
                          type="checkbox"
                          name="onlineFullStack"
                          checked={selectedOptions.onlineFullStack}
                          onChange={handleOptionChange}
                        />
                        Online Full Stack Course
                      </label>
                    </div>
                    <div className="option mt-2">
                      <label>
                        <input
                          type="checkbox"
                          name="other"
                          checked={selectedOptions.other}
                          onChange={handleOptionChange}
                        />
                        Other
                      </label>
                    </div>
                    <button
                      onClick={handleNextStep}
                      className="btn btn-primary mt-3"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {step === 2 && selectedOptions.other && (
                <div className="message self text-right mt-4">
                  <div className="message-content font-xssss lh-24 fw-500">
                    Please describe your requirement {userName} :
                    <textarea
                      value={userMessage}
                      onChange={(e) => setUserMessage(e.target.value)}
                      placeholder="Please describe your requirement"
                      className="form-control rounded-xl bg-greylight border-0 font-xssss fw-500 pl-3 mt-2"
                    ></textarea>
                    <button
                      onClick={handleNextStep}
                      className="btn btn-primary mt-3"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="message self text-right mt-4">
                  <div className="message-content font-xssss lh-24 fw-500">
                    Please provide your contact information {userName} :
                    <input
                      type="text"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder="Email or Contact Number"
                      className="form-control rounded-xl bg-greylight border-0 font-xssss fw-500 pl-3 mt-2 "
                    />
                    <button
                      onClick={handleSubmit}
                      className="btn btn-primary mt-3"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
              {step === 4 && (
                <div className="message self text-right mt-4">
                  <div className="message-content font-xssss lh-24 fw-500">
                    <p><strong>Name:</strong> {userName}</p>
                    <p><strong>Service Type/Requirement:</strong> {selectedOptions.other ? userMessage : Object.keys(selectedOptions).find(key => selectedOptions[key]) || 'Not specified'}</p>
                    <p><strong>Contact Info:</strong> {contactInfo}</p>
                    <div className="mt-3 fw-500">
                      Thank you for your message {userName}. We will contact you soon 😊.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Popupchat;
