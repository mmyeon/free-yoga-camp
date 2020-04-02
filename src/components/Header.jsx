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
        <div id="sideNav">
          <ul>
            <li>상체를 위한 요가</li>
          </ul>
          <div onClick={handleClick}>닫기</div>
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
