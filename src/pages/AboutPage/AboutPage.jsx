import React, { useEffect, useRef, useState } from "react";
import "./AboutPage.css";
import ProfileComponet from "./ProfileComponet/ProfileComponet";
import SkillComponent from "./SkillComponent/SkillComponent";
import Personality from "./Personality/Personality";

function AboutPage({ selectCategory, setHover }) {
  const [select, setSelect] = useState("i am");
  const boxRef = useRef(null);
  const aboutRef = useRef(null);
  const list = ["i am", "profile", "skill", "personality"];

  const categoryHandle = (e, item) => {
    setSelect(item);

    if (item == "skill") {
      boxRef.current.style.left = "-100%";
    } else if (item == "personality") {
      boxRef.current.style.left = "-200%";
    } else {
      boxRef.current.style.left = "0%";
    }
  };

  useEffect(() => {
    if (selectCategory === "about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectCategory]);

  return (
    <div className="aboutpage-container" ref={aboutRef}>
      <div className="aboutpage-box" ref={boxRef}>
        <ProfileComponet select={select} />
        <SkillComponent />
        <Personality select={select} />
      </div>

      <ul className="aboutpage-category">
        {list.map((item, idx) => {
          return (
            <li
              key={idx}
              className="aboutpage-list"
              style={
                item === select
                  ? { color: `#af7340` }
                  : { color: `rgba(255,255,255,0.5)` }
              }
              onClick={(e) => categoryHandle(e, item)}
              onMouseOver={() => setHover(item)}
              onMouseLeave={() => setHover("")}
            >
              {item.toUpperCase()}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AboutPage;
