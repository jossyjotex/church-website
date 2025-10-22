import React from "react";
import "../pages/Styles/NewHome.css";
import heroImg from "../assets/IMG_2391 4.png";
import { CiStreamOn } from "react-icons/ci";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PiCalendarDots } from "react-icons/pi";
import image3 from "../assets/image 3.png";
import image4 from "../assets/image 4.png";
import image6 from "../assets/image 6.png";

const NewHome = () => {
  return (
    <>
      <main className="home-wrapper">
        <section className="container d-flex justify-content-between align-items-center px-4">
          <div className="div-1">
            <h1 className="pb-5">Raising Generational Leaders With Power!</h1>
            <div className="d-flex  gap-4 pt-4">
              <div>
                <button className="">I AM NEW HERE</button>
              </div>
              <p className="" role="button">
                {" "}
                <CiStreamOn />
                <span className=""> LIVE STREAM</span>
              </p>
            </div>
          </div>
          {/* img-div */}
          <div className="text-end d-none d-lg-block">
            <img src={heroImg} alt="hero-image" className="" />
          </div>
        </section>
      </main>
      <div className="container px-4 py-5 text-start">
        <h3 className="hd">
          Welcome To Neighborhood International Christian Centre
        </h3>
        <p className="pt-5">
          “If you do decide to make NICC your spiritual family, there are a few
          things I would like to share with you based on God’s plan and covenant
          with us. We are a spiritual family and your integration into us
          guarantees full restoration and transformation of your life. God sets
          people into this church simply to be able to access their lives with
          the fullness of His Spirit.”
        </p>
        <h6 className="pt-3">-Pastor Lanre Saba</h6>
      </div>
      <div className="congregation ">
        <h4 className="events text-center py-5">
          {" "}
          <PiCalendarDots className=" " /> Upcoming Events
        </h4>
        <div className="container scroll mt-5">
          <Card className="card-item card-position">
            <Card.Body className="pt-5">
              <Card.Title className="pt-3" style={{color: "#0f2f76" }}>Cross Over Service 2024</Card.Title>
              <Card.Text>
                <p style={{color: "#0f2f76"}}> Tuesday, 10:00 pm </p>
              </Card.Text>
              <span
                style={{
                  border: "1px solid blue",
                  paddingtop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                  gap: "10px",
                  alignContent: "center",
                  color: "#0f2f76",
                }}
              >
                DETAILS
              </span>
            </Card.Body>
            <div className="card-position-top">

              <p style={{color: "white"}} > 31 <br />Dec </p>
              {/* <p style={{color: "white"}}>Dec</p> */}
            </div>
          </Card>
          <Card className="card-item card-position">
            <Card.Body className="pt-5">
              <Card.Title className="pt-3" style={{color: "#0f2f76" }}>Thanks Giving Service</Card.Title>
              <Card.Text>
                <p style={{color: "#0f2f76"}}>  Sunday, 8:30am - 9:30pm</p>
                {/* <p>  Sunday, 9:30am - 11:30am</p> */}
              </Card.Text>
              <span
                style={{
                  border: "1px solid blue",
                  paddingtop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                  gap: "10px",
                  alignContent: "center",
                  color: "#0f2f76",
                  
                }}
              >
                DETAILS
              </span>
              {/* <Button variant="primary">Details</Button> */}
            </Card.Body>
            <div className="card-position-top">

              <p style={{color: "white"}} >05 <br />Jan</p>
              {/* <p style={{color: "white"}}>Dec</p> */}
            </div>
          </Card>
          <Card className="card-item card-position">
            {/* <Card.Header>Featured</Card.Header> */}
            <Card.Body className="pt-5">
              <Card.Title className="pt-3" style={{color: "#0f2f76"}}>Cross Over Service 2024</Card.Title>
              <Card.Text>
              <p style={{color: "#0f2f76" }}>Friday, 6pm </p>
              </Card.Text>
              <span
                style={{
                  border: "1px solid blue",
                  paddingtop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                  gap: "10px",
                  alignContent: "center",
                  color: "#0f2f76",
                }}
              >
                DETAILS
              </span>
            </Card.Body>
            <div className="card-position-top">

              <p style={{color: "white"}} >20 <br />Jan</p>
              {/* <p style={{color: "white"}}>Dec</p> */}
            </div>    
          </Card>
        </div>
        <div className="text-center">

        <button className="view">VIEW MORE</button>
        </div>
      </div>
        <div className='imag es'>
      </div>
      <section className="row justify-content-center align-items-center text-center">
        <div className="col-md-4 img-1">
          <p style={{color: "white"}}>WE INTERCEDE </p>
          <h2 style={{color: "white"}}>Prayer</h2>
          <h2 style={{color: "white"}}>Request</h2>
          <button className="btn btn-primary btn1">LET'S PRAY</button>
        </div>
        <div className="col-md-4 img-2">
        <p style={{color: "white"}}>WE COUNT OUR BLESSINGS </p>
          <h2 style={{color: "white"}} >Share</h2>
          <h2 style={{color: "white"}}>Testimonies</h2>
          <button className="btn btn-primary btn2">SHARE WITH US</button>
        </div>
        <div className="col-md-4 img-3">
        <p style={{color: "white"}}>FIND PURPOSE</p>
          <h2 style={{color: "white"}} >Join Our</h2>
          <h2 style={{color: "white"}}>Work Force</h2>
          <button className="btn btn-primary btn3">START HERE</button>
        </div>
      </section>
    </>
  );
};

export default NewHome;
