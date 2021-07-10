import React from "react";
import "./Home.scss";
import duck from "../assets/duck.jpg";

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="image-container">
          <img src={duck} className="image" />
        </div>
        <div className="welcome-msg-container">
          <h1 className="welcome-msg">Welcome</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
