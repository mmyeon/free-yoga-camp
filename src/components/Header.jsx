import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isOpenedSideNav, setIsOpenedSideNav] = useState(false);

  function handleClick() {
    setIsOpenedSideNav(!isOpenedSideNav);
    // console.log("ghcnf");
  }

  return (
    <div>
      {isOpenedSideNav && (
        <div className="side-nav overlay">
          <div className="side-nav">
            <i className="fas fa-times close-btn" onClick={handleClick}></i>
            <ul>
              <li>상체를 위한 요가</li>
              <li>상체를 위한 요가</li>
              <li>상체를 위한 요가</li>
              <li>상체를 위한 요가</li>
            </ul>
          </div>
        </div>
      )}
      <div className="header">
        <div className="container">
          <a onClick={handleClick}>
            <i className="fas fa-bars nav-bars"></i>
          </a>
          <a href="dd">
            <i className="fas fa-wind logo"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
