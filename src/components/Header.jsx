import React from "react";
import "./Header.scss";

const Navigation = () => {
  return (
    <div className="header">
      <div className="header container">
        <i className="fas fa-bars header-icon nav-bars"></i>
        <i className="fas fa-wind header-icon fcc-logo"></i>
      </div>
    </div>
  );
};

export default Navigation;
