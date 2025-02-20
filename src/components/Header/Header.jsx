import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectCategory } from "../../redux/reducers/categorySlice";
import { setHover, setToggle } from "../../redux/reducers/uiSlice";
function Header({ color }) {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.ui.toggle);
  const location = useSelector((state) => state.ui.location);
  const bgColor = useSelector((state) => state.ui.bgColor);

  const mouseOverHandle = () => {
    dispatch(setHover("main"));
  };

  const mouseOutHandle = () => {
    dispatch(setHover(""));
  };

  const menuSelectHandle = (item) => {
    dispatch(setSelectCategory(item));
    setTimeout(() => {
      dispatch(setSelectCategory(""));
    }, 1000);
  };

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
            dispatch(setHover("main"));
          }}
          onMouseLeave={() => {
            dispatch(setHover(""));
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
              dispatch(setHover("about"));
            }}
            onMouseLeave={() => {
              dispatch(setHover(""));
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
              dispatch(setHover("project"));
            }}
            onMouseLeave={() => {
              dispatch(setHover(""));
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
              dispatch(setHover("contact"));
            }}
            onMouseLeave={() => {
              dispatch(setHover(""));
            }}
          >
            CONTACT
          </button>
        </li>
      </ul>
      <button
        className="header-menu-bar"
        onClick={() =>
          toggle === ""
            ? dispatch(setToggle("active"))
            : dispatch(setToggle(""))
        }
        onMouseOver={() => {
          dispatch(setHover("menu"));
        }}
        onMouseLeave={() => {
          dispatch(setHover(""));
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
