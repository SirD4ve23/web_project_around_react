import React from "react";
import logo from "../../images/headerlogo.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Web Logo" />
    </header>
  );
};

export default Header;
