import React from "react";
import "./style.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <>
      <div className="contactWrap">
        <Fade direction="down">
          <h1>Contact</h1>
          <div className="contactContainer">
            <a href="https://www.linkedin.com/in/dorrah-alqwifel/">
              <div className="linkedIn">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/dorrahsq">
              <div className="github">
                <FiGithub />
              </div>
            </a>
            <a href="mailto:dorrah.alqwifel@gmail.com">
              <div className="mail">
                <GoMail />
              </div>
            </a>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Contact;
