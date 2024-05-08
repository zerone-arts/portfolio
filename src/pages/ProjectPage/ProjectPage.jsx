import React, { useEffect, useRef, useState } from "react";
import "./ProjectPage.css";
import Diary from "./Diary/Diary";
import ArtWeb from "./ArtWeb/ArtWeb";
import Effects from "./Effects/Effects";
import MusicAppWeb from "./MusicAppWeb/MusicAppWeb";

function ProjectPage({ selectCategory, setHover, bgColorWhiteHandle }) {
  const [selectBtn, setSelectBtn] = useState(0);
  const [resize, setResize] = useState("");
  const projectRef = useRef(null);

  useEffect(() => {
    if (selectCategory == "project") {
      projectRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [selectCategory]);

  return (
    <div className="projectpage-container" ref={projectRef}>
      <div className="projectpage-title">Project</div>
      <div className="projectpage-wrapper">
        <div
          className="projectpage-box"
          style={{ top: `-${selectBtn * 100}%` }}
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
            <Effects setSelectBtn={setSelectBtn} />
          </div>
          <div
            className="projectpage-project four"
            style={selectBtn === 3 ? { opacity: 1 } : { opacity: 0 }}
          >
            <MusicAppWeb bgColorWhiteHandle={bgColorWhiteHandle} />
          </div>
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
        <li
          className={`projectpage-button ${selectBtn === 3 ? "active" : ""}`}
          onClick={() => {
            setSelectBtn(3);
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
          <li
            className="projectpage-projectNameBox-list"
            style={selectBtn === 3 ? { opacity: 1 } : { opacity: 0 }}
          >
            Music Player - <span>MusicAppWeb</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectPage;
