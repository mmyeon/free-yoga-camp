import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isOpenedSidenav, setIsOpenedSidenav] = useState(false);

  function handleClick() {
    setIsOpenedSidenav(!isOpenedSidenav);
  }

  return (
    <div>
      <div className="top-header">
        <div className="top-header icons">
          <i className="fas fa-bars nav-bars" onClick={handleClick}></i>
          <i className="fas fa-wind logo"></i>
        </div>
      </div>
      <div className="sidenav-container">
        {isOpenedSidenav && (
          <div className="sidenav">
            <ul>
              <li>상체를 위한 요가</li>
              <li>상체를 위한 요가</li>
              <li>상체를 위한 요가</li>
              <li>상체를 위한 요가</li>
            </ul>
          </div>
        )}
        <div className="sidenav overlay"></div>
      </div>
    </div>
  );
};

export default Header;
