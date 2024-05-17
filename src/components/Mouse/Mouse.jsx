import React, { useEffect, useRef, useState } from "react";
import "./Mouse.css";
function Mouse({ xy, hover, click, color }) {
  const mouseRef = useRef(null);

  useEffect(() => {
    if (hover == "") {
      mouseRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
    } else if (hover === "project-diary-main") {
      mouseRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
    } else {
      mouseRef.current.style.transform = `translate(-50%, -50%) scale(1.5)`;
    }

    if (color === "white") {
      mouseRef.current.style.border = "1px solid white";
    } else {
      mouseRef.current.style.border = "1px solid black";
    }
  }, [hover, color]);

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
    ></div>
  );
}

export default Mouse;
