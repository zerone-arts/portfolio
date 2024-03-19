import React from "react";
import "./MenuPage.css";
function MenuPage({ toggle, setHover, setSelectCategory }) {
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
