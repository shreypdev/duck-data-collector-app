import React from "react";
import "./NotFound.scss";
import { useHistory } from "react-router-dom";
import { Button } from "../../components";

export const NotFound: React.FC = () => {
  const history = useHistory();

  return (
    <div className="not-found-container">
      <h1>404 - Not Found!</h1>
      <br />
      <Button text="Home" onClick={() => history.replace("/")} />
    </div>
  );
};
