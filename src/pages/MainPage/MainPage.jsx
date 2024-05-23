import React, { forwardRef, useEffect, useRef, useState } from "react";
import "./MainPage.css";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";

const MainPage = forwardRef(({ selectCategory, location }, mainRef) => {
  const [typeWriter, setTypeWriter] = useState("");

  let email = "zerone-@naver.com";

  const handleType = (count) => {
    count >= 2 ? setTypeWriter("hide") : setTypeWriter("");
  };

  useEffect(() => {
    if (selectCategory == "main") {
      mainRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectCategory]);

  return (
    <div className="mainpage-container" ref={mainRef}>
      <div className={`mainpage-textBox ${typeWriter}`}>
        <span
          style={
            location !== "main"
              ? {
                  bottom: `30px`,
                  opacity: 0,
                }
              : { bottom: `0px`, opacity: 1 }
          }
        >
          <Typewriter
            words={[
              `Hi, I'm Kim Young il.`,
              `I will be a Front-End Developer !`,
            ]}
            loop={2}
            onType={handleType}
          />
          <Cursor cursorStyle={`|`} cursorColor="black" />
        </span>
      </div>
      <div className={`mainpage-shadowTextBox ${typeWriter}`}>
        <div className="mainpage-shadowText">ZERONE</div>
      </div>
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
