import React, { useEffect, useRef, useState } from "react";
import "./ProjectPage.css";
import Diary from "./Diary/Diary";
import ArtWeb from "./ArtWeb/ArtWeb";
import Effects from "./Effects/Effects";

function ProjectPage({ selectCategory, setHover }) {
  const [selectBtn, setSelectBtn] = useState(0);
  const projectRef = useRef(null);

  useEffect(() => {
    if (selectCategory == "project") {
      projectRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectCategory]);
  return (
    <div className="projectpage-container" ref={projectRef}>
      <div className="projectpage-title">Project</div>
      <div
        className="projectpage-wrapper"
        style={{ left: `-${selectBtn * 100}%` }}
      >
        <div
          className="projectpage-project one"
          style={selectBtn === 0 ? { opacity: 1 } : { opacity: 0 }}
        >
          <Diary setHover={setHover} selectBtn={selectBtn} />
        </div>
        <div
          className="projectpage-project two"
          style={selectBtn === 1 ? { opacity: 1 } : { opacity: 0 }}
        >
          <ArtWeb />
        </div>
        <div
          className="projectpage-project three"
          style={selectBtn === 2 ? { opacity: 1 } : { opacity: 0 }}
        >
          <Effects />
        </div>
      </div>
      <ul className="projectpage-buttonBox">
        <li
          className={`projectpage-button ${selectBtn === 0 ? "active" : ""}`}
          onClick={() => {
            setSelectBtn(0);
          }}
        ></li>
        <li
          className={`projectpage-button ${selectBtn === 1 ? "active" : ""}`}
          onClick={() => {
            setSelectBtn(1);
          }}
        ></li>
        <li
          className={`projectpage-button ${selectBtn === 2 ? "active" : ""}`}
          onClick={() => {
            setSelectBtn(2);
          }}
        ></li>
      </ul>
      <div className="projectpage-projectNameBox">
        <ul
          className="projectpage-projectNameBox-ul"
          style={{ top: `${selectBtn * -25}px` }}
        >
          <li
            className="projectpage-projectNameBox-list"
            style={selectBtn === 0 ? { opacity: 1 } : { opacity: 0 }}
          >
            Diary Web - <span>one word</span>
          </li>
          <li
            className="projectpage-projectNameBox-list"
            style={selectBtn === 1 ? { opacity: 1 } : { opacity: 0 }}
          >
            Web Design - <span>Art Web</span>
          </li>
          <li
            className="projectpage-projectNameBox-list"
            style={selectBtn === 2 ? { opacity: 1 } : { opacity: 0 }}
          >
            Interaction - <span>Effects</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectPage;
