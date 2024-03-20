import React, { useEffect, useRef } from "react";
import "./MainPage.css";
import flower from "../../assets/img/flower-shadow.png";
function MainPage({ selectCategory, setBlackPercent }) {
  const mainRef = useRef(null);
  const name = ["K", "I", "M", "Y", "O", "U", "N", "G", "I", "L"];
  const onScroll = () => {
    let bottom = mainRef.current?.getBoundingClientRect().bottom;

    setBlackPercent((window.scrollY / bottom) * 50);
  };

  useEffect(() => {
    if (selectCategory == "main") {
      mainRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectCategory]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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
