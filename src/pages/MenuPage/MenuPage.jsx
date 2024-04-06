import React from "react";
import "./MenuPage.css";
function MenuPage({ toggle, setHover, setSelectCategory, setToggle }) {
  const menuSelectHandle = (item) => {
    setSelectCategory(item);
    setTimeout(() => {
      setSelectCategory("");
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
              setToggle("");
            }}
            onMouseOver={() => {
              setHover("about");
            }}
            onMouseLeave={() => {
              setHover("");
            }}
          >
            ABOUT ME
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              menuSelectHandle("project");
              setToggle("");
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
        <li>
          <button
            onClick={() => {
              menuSelectHandle("contact");
              setToggle("");
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
    </div>
  );
}

export default MenuPage;
