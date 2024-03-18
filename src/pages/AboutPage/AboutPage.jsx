import React, { useEffect, useRef } from "react";
import "./AboutPage.css";

function AboutPage({ selectCategory }) {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (selectCategory == "about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectCategory]);
  return (
    <div className="aboutpage-container" ref={aboutRef}>
      About me
    </div>
  );
}

export default AboutPage;
