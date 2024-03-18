import React from "react";
import "./MenuPage.css";
function MenuPage({ toggle, setToggle, setSelectCategory }) {
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
          >
            ABOUT ME
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              menuSelectHandle("project");
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
          >
            CONTACT
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MenuPage;
