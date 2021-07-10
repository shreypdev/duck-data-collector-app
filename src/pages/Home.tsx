import React, { useEffect } from "react";
import "./Home.scss";
import duck from "../assets/duck.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../components";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { IState } from "../store/reducers";
import firebase from "firebase";

const Home: React.FC = () => {
  const history = useHistory();
  const loader = useSelector((state: IState) => state.loaderReducer);

  useEffect(() => {
    console.log(loader);
    console.log(firebase.auth().currentUser);
  }, []);

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
            onClick={() => history.push("/fill")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
