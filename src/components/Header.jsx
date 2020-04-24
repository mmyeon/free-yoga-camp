import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpenedSideNav, setIsOpenedSideNav] = useState(false);

  return (
    <div className="header-container">
      <div className={`side-nav-overlay ${isOpenedSideNav ? "active" : ""}`}>
        <div className={`side-nav ${isOpenedSideNav ? "active" : ""}`}>
          <i className="fas fa-times close-btn" onClick={handleClick}></i>
          {isOpenedSideNav && (
            <ul>
              <li>상체를 위한 요가</li>
              <li>상체를 위한 요가</li>
              <li>상체를 위한 요가</li>
              <li>상체를 위한 요가</li>
            </ul>
          )}
        </div>
      </div>
      <div className="header">
        <div className="icon-wrapper">
          <div className="icons">
            <i className="fas fa-bars nav-bars" onClick={handleClick}></i>
            <Link to="/">
              <i className="fas fa-wind logo"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  function handleClick() {
    setIsOpenedSideNav(!isOpenedSideNav);
    // console.log("ghcnf");
  }
};

export default Header;
