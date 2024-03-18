import React, { useEffect, useState } from "react";
import "./Header.css";
function Header({ toggle, setToggle, setSelectCategory }) {
  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

  const menuSelectHandle = (item) => {
    setSelectCategory(item);
    setTimeout(() => {
      setSelectCategory("");
    }, 1000);
  };

  return (
    <div className="header-container">
      <div className={`header-logo`}>
        <button
          style={toggle ? { color: `rgb(195, 195, 195)` } : {}}
          onClick={() => {
            menuSelectHandle("main");
          }}
        >
          zerone .
        </button>
      </div>
      <ul className={`header-list ${toggle}`}>
        <li
          className="header-line"
          onClick={() => {
            menuSelectHandle("main");
          }}
        >
          <div className="header-line-object"></div>
        </li>
        <li className="header-about">
          <button
            onClick={() => {
              menuSelectHandle("about");
            }}
          >
            about me
          </button>
        </li>
        <li className="header-project">
          <button
            onClick={() => {
              menuSelectHandle("project");
            }}
          >
            project
          </button>
        </li>
        <li className="header-contact">
          <button
            onClick={() => {
              menuSelectHandle("contact");
            }}
          >
            contact
          </button>
        </li>
      </ul>
      <button
        className="header-menu-bar"
        onClick={() => (toggle === "" ? setToggle("active") : setToggle(""))}
      >
        {/* <ion-icon name="menu-outline"></ion-icon> */}
        <div className={`header-menu-bar-top ${toggle}`}></div>
        <div className={`header-menu-bar-center ${toggle}`}></div>
        <div className={`header-menu-bar-bottom ${toggle}`}></div>
      </button>
      <div className="header-menu"></div>
    </div>
  );
}

export default Header;
