import React, { useEffect, useRef, useState } from "react";
import "./Mouse.css";
function Mouse({ xy, hover, click, contactBg }) {
  const mouseRef = useRef(null);

  useEffect(() => {
    if (contactBg === "white") {
      if (hover == "") {
        mouseRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
        mouseRef.current.style.border = "1px solid black";
      } else if (hover === "project-diary-main") {
        mouseRef.current.style.border = "1px solid white";
        mouseRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
      } else {
        mouseRef.current.style.border = "1px solid black";
        mouseRef.current.style.transform = `translate(-50%, -50%) scale(1.5)`;
      }
    } else {
      if (hover == "") {
        mouseRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
        mouseRef.current.style.border = "1px solid white";
      } else if (hover === "project-diary-main") {
        mouseRef.current.style.border = "1px solid black";
        mouseRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
      } else {
        mouseRef.current.style.border = "1px solid white";
        mouseRef.current.style.transform = `translate(-50%, -50%) scale(1.5)`;
      }
    }
  }, [hover]);

  useEffect(() => {
    if (click) {
      mouseRef.current.style.transform = `translate(-50%, -50%) scale(0.8)`;
    } else {
      mouseRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
    }
  }, [click]);

  useEffect(() => {
    if (contactBg === "white") {
      mouseRef.current.style.border = "1px solid black";
    } else {
      mouseRef.current.style.border = "1px solid white";
    }
  }, [contactBg]);

  return (
    <div
      className={`mouse-container ${contactBg}`}
      ref={mouseRef}
      style={{
        left: `${xy.x}px`,
        top: `${xy.y}px`,
        transform: `translate(-50%, -50%) scale(1) `,
      }}
    ></div>
  );
}

export default Mouse;
