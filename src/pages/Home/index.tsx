import React from "react";
import "./Home.scss";
import { useDispatch } from "react-redux";
import duck from "../../assets/duck.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../../components";
import { useHistory } from "react-router";
import Actions from "../../store/actions";

export const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleGetStartedClick = () => {
    dispatch(Actions.showLoader());
    history.push("/fill");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="image-container">
          <img src={duck} className="image" alt="duck" />
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
          <Button
            text={`Get Started`}
            rightIcon={<FaArrowRight />}
            onClick={handleGetStartedClick}
          />
        </div>
      </div>
    </div>
  );
};
