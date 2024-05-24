import React, { forwardRef, useEffect, useRef, useState } from "react";
import "./AboutPage.css";

import Personality from "./Personality/Personality";
import Iam from "./Iam/Iam";
import Profile from "./Profile/Profile";
import Skill from "./Skill/Skill";

const AboutPage = forwardRef(
  ({ selectCategory, location, handleBgColor }, aboutRef) => {
    const [category, setCategory] = useState("Iam");
    const [color, setColor] = useState("white");

    let categoryArr = ["Iam", "Profile", "Skill", "Personality"];

    useEffect(() => {
      if (location !== "about") {
        setCategory("Iam");
        setColor("white");
      }
    }, [location]);

    useEffect(() => {
      if (location === "about") {
        if (category === "Iam") {
          handleBgColor("deepblue");
          setColor("white");
        } else {
          handleBgColor("");
          setColor("black");
        }
      }
    }, [category]);

    useEffect(() => {
      if (selectCategory === "about") {
        aboutRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, [selectCategory]);

    console.log(color);

    return (
      <div className={`aboutpage-container ${location}`} ref={aboutRef}>
        <div className="aboutpage-box">
          <Iam category={category} />

          <Profile category={category} />
          <Skill category={category} />
          <Personality category={category} />
        </div>

        <div className={`aboutpage-btnBox ${category} ${color}`}>
          {categoryArr.map((item, idx) => {
            return (
              <button
                style={
                  category === item
                    ? color === "white"
                      ? { color: `rgb(251, 251, 251)` }
                      : { color: `rgb(0, 0, 0)` }
                    : color === ""
                    ? { color: `rgba(95, 95, 95,1)` }
                    : { color: `rgba(95, 95, 95,0.4)` }
                }
                onClick={() => {
                  setCategory(item);
                }}
                key={idx}
              >
                {item.split("").map((item, idx) => {
                  return (
                    <span
                      style={{ transitionDelay: `${idx * 0.08}s` }}
                      key={idx}
                    >
                      {item}
                    </span>
                  );
                })}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);

export default AboutPage;
