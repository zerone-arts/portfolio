import React, { useCallback, useEffect, useState } from "react";
import "./MusicAppWeb.css";
import musicImg1 from "../../../assets/img/mawImg1.png";
import musicImg2 from "../../../assets/img/mawImg2.png";
import musicImg3 from "../../../assets/img/mawImg3.png";
import musicImgCase from "../../../assets/img/mawImgCase.png";
import Guide from "./Guide/Guide";
import useInterval from "../../../assets/utils/interval";
import { useDispatch } from "react-redux";
import { setHover, setLink } from "../../../redux/reducers/uiSlice";

function MusicAppWeb({ selectBtn }) {
  const [localHover, setLocalHover] = useState("");

  const dispatch = useDispatch();

  const toggleLocalHover = useCallback(() => {
    setLocalHover((prev) => (prev === "" ? "hover" : ""));
  }, []);

  useInterval(
    () => {
      if (selectBtn === 3) {
        toggleLocalHover();
      }
    },
    localHover === "" ? 3000 : 5000
  );

  return (
    <div className="musicAppWeb-container">
      <div className="music-TitleBox">Music</div>

      <div
        className="musicAppWeb-Wrapper"
        onMouseOver={() => setLocalHover("hover")}
        onMouseLeave={() => setLocalHover("")}
      >
        <div className={`musicAppWeb-Imgbox ${localHover}`}>
          <img src={musicImgCase} alt="musicImg1" />
          <img src={musicImg3} alt="musicImg3" />
          <img src={musicImg2} alt="musicImg2" />
          <img src={musicImg1} alt="musicImg1" />
        </div>
      </div>
      <div className="music-textBox">
        <p>
          Music App Web은 REACT와 TYPESCRIPT를 이용하여 만든 Music Player입니다.
        </p>
      </div>
      <Guide hover={localHover} />

      <div className="musicAppWeb-linkBox">
        <button>
          <a
            href="https://zerone-musicappweb.vercel.app/"
            target="_blank"
            onMouseEnter={() => {
              dispatch(setHover("MusicAppWeb"));
              dispatch(setLink(true));
            }}
            onMouseLeave={() => {
              dispatch(setHover(""));
              dispatch(setLink(false));
            }}
          >
            <p>Homepage </p>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </a>
        </button>
        <button
          onMouseEnter={() => {
            dispatch(setLink(true));
          }}
          onMouseLeave={() => {
            dispatch(setLink(false));
          }}
        >
          <a href="https://github.com/zerone-arts/musicAppWeb" target="_blank">
            <p>Github </p>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </a>
        </button>
      </div>
    </div>
  );
}

export default MusicAppWeb;
