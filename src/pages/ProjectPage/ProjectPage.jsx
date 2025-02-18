import React, { forwardRef, useEffect, useState } from "react";
import "./ProjectPage.css";

import Diary from "./Diary/Diary";
import ArtWeb from "./ArtWeb/ArtWeb";
import Effects from "./Effects/Effects";
import MusicAppWeb from "./MusicAppWeb/MusicAppWeb";
import ProjectTools from "./ProjectTools/ProjectTools";
import { useSelector } from "react-redux";

const ProjectPage = forwardRef(
  ({ setHover, handleProjectHover, location }, projectRef) => {
    const [selectBtn, setSelectBtn] = useState(0);
    const selectCategory = useSelector(
      (state) => state.category.selectCategory
    );
    useEffect(() => {
      if (selectCategory === "project") {
        projectRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, [selectCategory, projectRef]);

    return (
      <div className="projectpage-container" ref={projectRef}>
        <div className={`projectpage-title ${location}`}>Project</div>
        <div
          className="projectpage-wrapper"
          style={location === "project" ? { opacity: 1 } : { opacity: 0 }}
        >
          <div
            className="projectpage-box"
            style={{ top: `-${selectBtn * 100}%` }}
          >
            <div
              className="projectpage-project one"
              style={selectBtn === 0 ? { opacity: 1 } : { opacity: 0 }}
            >
              <ProjectTools
                setHover={setHover}
                selectBtn={selectBtn}
                handleProjectHover={handleProjectHover}
              />
            </div>
            <div
              className="projectpage-project two"
              style={selectBtn === 1 ? { opacity: 1 } : { opacity: 0 }}
            >
              <Diary setHover={setHover} selectBtn={selectBtn} />
            </div>
            <div
              className="projectpage-project three"
              style={selectBtn === 2 ? { opacity: 1 } : { opacity: 0 }}
            >
              <ArtWeb
                handleProjectHover={handleProjectHover}
                setHover={setHover}
              />
            </div>
            <div
              className="projectpage-project four"
              style={selectBtn === 3 ? { opacity: 1 } : { opacity: 0 }}
            >
              <Effects
                setSelectBtn={setSelectBtn}
                handleProjectHover={handleProjectHover}
                setHover={setHover}
              />
            </div>
            <div
              className="projectpage-project four"
              style={selectBtn === 4 ? { opacity: 1 } : { opacity: 0 }}
            >
              <MusicAppWeb selectBtn={selectBtn} setHover={setHover} />
            </div>
          </div>
        </div>
        <ul className={`projectpage-buttonBox `}>
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
          <li
            className={`projectpage-button ${selectBtn === 4 ? "active" : ""}`}
            onClick={() => {
              setSelectBtn(4);
            }}
          ></li>
        </ul>
        <div className={`projectpage-projectNameBox`}>
          <ul
            className="projectpage-projectNameBox-ul"
            style={{ top: `${selectBtn * -25}px` }}
          >
            <li
              className="projectpage-projectNameBox-list"
              style={selectBtn === 0 ? { opacity: 1 } : { opacity: 0 }}
            >
              All-in-One Tools - <span>Tools</span>
            </li>
            <li
              className="projectpage-projectNameBox-list"
              style={selectBtn === 1 ? { opacity: 1 } : { opacity: 0 }}
            >
              Diary Web - <span>one word</span>
            </li>
            <li
              className="projectpage-projectNameBox-list"
              style={selectBtn === 2 ? { opacity: 1 } : { opacity: 0 }}
            >
              Web Design - <span>Art Web</span>
            </li>
            <li
              className="projectpage-projectNameBox-list"
              style={selectBtn === 3 ? { opacity: 1 } : { opacity: 0 }}
            >
              Interaction - <span>Effects</span>
            </li>
            <li
              className="projectpage-projectNameBox-list"
              style={selectBtn === 4 ? { opacity: 1 } : { opacity: 0 }}
            >
              Music Player - <span>MusicAppWeb</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
);

export default ProjectPage;
