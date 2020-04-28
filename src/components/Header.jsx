import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import db from "../db";

const Header = () => {
  const [isOpenedSideNav, setIsOpenedSideNav] = useState(false);

  return (
    <div className="header-container">
      <div className={`side-nav-overlay ${isOpenedSideNav ? "active" : ""}`}>
        <div className={`side-nav ${isOpenedSideNav ? "active" : ""}`}>
          <i className="fas fa-times close-btn" onClick={handleClick}></i>
          {isOpenedSideNav && (
            <ul>
              {db.map((item, index) => (
                <Link to={{ pathname: `/${item.id}` }} key={index}>
                  <li onClick={handleClick}>{item.title}</li>
                </Link>
              ))}
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
    window.scrollTo(0, 0);
    // console.log("ghcnf");
  }
};

export default Header;
