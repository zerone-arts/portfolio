import React, { useState } from "react";
import "./Footer.css";
function Footer({ setSelectCategory, setHover }) {
  const menuSelectHandle = (item) => {
    setSelectCategory(item);
    setTimeout(() => {
      setSelectCategory("");
    }, 1000);
  };
  return (
    <div className="footer-container">
      <ul
        className="footer-wrapper"
        onMouseOver={() => {
          setHover("footer");
        }}
        onMouseLeave={() => {
          setHover("");
        }}
      >
        <li className="footer-wrapper-list">
          <h2>012 Porfolio</h2>
        </li>
        <li className="footer-wrapper-list">
          <div className="footer-categoryBox">
            <button onClick={() => menuSelectHandle("main")}>Main</button>
            <button onClick={() => menuSelectHandle("about")}>About</button>
            <button onClick={() => menuSelectHandle("project")}>Project</button>
            <button onClick={() => menuSelectHandle("contact")}>Contact</button>
          </div>
          <div className="footer-copyBox">
            <p>Ⓒ 2024 zerone.arts All rights reserved.</p>
          </div>
        </li>
        <li className="footer-wrapper-list">
          <ul className="footer-textBox">
            <li>010-8006-5105</li>
            <li>zerone.arts@gmail.com</li>
            <li>Jeju-si, Jeju-do, Republic of Korea</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
