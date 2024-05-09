import React, { useState } from "react";
import "./MusicAppWeb.css";
import musicImg1 from "../../../assets/img/iphoneMusic-1-reflect.png";
import musicImg2 from "../../../assets/img/iphoneMusic-2.png";
function MusicAppWeb({ bgColorWhiteHandle }) {
  const [count, setCount] = useState("");
  return (
    <div
      className="musicAppWeb-container"
      onMouseOver={() => bgColorWhiteHandle("white")}
      onMouseLeave={() => bgColorWhiteHandle("")}
    >
      <div
        className="musicAppWeb-Wrapper"
        style={count === "" ? { left: `0%` } : { left: `-100%` }}
      >
        <div className="musicAppWeb-rightbox">
          <img src={musicImg1} alt="musicImg1" />1
        </div>
        <div className={`musicAppWeb-leftbox ${count}`}>
          <img src={musicImg2} alt="musicImg2" />2
        </div>
      </div>

      <button
        onClick={() => (count === "change" ? setCount("") : setCount("change"))}
      >
        h2
      </button>
    </div>
  );
}

export default MusicAppWeb;
