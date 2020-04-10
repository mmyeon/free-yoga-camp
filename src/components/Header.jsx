import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <div className="top-header">
        <div className="top-header icons">
          <i className="fas fa-bars nav-bars"></i>
          <i className="fas fa-wind logo"></i>
        </div>
      </div>
      {/* <div className="side-nav container">
        <div className="side-nav">
          <ul>
            <li>상체를 위한 요가</li>
            <li>상체를 위한 요가</li>
            <li>상체를 위한 요가</li>
            <li>상체를 위한 요가</li>
          </ul>
        </div>
        <div className="side-nav overlay"></div>
      </div> */}
    </div>
  );
};

export default Header;
