import React, { forwardRef, useEffect, useRef, useState } from "react";
import "./AboutPage.css";
import ProfileComponet from "./ProfileComponet/ProfileComponet";
import SkillComponent from "./SkillComponent/SkillComponent";
import Personality from "./Personality/Personality";
import Iam from "./Iam/Iam";

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
      <Iam category={category} />

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
