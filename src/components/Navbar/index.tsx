import React from "react";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { Button } from "..";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store/reducers";
import Actions from "../../store/actions";

export const Navbar: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: IState) => state.authReducer.authenticated
  );

  const handleLogout = () => {
    dispatch(Actions.logout());
  };

  return (
    <nav className="navbar">
      <Link className="link" to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <FaBars className="bars-icon" />
      {isAuthenticated ? (
        <div className="nav-menu">
          <Link className="link" to="/check-data">
            Check Data
          </Link>
        </div>
      ) : (
        <></>
      )}
      <div className="nav-menu mr">
        {isAuthenticated ? (
          <Button text={`Log out`} onClick={handleLogout} />
        ) : (
          <>
            <Link className="link" to="/login">
              Log In
            </Link>
            <Button text={`Sign Up`} onClick={() => history.push("/signup")} />
          </>
        )}
      </div>
    </nav>
  );
};
