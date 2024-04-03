import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
import "./Effects.css";
import effectVideo1 from "../../../assets/video/effectVideo1.mov";
import effectVideo2 from "../../../assets/video/effectVideo2.mov";
import effectVideo3 from "../../../assets/video/effectVideo3.mov";
import effectVideo4 from "../../../assets/video/effectVideo4.mov";
import effectVideo5 from "../../../assets/video/effectVideo5.mov";

function Effects({ setSelectBtn }) {
  const videoRefs = useRef({});
  const [videoSlideNum, setVideoSlideNum] = useState(0);
  let videoList = [
    effectVideo1,
    effectVideo2,
    effectVideo3,
    effectVideo4,
    effectVideo5,
  ];

  const btnHandle = () => {
    if (videoSlideNum == 4) {
      setVideoSlideNum(0);
    } else {
      setVideoSlideNum(videoSlideNum + 1);
    }
    console.log("test");
  };

  useEffect(() => {
    videoRefs.current[0].playbackRate = 0.8;
  }, []);

  return (
    <div
      className="effects-container"
      onMouseOver={() => {
        videoRefs.current[videoSlideNum].play();
      }}
      onMouseLeave={() => {
        videoRefs.current[videoSlideNum].pause();
      }}
    >
      <div className="effects-logo">Es.</div>
      <ul className="effects-video-Wrapper">
        {videoList.map((item, idx) => {
          return (
            <li
              key={idx}
              className="effects-video-list"
              style={
                videoSlideNum === idx
                  ? { opacity: 1, transition: "1s" }
                  : { opacity: 0, transition: "none" }
              }
            >
              <video muted loop ref={(ref) => (videoRefs.current[idx] = ref)}>
                <source src={item} type="video/mp4" />
              </video>
            </li>
          );
        })}
      </ul>
      <div className="effects-video-slide-Num">
        <p>
          <span>0{videoSlideNum + 1}</span> / 05
        </p>
      </div>
      <div className="effects-video-btnBox">
        <div className="effects-video-Btn-Wrapper-box">
          {videoList.map((item, idx) => {
            return (
              <button
                onClick={() => {
                  setVideoSlideNum(idx);
                }}
                key={idx}
                style={
                  videoSlideNum === idx
                    ? { border: `1.5px solid white`, backgroundColor: "white" }
                    : { border: `1.5px solid rgba(255,255,255,0.5)` }
                }
              ></button>
            );
          })}
          <ion-icon name="chevron-down-outline" onClick={btnHandle}></ion-icon>
        </div>
      </div>

      <div className="effects-text-Box">
        <h2>Effects.</h2>
        <h3>Interation & animation</h3>
        <p>
          css Animation , Interaction , Slide , Clone Coding, Canvas 등 공부를
          하며 만들었던 작은 작업들을 모아둔 사이트입니다.
        </p>
      </div>

      <a
        className="effects-link-Box"
        href="https://zerone-arts.github.io/effects/"
        target="_blank"
      >
        view more <span></span>
      </a>
      <div className="effects-bottom-link-Box">
        <button className="effects-bottom-link-Box-github">
          <a href="https://github.com/zerone-arts/effects" target="_blank">
            <h4>GitHub</h4>
            <p>repository</p>
          </a>
        </button>
        <button
          className="effects-bottom-link-Box-diary"
          onClick={() => {
            setSelectBtn(0);
          }}
        >
          <h4>Diary</h4>
          <p>view more</p>
        </button>
        <button
          className="effects-bottom-link-Box-artweb"
          onClick={() => {
            setSelectBtn(1);
          }}
        >
          <h4>ArtWeb</h4>
          <p>view more</p>
        </button>
      </div>
    </div>
  );
}

export default Effects;
