import React, { useEffect, useRef } from "react";
import "./MainPage.css";
import flower from "../../assets/img/flower-shadow.png";
function MainPage({ selectCategory }) {
  const mainRef = useRef(null);
  const name = ["K", "I", "M", "Y", "O", "U", "N", "G", "I", "L"];

  useEffect(() => {
    if (selectCategory == "main") {
      mainRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectCategory]);

  return (
    <div className="mainpage-container" ref={mainRef}>
      <div className="mainpage-flower">
        <img src={flower} alt="flower" />
      </div>
      <div className="mainpage-titleBox">
        <ul>
          {name.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
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
