import React from "react";
import "./Header.css";
function Header(props) {
  return (
    <div className="header-container">
      <div className="header-logo">zerone .</div>
      <ul>
        <li className="header-line">
          <div className="header-line-object"></div>
        </li>
        <li className="header-about">about me</li>
        <li className="header-project">project</li>
        <li className="header-contact">contact</li>
      </ul>
      <div className="header-menu">
        <button></button>
      </div>
    </div>
  );
}

export default Header;
