import React from "react";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { Button } from "..";

export const Navbar: React.FC = () => {
  const history = useHistory();

  return (
    <nav className="navbar">
      <Link className="link" to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <FaBars className="bars-icon" />
      <div className="nav-menu">
        {/* <Link className='link' to="/add-new-data">Add New Data</Link>
        <Link className='link' to="/services">Check Data</Link> */}
      </div>
      <div className="nav-menu mr">
        <Link className="link" to="/login">
          Log In
        </Link>
        <Button text={`Sign Up`} onClick={() => history.push("/signup")} />
      </div>
    </nav>
  );
};
