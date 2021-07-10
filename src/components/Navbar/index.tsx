import React from "react";
import {
  Nav,
  NavLink,
  Logo,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../../assets/logo.png";

export const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavLink to="/">
        <Logo src={logo} alt="logo" />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/add-new-data">Add New Data</NavLink>
        <NavLink to="/services">Check Data</NavLink>
      </NavMenu>
      <NavMenu>
        <NavLink to="/login">Log In</NavLink>
        <NavBtn>
          <NavBtnLink to="/signup">Sign Up</NavBtnLink>
        </NavBtn>
      </NavMenu>
    </Nav>
  );
};
