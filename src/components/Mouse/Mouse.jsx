import React, { useState } from "react";
import "./Mouse.css";
function Mouse({ xy, hover, click }) {
  return (
    <div
      className={`mouse-container `}
      style={
        hover === ""
          ? click
            ? {
                left: `${xy.x}px`,
                top: `${xy.y}px`,
                transform: `translate(-50%, -50%) scale(0.5) `,
              }
            : {
                left: `${xy.x}px`,
                top: `${xy.y}px`,
                transform: `translate(-50%, -50%) scale(1) `,
              }
          : click
          ? {
              left: `${xy.x}px`,
              top: `${xy.y}px`,
              transform: `translate(-50%, -50%) scale(0.9) `,
            }
          : {
              left: `${xy.x}px`,
              top: `${xy.y}px`,
              transform: `translate(-50%, -50%) scale(1.5)`,
            }
      }
    ></div>
  );
}

export default Mouse;
