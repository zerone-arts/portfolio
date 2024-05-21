import React, { forwardRef, useEffect, useRef, useState } from "react";
import "./AboutPage.css";

import Personality from "./Personality/Personality";
import Iam from "./Iam/Iam";
import Profile from "./Profile/Profile";
import Skill from "./Skill/Skill";

const AboutPage = forwardRef(({ selectCategory, location }, aboutRef) => {
  const [category, setCategory] = useState("Iam");

  let categoryArr = ["Iam", "Profile", "Skill", "Personality"];

  useEffect(() => {
    if (selectCategory === "about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectCategory]);

  return (
    <div className={`aboutpage-container ${location}`} ref={aboutRef}>
      <div className="aboutpage-box">
        <Iam category={category} />

        <Profile category={category} />
        <Skill category={category} />
        <Personality category={category} />
      </div>

      <div className={`aboutpage-btnBox ${category}`}>
        {categoryArr.map((item, idx) => {
          return (
            <button
              style={
                category === item
                  ? { color: `rgb(251, 251, 251)` }
                  : { color: `rgb(95, 95, 95)` }
              }
              onClick={() => {
                setCategory(item);
              }}
            >
              {item.split("").map((item, idx) => {
                return (
                  <span style={{ transitionDelay: `${idx * 0.08}s` }}>
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
});

export default AboutPage;
