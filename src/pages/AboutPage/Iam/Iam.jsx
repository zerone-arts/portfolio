import React, { useState } from "react";
import "./Iam.css";
function Iam({ category }) {
  let textH2 = `" 디자인 ･ 인터랙션 만드는 것을 좋아하는 개발자 "`;
  let textP1 = "저는 그래픽, 로고, 일러스트 등등 디자인과 아트를 좋아하고";
  let textP2 = "인터랙션에 관심이 많은 김영일이라고 합니다.";
  return (
    <div className={`iam-container ${category === "Iam" ? "active" : ""}`}>
      <div className="iam-animationWrapper">
        <div
          className={`iam-animationBox ${category === "Iam" ? "" : "change"}`}
        >
          <span className="iam-object object1"></span>
          <span className="iam-object object2"></span>
          <span className="iam-object object3"></span>
          <span className="iam-object object4"></span>
          <span className="iam-object object5"></span>
          <span className="iam-object object6"></span>
          <span className="iam-object object7"></span>
          <span className="iam-object object8"></span>
          <span className="iam-object object9"></span>
          <span className="iam-object object10"></span>
          <span className="iam-object object11"></span>
          <span className="iam-object object12"></span>
          <span className="iam-object object13"></span>
          <span className="iam-object object14"></span>
          <span className="iam-object object15"></span>
          <span className="iam-object object16"></span>
          <span className="iam-object object17"></span>
          <span className="iam-object object18"></span>
          <span className="iam-object object19"></span>
          <span className="iam-object object20"></span>
          <span className="iam-object object21"></span>
          <span className="iam-object object22"></span>
          <span className="iam-object object23"></span>
          <span className="iam-object object24"></span>
          <span className="iam-object object25"></span>
          <span className="iam-object object26"></span>
          <span className="iam-object object27"></span>
          <span className="iam-object object28"></span>
          <span className="iam-object object29"></span>
        </div>
      </div>
      <div className={`iam-textBox ${category === "Iam" ? "active" : ""}`}>
        <h2>
          {textH2.split("").map((item, idx) => {
            return (
              <span
                key={idx}
                style={
                  category === "Iam"
                    ? { transitionDelay: `${idx * 0.05}s` }
                    : { transitionDelay: `${idx * 0.02}s` }
                }
              >
                {item}
              </span>
            );
          })}
        </h2>
        <p>
          {textP1.split("").map((item, idx) => {
            return (
              <span
                key={idx}
                style={
                  category === "Iam"
                    ? { transitionDelay: `${idx * 0.05 + 0.5}s` }
                    : { transitionDelay: `${idx * 0.02 + 0.1}s` }
                }
              >
                {item}
              </span>
            );
          })}
        </p>
        <p>
          {textP2.split("").map((item, idx) => {
            return (
              <span
                key={idx}
                style={
                  category === "Iam"
                    ? { transitionDelay: `${idx * 0.05 + 1}s` }
                    : { transitionDelay: `${idx * 0.02 + 0.3}s` }
                }
              >
                {item}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default Iam;
