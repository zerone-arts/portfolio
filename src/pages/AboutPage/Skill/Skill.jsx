import React from "react";
import "./Skill.css";
function Skill({ category }) {
  return (
    <div className={`skill-container ${category === "Skill" ? "active" : ""}`}>
      Skill
    </div>
  );
}

export default Skill;
