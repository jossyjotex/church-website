import React from "react";
import "../pages/Styles/Footer.css";
import logo from "../assets/logo.jpeg";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="container">
        <div className="row justify-content-between  pt-5">
          <div className="col-md-4">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="col-md-3">
            <h6>QUICK LINKS</h6>
            <div>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  height: "2px",
                }}
              >
                Online Church
              </a>
            </div>
            <div>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  height: "2px",
                }}
              >
                About Us
              </a>
            </div>
            <div>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  height: "2px",
                }}
              >
                Online Giving
              </a>
            </div>
            <div>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  height: "2px",
                }}
              >
                Outreach
              </a>
            </div>
            <div>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  height: "2px",
                }}
              >
                FAQ
              </a>
            </div>
            <div>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  height: "2px",
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-md-4 ">
            <h6>WANT TO GET UPDATES FROM US?</h6>
            <div className="subscribe">
              <input type="email" name="" id="" placeholder="Your email"/>
              <button>SUBSCRIBE</button>
                {/* <span className="email">Your email</span>
                <button type="submit">SUBSCRIBE</button> */}
              {/* <p className="" role="button">
              </p> */}
            </div>
            <p
              style={{
                whiteSpace: "nowrap",
                overflow: "visible",
                fontSize: "clamp(12px,2vw,14px)",
                paddingTop:"15px"
              }}
            >
              Subscribe to our newsletter in order to receive program reminders.
            </p>
          </div>
        </div>
        <div className="d-flex gap-2 pt-5 ">
          <p>
            {" "}
            <FaInstagram />
          </p>
          <p>
            {" "}
            <CiFacebook />
          </p>
          <p>
            {" "}
            <FaXTwitter />
          </p>
          <p>
            {" "}
            <FiYoutube />
          </p>
        </div>
        <hr />
        <h6>© 2024 Multiple Grace. All rights reserved. </h6>
      </div>
    </footer>
  );
};

export default Footer;
