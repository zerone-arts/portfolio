import React, { useState } from "react";
import "./Iam.css";
function Iam({ category }) {
  let textH2 = `" 디자인 ･ 인터랙션 만드는 것을 좋아하는 개발자 "`;
  let textP1 = "저는 그래픽, 로고, 일러스트 등등 디자인과 아트를 좋아하고";
  let textP2 = "인터랙션에 관심이 많은 김영일이라고 합니다.";

  const animeArr = Array.from({ length: 29 }, (_, i) => i + 1);
  return (
    <div className={`iam-container ${category === "Iam" ? "active" : ""}`}>
      <div className="iam-animationWrapper">
        <div
          className={`iam-animationBox ${category === "Iam" ? "" : "change"}`}
        >
          {animeArr.map((num) => (
            <span key={num} className={`iam-object object${num}`}></span>
          ))}
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
