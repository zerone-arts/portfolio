import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
function Header({
  toggle,
  setToggle,
  setSelectCategory,
  setHover,
  color,
  bgColor,
  location,
}) {
  const mouseOverHandle = () => {
    setHover("main");
  };

  const mouseOutHandle = () => {
    setHover("");
  };

  const menuSelectHandle = (item) => {
    setSelectCategory(item);
    setTimeout(() => {
      setSelectCategory("");
    }, 1000);
  };

  console.log(location);

  return (
    <div className={`header-container ${bgColor === "" ? "" : "white"}`}>
      <div
        className={`header-logo ${toggle} ${
          location === "project" || location === "contact" ? "" : color
        } `}
      >
        <button
          onClick={() => {
            menuSelectHandle("main");
          }}
          onMouseOver={mouseOverHandle}
          onMouseLeave={mouseOutHandle}
        >
          ZER<span>ONE.</span>
        </button>
      </div>
      <ul className={`header-list ${toggle} ${location}`}>
        <li
          className="header-line"
          onClick={() => {
            menuSelectHandle("main");
          }}
          onMouseOver={() => {
            setHover("main");
          }}
          onMouseLeave={() => {
            setHover("");
          }}
        >
          <div className="header-line-object"></div>
        </li>
        <li className="header-about">
          <button
            onClick={() => {
              menuSelectHandle("about");
            }}
            onMouseOver={() => {
              setHover("about");
            }}
            onMouseLeave={() => {
              setHover("");
            }}
          >
            ABOUT
          </button>
        </li>
        <li className="header-project">
          <button
            onClick={() => {
              menuSelectHandle("project");
            }}
            onMouseOver={() => {
              setHover("project");
            }}
            onMouseLeave={() => {
              setHover("");
            }}
          >
            PROJECT
          </button>
        </li>
        <li className="header-contact">
          <button
            onClick={() => {
              menuSelectHandle("contact");
            }}
            onMouseOver={() => {
              setHover("contact");
            }}
            onMouseLeave={() => {
              setHover("");
            }}
          >
            CONTACT
          </button>
        </li>
      </ul>
      <button
        className="header-menu-bar"
        onClick={() => (toggle === "" ? setToggle("active") : setToggle(""))}
        onMouseOver={() => {
          setHover("menu");
        }}
        onMouseLeave={() => {
          setHover("");
        }}
      >
        <div className={`header-menu-bar-top ${toggle}`}></div>
        <div className={`header-menu-bar-center ${toggle}`}></div>
        <div className={`header-menu-bar-bottom ${toggle}`}></div>
      </button>
    </div>
  );
}

export default Header;
