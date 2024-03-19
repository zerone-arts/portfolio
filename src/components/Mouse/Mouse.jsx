import React, { useState } from "react";
import "./Mouse.css";
function Mouse({ xy, hover, click, setClick }) {
  return (
    <div
      className="mouse-container"
      style={
        hover === ""
          ? {
              left: xy.x,
              top: xy.y,
              transform: `translate(-50%, -50%) scale(1) `,
            }
          : {
              left: xy.x,
              top: xy.y,
              transform: `translate(-50%, -50%) scale(1.5)`,
            }
      }
    >
      <div
        className="mouse-background"
        style={
          click
            ? { border: `9px solid #af7340` }
            : { border: `0px solid #af7340` }
        }
      ></div>
    </div>
  );
}

export default Mouse;
