import React, { useEffect, useRef } from "react";
import "./MainPage.css";

function MainPage({ selectCategory }) {
  const mainRef = useRef(null);

  useEffect(() => {
    if (selectCategory == "main") {
      mainRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectCategory]);
  return (
    <div className="mainpage-container" ref={mainRef}>
      <div className="mainpage-titleBox">
        <div>KIMYOUNGIL</div>
        <div>Frontend Developer</div>
      </div>
      <div className="mainpage-zeroone-box">
        <div>zero</div>
        <div></div>
        <div>one</div>
      </div>
    </div>
  );
}

export default MainPage;
