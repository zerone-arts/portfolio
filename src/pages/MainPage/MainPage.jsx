import React, { forwardRef, useEffect, useRef, useState } from "react";
import "./MainPage.css";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import { useSelector } from "react-redux";

const MainPage = forwardRef((props, mainRef) => {
  const [shadowActive, setShadowActive] = useState(false);
  const spansRef = useRef([]);
  const selectCategory = useSelector((state) => state.category.selectCategory);
  const location = useSelector((state) => state.ui.location);
  let email = "zerone-@naver.com";
  let portfolio = "PORTFOLIO";

  useEffect(() => {
    if (selectCategory == "main") {
      mainRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectCategory]);

  useEffect(() => {
    const lastSpan = spansRef.current[spansRef.current.length - 1];

    if (lastSpan) {
      // 마지막 span의 애니메이션이 끝나면 실행
      lastSpan.addEventListener("animationend", () => {
        setShadowActive(true);
      });
    }

    return () => {
      if (lastSpan) {
        lastSpan.removeEventListener("animationend", () => {
          setShadowActive(true);
        });
      }
    };
  }, []);

  return (
    <div className="mainpage-container" ref={mainRef}>
      <div
        className={`mainpage-shadowTextBox ${
          shadowActive ? "shadowActive" : ""
        }`}
      >
        <div className="mainpage-shadowText">
          {portfolio.split("").map((item, idx) => {
            return (
              <span
                key={idx}
                ref={(el) => (spansRef.current[idx] = el)}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
      {location === "main" && (
        <div
          className={`mainpage-line ${shadowActive ? "shadowActive" : ""}`}
        ></div>
      )}

      <div className="mainpage-bottomBox">
        {email.split("").map((item, idx) => {
          return (
            <span
              key={idx}
              style={
                location !== "main"
                  ? {
                      bottom: `10px`,
                      opacity: 0,
                      transitionDelay: `${Math.random()}s`,
                    }
                  : { bottom: `0px`, opacity: 1, transitionDelay: `0s` }
              }
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
});

export default MainPage;
