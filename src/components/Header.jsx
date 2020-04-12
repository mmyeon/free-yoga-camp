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
      <div
        className={`side-nav-overlay ${
          isOpenedSideNav ? "overlay-active" : ""
        }`}
      >
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
      {/* // </div> */}
      <div className="header">
        <div className="container">
          <div className="header-icons">
            <i className="fas fa-bars nav-bars" onClick={handleClick}></i>
            <i className="fas fa-wind logo"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
