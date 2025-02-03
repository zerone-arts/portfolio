import React from "react";
import "./Guide.css";
function Guide({ hover }) {
  let explanationText =
    "music player의 UI UX를 여러 테마로 나누어 구현했습니다.";
  let themeText = "Theme Select Button";

  return (
    <div className={`guide-container ${hover}`}>
      <div className="guide-theme">
        <div className="guide-theme-text">
          <p>
            {themeText.split("").map((item, idx) => {
              return (
                <span
                  key={idx}
                  style={
                    hover === "hover"
                      ? {
                          transitionDelay: `${idx * 0.02 + 1.5}s`,
                        }
                      : { transitionDelay: `${0}s` }
                  }
                >
                  {item}
                </span>
              );
            })}
          </p>
        </div>
      </div>
      <div className={`guide-explanation ${hover}`}>
        <div className="guide-explanation-line-left"></div>
        <div className="guide-explanation-text">
          <p>
            {explanationText.split("").map((item, idx) => {
              return (
                <span
                  key={idx}
                  style={
                    hover === "hover"
                      ? {
                          transitionDelay: `${idx * 0.02 + 1}s`,
                        }
                      : { transitionDelay: `${0}s` }
                  }
                >
                  {item}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Guide;
