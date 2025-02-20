import React from "react";
import "./MenuPage.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectCategory } from "../../redux/reducers/categorySlice";
import { setHover, setToggle } from "../../redux/reducers/uiSlice";
function MenuPage({}) {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.ui.toggle);
  const menuSelectHandle = (item) => {
    dispatch(setSelectCategory(item));
    setTimeout(() => {
      dispatch(setSelectCategory(""));
    }, 1000);
  };

  return (
    <div className={`menu-container ${toggle}`}>
      <div className={`menu-background ${toggle}`}></div>
      <ul>
        <li>
          <button
            onClick={() => {
              menuSelectHandle("about");
              dispatch(setToggle(""));
            }}
            onMouseOver={() => {
              dispatch(setHover("about"));
            }}
            onMouseLeave={() => {
              dispatch(setHover(""));
            }}
          >
            ABOUT ME
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              menuSelectHandle("project");
              dispatch(setToggle(""));
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
        <li>
          <button
            onClick={() => {
              menuSelectHandle("contact");
              dispatch(setToggle(""));
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
    </div>
  );
}

export default MenuPage;
