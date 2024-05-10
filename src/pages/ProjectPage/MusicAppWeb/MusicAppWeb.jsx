import React, { useEffect, useState } from "react";
import "./MusicAppWeb.css";
import musicImg1 from "../../../assets/img/mawImg1.png";
import musicImg2 from "../../../assets/img/mawImg2.png";
import musicImg3 from "../../../assets/img/mawImg3.png";
import musicImgCase from "../../../assets/img/mawImgCase.png";

function MusicAppWeb({ bgColorWhiteHandle, selectBtn }) {
  const [count, setCount] = useState("");

  let textTitle = "Music App Web";
  let textExp1 = "REACT와 TYPESCRIPT를 이용하여 만든 MUSIC PLAYER입니다.";
  let textExp2 = "UI UX를 여러 테마로 나눠 디자인하였습니다.";

  useEffect(() => {
    if (selectBtn === 3) {
      console.log("test");
    }
  }, [selectBtn]);

  return (
    <div
      className="musicAppWeb-container"
      // onMouseOver={() => bgColorWhiteHandle("white")}
      // onMouseLeave={() => bgColorWhiteHandle("")}
    >
      <div
        className={`musicAppWeb-textBox ${count} ${
          selectBtn === 3 ? "active" : ""
        }`}
      >
        <p>
          {textTitle.split("").map((item, idx) => {
            return (
              <span
                key={idx}
                style={
                  selectBtn === 3
                    ? { transitionDelay: `${idx * 0.06}s` }
                    : { transitionDelay: `${0}s` }
                }
              >
                {item}
              </span>
            );
          })}
        </p>
        <p>
          {textExp1.split("").map((item, idx) => {
            return (
              <span
                key={idx}
                style={
                  selectBtn === 3
                    ? { transitionDelay: `${idx * 0.05 + 0.65}s` }
                    : { transitionDelay: `${0}s` }
                }
              >
                {item}
              </span>
            );
          })}
        </p>
        <p>
          {textExp2.split("").map((item, idx) => {
            return (
              <span
                key={idx}
                style={
                  selectBtn === 3
                    ? { transitionDelay: `${idx * 0.05 + 2.95}s` }
                    : { transitionDelay: `${0}s` }
                }
              >
                {item}
              </span>
            );
          })}
        </p>
      </div>
      <div className="musicAppWeb-Wrapper">
        <div className="musicAppWeb-Imgbox">
          <img src={musicImgCase} alt="musicImg1" />
          <img src={musicImg3} alt="musicImg3" />
          <img src={musicImg2} alt="musicImg2" />
          <img src={musicImg1} alt="musicImg1" />
        </div>
      </div>
    </div>
  );
}

export default MusicAppWeb;
