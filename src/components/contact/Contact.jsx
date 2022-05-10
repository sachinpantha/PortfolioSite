import React from "react";
import "./contact.css";
import Email from "../../images/email.png";
import Address from "../../images/map.png";
import emailjs from "emailjs-com"
import {BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs'
import { useRef } from "react";
const Contact = () => {
  const formRef=useRef();
  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_hxytut8', 'template_dtli6z6', formRef.current, 'kOcRm5AOyb7wU4VWT')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
  }
  return (
    <div className="Contact">
      <div className="Contact-bg"> </div>
        <div className="Contact-wrapper">
          <div className="Contact-Left">
            <h1 className="Contact-title">Connect with me!</h1>
            <div className="Contact-info">
              <div className="Contact-info-item" data-aos="fade-left">
                <img src={Email} alt="" className="Contact-icon" />{" "}
                sachinpantha01@gmail.com
              </div>
              <div
                className="Contact-info-item"
                data-aos="fade-left"
                data-aos-delay={200}
              >
                <img src={Address} alt="" className="Contact-icon" /> Butwal,
                Province-5, Nepal
              </div>
              <div className="wrap">
              <div
                className="Contact-info-item"
                data-aos="fade-left"
                data-aos-delay={200}
              >
               <a href="https://www.facebook.com/sachin.nihc" target='_blank'><BsFacebook  className="iconify"/></a>
              </div>
              <div
                className="Contact-info-item"
                data-aos="fade-left"
                data-aos-delay={300}
              >
              <a href="https://www.instagram.com/thesachin_nihc/" target='_blank'><BsInstagram  className="iconify"/></a>

              </div>
              <div
                className="Contact-info-item"
                data-aos="fade-left"
                data-aos-delay={400}
              >
              <a href="https://github.com/sachinpantha" target='_blank'><BsGithub  className="iconify"/></a>

              </div>
              </div>
            </div>
          </div>
          <div className="Contact-Right" >
            <p className="c-desc">Send me Message, if you have any queries in Programming and Physics. So that i can reach you out there and help as much i can as i always love giving back to community ;-)</p>
            <form onSubmit={handleSubmit} ref={formRef}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="text" placeholder="Your Email" name="user_email" />
              <textarea rows="5" placeholder="Enter message" name="message" />
              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Contact;
