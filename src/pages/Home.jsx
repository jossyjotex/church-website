import React from "react";
import "./Styles/Home.css";
import { CiStreamOn } from "react-icons/ci";
import IMG from "../assets/IMG_2391 4.png";
import image from "../assets/image 5.png"
import { PiCalendarDots } from "react-icons/pi";


const Home = () => {
  return (
    <div>
      <div className="container home-wrapper py-4 background">
        <p className="text">
          <h2>
            Raising Generational <hr />
            Leaders With Power!
          </h2>
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "25%",
            justifyContent: "flex-start",
            textAlign: "left",
            position: "absolute",
          }}
        >
          <button>I AM NEW HERE</button>
          <button>
            <CiStreamOn />
            LIVE STREAM
          </button>
        </div>
        <div className="container">
          <img src={IMG} alt=" transparent image" className="image" />
        </div>
      </div>
      <div>
        <h3 className="heading">Welcome To Neighborhood International Christian Centre</h3>
        <p className="pg">
          “If you do decide to make NICC your spiritual family, there are a few
          things I would like to share with you based on God’s plan and covenant
          with us. We are a spiritual family and your integration into us
          guarantees full restoration and transformation of your life. God sets
          people into this church simply to be able to access their lives with
          the fullness of His Spirit.”
        </p>
        <h6 className="pastor">-Pastor Lanre Saba</h6>
      </div>
      <div className="container py-4 background2">
        <p>
          <h4 className="event"> <PiCalendarDots />
          Upcoming Events</h4>
        </p>

      </div>
    </div>
  );
};

export default Home;
