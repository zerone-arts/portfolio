import React, { useState } from "react";
import "./Diary.css";
import diaryDayBg from "../../../assets/img/day.png";
import calendar1 from "../../../assets/img/calendar1.png";
import calendar2 from "../../../assets/img/calendar2.png";
import diaryMonthBook1 from "../../../assets/img/book2.png";
import diaryMonthBook2 from "../../../assets/img/book3.png";
function Diary({ setHover, selectBtn }) {
  const [explanationHover, setExplanationHover] = useState("");
  const [tagHover, setTagHover] = useState("");
  let date = new Date();
  let month = date.toLocaleString("en-US", { month: "long" });
  let tagList = [
    "dark mode",
    "react",
    "firebase",
    "google login",
    "custom",
    "picture",
    "calendar",
    "diary",
  ];

  return (
    <div className={`diary-container ${selectBtn === 0 ? "active" : ""}`}>
      <div className="diary-header">
        <h2>{month}</h2>
        <h2>Hover your mouse for explanation</h2>
      </div>
      <ul className="diary-listBox">
        <li
          className="diary-main"
          onMouseOver={() => {
            setHover("project-diary-main");
          }}
          onMouseLeave={() => {
            setHover("");
          }}
        >
          <h2>
            <span>D</span>iary,
            <br />
            <span>C</span>alendar
          </h2>
          <h4>one word</h4>
          <div className="diary-main-bottom">
            <button>
              <a href="https://zerone-arts.github.io/diary/" target="_blank">
                VIEW MORE
              </a>
            </button>
            <a
              href="https://github.com/zerone-arts/diary"
              target="_black"
              className="diary-main-bottom-textBox"
            >
              <p className="diary-main-bottom-text">
                <span>GitHub</span>
              </p>
              <p className="diary-main-bottom-text">Repository</p>
            </a>
          </div>
        </li>
        <li className="diary-day">
          <div className="diary-day-bg">
            <img src={diaryDayBg} alt="diaryDayBg" />
          </div>
          <div className="diary-day-text">
            Pictures and <br />
            one words of the past day.
          </div>
          <div className="diary-day-explanation">
            one word 웹 사이트는 다이어리 형태의 웹사이트 입니다. one word는
            사진과 한마디의 텍스트를 이용하여 <br />
            오늘 하루를 앨범이나 잡지처럼 꾸며보자는 생각에 프로젝트를
            시작하였습니다.
          </div>
        </li>
        <li className="diary-month">
          <div className="diary-month-bgBox">
            <h2>month</h2>
            <p>" 조금은 다르게 "</p>
          </div>
          <p className="diary-month-title">
            month's <br />
            story and title.
          </p>
          <p className="diary-month-year">2024</p>
          <div className="diary-month-explanation">
            하루를 사진과 텍스트 한마디를 이용하여 잡지처럼 꾸미는 것이라면
            한달은 책처럼 제목을 달아 이야기를 만든다는 생각을 넣어봤습니다.
          </div>
        </li>
        <li
          className={`diary-explanation ${explanationHover}`}
          onMouseOver={() => {
            setExplanationHover("hover");
          }}
          onMouseLeave={() => {
            setExplanationHover("");
          }}
        >
          <div className="diary-explanation-imgBox">
            <img src={calendar1} alt="calendar" />
            <img src={calendar2} alt="calendar" />
          </div>
          <div className="diary-explantation-tagTitle">{tagHover}</div>
          <ul className="diary-explanation-tagBox">
            {tagList.map((item, idx) => {
              return (
                <li
                  key={idx}
                  onMouseOver={() => {
                    setTagHover(item);
                  }}
                  onMouseLeave={() => {
                    setTagHover("");
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Diary;
