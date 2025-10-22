import React from "react";
import "../pages/Styles/ContactUs.css";
import telImg from "../assets/tel-img.svg";
import mailImg from "../assets/mail-img.svg";
import locationImg from "../assets/location-img.svg";
import xImg from "../assets/x-img.svg";
import fbImg from "../assets/facebook-img.svg";
import instagramImg from "../assets/ig.svg";
import Accordion from 'react-bootstrap/Accordion';
import FAQComponent from "../component/FAQComponent";


const ContactUs = () => {
  return (
    <>
      <header className="contact">
        <h1>CONTACT US</h1>
      </header>
      <main className="container border my-5  ">
        <section className="contact-main-section-1  row justify-content-between align-item-center">
          <div className="col-md-5 px-4 text-white contact-main rounded d-flex gap-5 flex-column align-item-center justify-content-center">
            <div className="">
              <h2 style={{ padding: "30px" }}>Contact Information</h2>
              <div
                className="d-flex align-item-center gap-2"
                style={{ padding: "30px" }}
              >
                <div>
                  <img src={telImg} alt="tel-img" />
                </div>
                <p>+1012 3456 789</p>
              </div>
              <div
                className="d-flex align-item-center gap-2"
                style={{ padding: "30px" }}
              >
                <div>
                  <img src={mailImg} alt="mail-img" />
                </div>
                <p>demo@gmail.com</p>
              </div>
              <div
                className="d-flex align-item-center gap-2"
                style={{ padding: "30px" }}
              >
                <div>
                  <img src={locationImg} alt="location-mg" />
                </div>
                <p>
                  132 Dartmouth Street Boston,
                  <br /> Massachusetts 02156 United States
                </p>
              </div>
            </div>
            <div className="d-flex gap-4 social" style={{ padding: "30px" }}>
              <img src={xImg} alt="x-img" />
              <img src={fbImg} alt="facebook-img" />
              <div className="ig-img text-center">

              <img src={instagramImg} alt="instagram-img"  />
              </div>
            </div>
          </div>
          {/* div-2 */}
          <div className="contact-main-section-1 col-md-7 px-5 input">
            <form className="contact-form">
              <div className="row justify-content-between mb-5">
                <input type="text" name="firstName" placeholder="First Name"  className="contact-input-size col-md-5"/>
                <input type="text" name="lastName" placeholder="Last Name"  className="contact-input-size col-md-5"/>
                <input type="email" name="email" placeholder="Email" className="contact-input-size col-md-5" />
                <input type="tel" name="phone" placeholder="Phone"  className="contact-input-size col-md-5"/>
              </div>
              <div>
                <h6>Select Subject?</h6>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-4 pb-4 pt-3">

                <div className="d-flex justify-content-between align-items-center ">

                <input type="radio" name="subject" id="general" />
                <label htmlFor="general" className="ps-2">General Inquiry</label>
                </div>
                <div  className="d-flex justify-content-between align-items-center">

                <input type="radio" name="subject" id="giving" />
                <label htmlFor="giving" className="ps-2">Giving</label>
                </div>
                <div  className="d-flex justify-content-between align-items-center">

                <input type="radio" name="subject" id="church" />
                <label htmlFor="church" className="ps-2">The Church</label>
                </div>
                <div  className="d-flex justify-content-between align-items-center">

                <input type="radio" name="subject" id="w-force" />
                <label htmlFor="w-force" className="ps-2">Join Workforce</label>
                </div>
                </div>
              </div>
              <div className="d-flex flex-column pt-4 textarea">
                
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Write your message.." className="contact-form-textarea" />
              </div>
              <div className="d-flex justify-content-end  mt-5 form-btn">
                <button>Send Message</button>
              </div>
            </form>
          </div>
        </section>
      </main>
<div>
  
  <FAQComponent/>
</div>
      
    </>
  );
};

export default ContactUs;
