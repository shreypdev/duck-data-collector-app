import React from "react";
import "./Home.scss";
import duck from "../assets/duck.jpg";
import { FaArrowRight } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="image-container">
          <img src={duck} className="image" />
        </div>
        <div className="welcome-msg-container">
          <div className="welcome-msg">
            <h1>Hey 👋, Welcome!</h1>
            <br />
            <h4>
              We are so happy that you took time to provide some data to us.
              This will help scientist to understand how ducks are being fed in
              parks around the world.
            </h4>
          </div>
          <a href="/path" className="btn">
            Get Started &nbsp; <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
