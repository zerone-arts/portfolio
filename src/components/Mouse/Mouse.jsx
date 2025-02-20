import React, { useEffect, useRef, useState } from "react";
import "./Mouse.css";

import Tools from "../../assets/img/webImg/ToolsWeb.png";
import Diary from "../../assets/img/webImg/oneWordWeb.png";
import ArtWeb from "../../assets/img/webImg/ArtWeb.png";
import Effects from "../../assets/img/webImg/EffectsWeb.png";
import MusicWebApp from "../../assets/img/webImg/MusicWebApp.png";
import { useDispatch, useSelector } from "react-redux";

const viewArr = [
  { name: "Tools", img: Tools },
  { name: "Diary", img: Diary },
  { name: "ArtWeb", img: ArtWeb },
  { name: "Effects", img: Effects },
  { name: "MusicAppWeb", img: MusicWebApp },
];

function Mouse({ xy, click, color }) {
  const mouseRef = useRef(null);
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.ui.toggle);
  const hover = useSelector((state) => state.ui.hover);
  const link = useSelector((state) => state.ui.link);
  useEffect(() => {
    if (hover == "") {
      mouseRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
    } else if (
      hover === "project-diary-main" ||
      hover === "Tools" ||
      hover === "Diary" ||
      hover === "ArtWeb" ||
      hover === "Effects" ||
      hover === "MusicAppWeb" ||
      hover === "footer"
    ) {
      mouseRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
    } else {
      mouseRef.current.style.transform = `translate(-50%, -50%) scale(1.5)`;
    }

    if (color === "white") {
      mouseRef.current.style.border = "1px solid white";
    } else {
      mouseRef.current.style.border = "1px solid black";

      if (toggle === "active") {
        mouseRef.current.style.border = "1px solid white";
      } else {
        mouseRef.current.style.border = "1px solid black";
      }
    }

    if (link) {
      mouseRef.current.style.border = "none";
    }
  }, [hover, color, toggle, link]);

  useEffect(() => {
    if (click) {
      mouseRef.current.style.transform = `translate(-50%, -50%) scale(0.8)`;
    } else {
      mouseRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
    }
  }, [click]);

  return (
    <div
      className={`mouse-container `}
      ref={mouseRef}
      style={{
        left: `${xy.x}px`,
        top: `${xy.y}px`,
        transform: `translate(-50%, -50%) scale(1) `,
      }}
    >
      <ul className="mouse-WebView">
        {viewArr.map((item, idx) => (
          <li key={idx}>
            <img
              src={item.img}
              alt={item.name}
              style={
                hover === item.name
                  ? { opacity: 1, width: "200px" }
                  : { opacity: 0, width: "0%" }
              }
            />
          </li>
        ))}
      </ul>
      <div
        className="mouse-link"
        style={link ? { opacity: 1 } : { opacity: 0 }}
      >
        <span style={color === "white" ? { color: "white" } : {}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Mouse;
