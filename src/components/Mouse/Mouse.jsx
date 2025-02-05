import React, { useEffect, useRef, useState } from "react";
import "./Mouse.css";

import Tools from "../../assets/img/webImg/ToolsWeb.png";
import Diary from "../../assets/img/webImg/oneWordWeb.png";
import ArtWeb from "../../assets/img/webImg/ArtWeb.png";
import Effects from "../../assets/img/webImg/EffectsWeb.png";
import MusicWebApp from "../../assets/img/webImg/MusicWebApp.png";

const viewArr = [
  { name: "Tools", img: Tools },
  { name: "Diary", img: Diary },
  { name: "ArtWeb", img: ArtWeb },
  { name: "Effects", img: Effects },
  { name: "MusicAppWeb", img: MusicWebApp },
];

function Mouse({ xy, hover, click, color, toggle }) {
  const mouseRef = useRef(null);

  useEffect(() => {
    if (hover == "") {
      mouseRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
    } else if (
      hover === "project-diary-main" ||
      hover === "Tools" ||
      hover === "Diary" ||
      hover === "ArtWeb" ||
      hover === "Effects" ||
      hover === "MusicAppWeb"
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
  }, [hover, color, toggle]);

  useEffect(() => {
    if (click) {
      mouseRef.current.style.transform = `translate(-50%, -50%) scale(0.8)`;
    } else {
      mouseRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
    }
  }, [click]);

  return (
    <div
      className={`mouse-container`}
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
    </div>
  );
}

export default Mouse;
