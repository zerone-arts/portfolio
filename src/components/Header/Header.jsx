import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
function Header({
  toggle,
  setToggle,
  setSelectCategory,
  setHover,
  bgBlackPercent,
}) {
  const [logoColor, setLogoColor] = useState("");
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

  useEffect(() => {
    if (bgBlackPercent <= 40 && bgBlackPercent >= 0) {
      setLogoColor("");
    } else {
      setLogoColor("active");
    }
  }, [bgBlackPercent]);

  return (
    <div className="header-container">
      <div className={`header-logo ${toggle} ${logoColor}`}>
        <button
          onClick={() => {
            menuSelectHandle("main");
          }}
          onMouseOver={mouseOverHandle}
          onMouseLeave={mouseOutHandle}
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
            about me
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
            project
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
            contact
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
