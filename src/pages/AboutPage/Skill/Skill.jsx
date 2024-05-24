import React from "react";
import "./Skill.css";
function Skill({ category }) {
  return (
    <div className={`skill-container ${category === "Skill" ? "active" : ""}`}>
      <div className="test"></div>
    </div>
  );
}

export default Skill;
