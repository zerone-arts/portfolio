import React, { useEffect, useRef, useState } from "react";
import "./MainPage.css";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";

function MainPage({ selectCategory }) {
  const mainRef = useRef(null);
  const [cursor, setCursor] = useState(`rgba(0,0,0,1)`);
  const [opacity, setOpacity] = useState(1);

  console.log();
  let email = "zerone-@naver.com";

  const handleScroll = () => {
    let scroll = mainRef.current?.getBoundingClientRect().bottom;

    if (window.scrollY >= scroll / 2) {
      setOpacity(0);
    } else {
      setOpacity(1);
    }
  };

  useEffect(() => {
    if (selectCategory == "main") {
      mainRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectCategory]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  return (
    <div className="mainpage-container" ref={mainRef}>
      <div className="mainpage-textBox">
        <span>
          <Typewriter
            words={[`Hi, I'm Kim Young il.`, `I'm a Front-End Developer.`]}
            loop={2}
            onLoopDone={() => {
              setCursor(`rgba(0,0,0,0)`);
            }}
          />
          <Cursor cursorStyle={`|`} cursorColor={cursor} />
        </span>
      </div>
      <div className="mainpage-bottomBox">
        {email.split("").map((item, idx) => {
          return (
            <span
              key={idx}
              style={
                opacity === 0
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
}

export default MainPage;
