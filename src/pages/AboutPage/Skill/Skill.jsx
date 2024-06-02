import React, { useState } from "react";
import "./Skill.css";
import htmlImg from "../../../assets/img/icon/html.png";
import cssImg from "../../../assets/img/icon/css.png";
import jsImg from "../../../assets/img/icon/js.png";
import tsImg from "../../../assets/img/icon/ts.png";
import reactImg from "../../../assets/img/icon/react.png";

import nodeImg from "../../../assets/img/icon/nodejs.png";
import firebaseImg from "../../../assets/img/icon/firebase.png";
import mongoImg from "../../../assets/img/icon/mongo.png";

import githubImg from "../../../assets/img/icon/githubb.png";
import notionImg from "../../../assets/img/icon/notion.png";
import figmaImg from "../../../assets/img/icon/figma.png";
import adobexdImg from "../../../assets/img/icon/xd.png";
import photoshopImg from "../../../assets/img/icon/photoshop.png";

function Skill({ category }) {
  const [listHover, setListHover] = useState("frontArr");
  const [skillHover, setSkillHover] = useState(0);
  let frnotArr = [
    {
      img: htmlImg,
      ex: "전반적인 html 요소의 구조 및 태그를 이해하고 있습니다.",
    },
    {
      img: cssImg,
      ex: "포지셔닝과 flex, grid, 애니메이션 등등 css를 이해하고 이용할 수 있으며 반응형 웹을 만들 수 있습니다.",
    },
    {
      img: jsImg,
      ex: (
        <span>
          포트폴리오와 프로젝트를 js와 react로 만들었기 때문에 dom과 이벤트 등
          <br />
          여러 인터페이스를 만드는 데 자신이 있으며 프로그래밍의 중심으로
          사용하고 있습니다.
        </span>
      ),
    },
    {
      img: tsImg,
      ex: "프로젝트 Music App Web을 통해 사용하는 방법과 운영을 이해하고 있습니다.",
    },
    {
      img: reactImg,
      ex: (
        <span>
          포트폴리오와 프로젝트를 js와 react로 만들었기 때문에 dom과 이벤트 등
          <br />
          여러 인터페이스를 만드는 데 자신이 있으며 프로그래밍의 중심으로
          사용하고 있습니다.
        </span>
      ),
    },
  ];
  let backArr = [
    {
      img: nodeImg,
      ex: "node.js를 완벽하게 이해하고 있지는 않지만, 여러 프로젝트를 통해 이해하고 사용하고 있습니다.",
    },
    {
      img: firebaseImg,
      ex: "firebase와 mongo는 프로젝트를 만들며 데이터베이스로 사용하였습니다.",
    },
    {
      img: mongoImg,
      ex: "firebase와 mongo는 프로젝트를 만들며 데이터베이스로 사용하였습니다..",
    },
  ];

  let toolArr = [
    {
      img: githubImg,
      ex: "github를 통해 프로젝트와 포트폴리오를 관리하고 있으며 github page를 이용하여 사이트 배포를 하고 있습니다.",
    },
    {
      img: notionImg,
      ex: "웹 개발을 공부하며 정보를 정리하고 저장하는 기능으로 사용하고 있습니다.",
    },
    {
      img: figmaImg,
      ex: "웹 디자인을 할 때 사용하며 전반적인 포지셔닝, 그리고 인터랙션을 사용할 수 있습니다.",
    },
    {
      img: adobexdImg,
      ex: "웹 디자인을 할 때 사용하며 전반적인 포지셔닝, 그리고 인터랙션을 사용할 수 있습니다.",
    },
    {
      img: photoshopImg,
      ex: "웹 개발의 필요한 img, png와 평소에도 디자인, 사진을 편집하며 사용하고 있습니다.",
    },
  ];

  return (
    <div className={`skill-container ${category === "Skill" ? "active" : ""}`}>
      <ul className="skill-box">
        <li
          onMouseOver={() => setListHover("frontArr")}
          onMouseOut={() => setListHover("")}
        >
          <div>
            {frnotArr.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onMouseOver={() => setSkillHover(idx)}
                  onMouseOut={() => setSkillHover(null)}
                  style={{ transitionDelay: `${0.1 * idx + 1}s` }}
                >
                  <img src={item.img} alt={item.img} />
                </div>
              );
            })}
          </div>
          <button>Frontend</button>
        </li>
        <li
          onMouseOver={() => setListHover("backArr")}
          onMouseOut={() => setListHover("")}
        >
          <div>
            {backArr.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onMouseOver={() => setSkillHover(idx)}
                  onMouseOut={() => setSkillHover(null)}
                  style={{ transitionDelay: `${0.1 * idx + 1}s` }}
                >
                  <img src={item.img} alt={item.img} />
                </div>
              );
            })}
          </div>
          <button>Backtend</button>
        </li>
        <li
          onMouseOver={() => setListHover("toolArr")}
          onMouseOut={() => setListHover("")}
        >
          <div>
            {toolArr.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onMouseOver={() => setSkillHover(idx)}
                  onMouseOut={() => setSkillHover(null)}
                  style={{ transitionDelay: `${0.1 * idx + 1}s` }}
                >
                  <img src={item.img} alt={item.img} />
                </div>
              );
            })}
          </div>
          <button>Tool</button>
        </li>
      </ul>
      <div
        className="skill-exBox"
        style={listHover === "frontArr" ? { opacity: 1 } : { opacity: 0 }}
      >
        {frnotArr.map((item, idx) => {
          return (
            <p
              key={idx}
              style={skillHover === idx ? { opacity: 1 } : { opacity: 0 }}
            >
              {item.ex}
            </p>
          );
        })}
      </div>
      <div
        className="skill-exBox"
        style={listHover === "backArr" ? { opacity: 1 } : { opacity: 0 }}
      >
        {backArr.map((item, idx) => {
          return (
            <p
              key={idx}
              style={skillHover === idx ? { opacity: 1 } : { opacity: 0 }}
            >
              {item.ex}
            </p>
          );
        })}
      </div>
      <div
        className="skill-exBox"
        style={listHover === "toolArr" ? { opacity: 1 } : { opacity: 0 }}
      >
        {toolArr.map((item, idx) => {
          return (
            <p
              key={idx}
              style={skillHover === idx ? { opacity: 1 } : { opacity: 0 }}
            >
              {item.ex}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Skill;
