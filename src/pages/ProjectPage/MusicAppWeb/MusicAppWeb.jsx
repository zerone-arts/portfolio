import React, { useEffect, useState } from "react";
import "./MusicAppWeb.css";
import musicImg1 from "../../../assets/img/mawImg1.png";
import musicImg2 from "../../../assets/img/mawImg2.png";
import musicImg3 from "../../../assets/img/mawImg3.png";
import musicImgCase from "../../../assets/img/mawImgCase.png";
import Guide from "./Guide/Guide";
import useInterval from "../../../assets/utils/interval";

function MusicAppWeb({ bgColorWhiteHandle, selectBtn }) {
  const [hover, setHover] = useState("");

  useInterval(
    () => {
      // Your custom logic here
      hover === "" ? setHover("hover") : setHover("");
    },
    hover === "" ? 3000 : 5000
  );

  return (
    <div
      className="musicAppWeb-container"
      onMouseOver={() => bgColorWhiteHandle("white")}
      onMouseLeave={() => bgColorWhiteHandle("")}
    >
      <div className="music-TitleBox">Music</div>

      <div
        className="musicAppWeb-Wrapper"
        // onMouseOver={() => setHover("hover")}
        // onMouseLeave={() => setHover("")}
      >
        <div className={`musicAppWeb-Imgbox ${hover}`}>
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
      <Guide hover={hover} />

      <div className="musicAppWeb-linkBox">
        <button>
          <ion-icon name="logo-github"></ion-icon>
        </button>
        <button>
          <ion-icon name="home-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}

export default MusicAppWeb;
