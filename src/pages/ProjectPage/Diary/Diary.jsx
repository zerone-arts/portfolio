import React, { useState } from "react";
import "./Diary.css";
import personImg from "../../../assets/img/person.png";
import person2Img from "../../../assets/img/person2.png";
import { useDispatch } from "react-redux";
import { setHover, setLink } from "../../../redux/reducers/uiSlice";

let monthText =
  "January February March April May June August September October November December January February March April May June August September October November December ";
let monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "August",
];
function Diary({}) {
  const dispatch = useDispatch();
  return (
    <div className={`diary-container`}>
      <div className="diary-wrapper left">
        <div className="diary-light"></div>
        <div className="diary-title">
          <p>Web and App</p>
          <h2>one word.</h2>
        </div>
        <div className="diary-exText">
          <p>
            one word는 캘린더를 기반으로 한 다이어리로, <br />
            하루를 사진과 텍스트로 감각적인 포스터처럼 <br />
            디자인하고 저장할 수 있습니다.
          </p>
        </div>
        <button className="diary-linkBtn">
          <a
            href="https://zerone-oneword.vercel.app/"
            target="_blank"
            onMouseEnter={() => {
              dispatch(setHover("Diary"));
              dispatch(setLink(true));
            }}
            onMouseLeave={() => {
              dispatch(setHover(""));
              dispatch(setLink(false));
            }}
          >
            view more
          </a>
        </button>
        <div className="diary-circle">
          <div className="diary-text">
            <p>
              {monthArr.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    style={{ transform: `rotate(${idx * 20}deg)` }}
                  >
                    {item}
                  </span>
                );
              })}
            </p>
          </div>
        </div>

        <div className="diary-circle-line">
          <div className="diary-line">
            <p>
              {monthArr.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    style={{ transform: `rotate(${idx * 20}deg)` }}
                  ></span>
                );
              })}
            </p>
          </div>
        </div>
        <div className="diary-imgBox">
          <img src={personImg} alt="person" />
        </div>
      </div>
      <div className="diary-wrapper right">
        <div className="diary-light"></div>
        <div className="diary-title">
          <p>Web and App</p>
          <h2>one word.</h2>
        </div>
        <div className="diary-exText">
          <p>one word는 React를 기반으로 개발되었으며,</p>
          <p>인증 및 데이터베이스 관리에는 Firebase를 사용하였습니다.</p>
        </div>
        <button
          className="diary-linkBtn"
          onMouseEnter={() => {
            dispatch(setLink(true));
          }}
          onMouseLeave={() => {
            dispatch(setLink(false));
          }}
        >
          <a href="https://github.com/zerone-arts/diray" target="_blank">
            GitHub
          </a>
        </button>
        <div className="diary-circle">
          <div className="diary-text">
            <p>
              {monthArr.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    style={{ transform: `rotate(${idx * 20}deg)` }}
                  >
                    {item}
                  </span>
                );
              })}
            </p>
          </div>
        </div>

        <div className="diary-circle-line">
          <div className="diary-line">
            <p>
              {monthArr.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    style={{ transform: `rotate(${idx * 20}deg)` }}
                  ></span>
                );
              })}
            </p>
          </div>
        </div>
        <div className="diary-imgBox">
          <img src={person2Img} alt="person" />
        </div>
      </div>
    </div>
  );
}

export default Diary;
