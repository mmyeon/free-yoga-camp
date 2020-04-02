import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <a href="dd">
          <i className="fas fa-bars nav-bars"></i>
        </a>
        <a href="dd">
          <i className="fas fa-wind logo"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
