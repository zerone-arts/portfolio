import React, { useState } from "react";
import "./Skill.css";
import htmlImg from "../../../assets/img/icon/html.png";
import cssImg from "../../../assets/img/icon/css.png";
import jsImg from "../../../assets/img/icon/js.png";
import tsImg from "../../../assets/img/icon/ts.png";
import reactImg from "../../../assets/img/icon/react.png";
import nextjsImg from "../../../assets/img/icon/nextjs.png";
import tailwindImg from "../../../assets/img/icon/tailwind.png";

import nodeImg from "../../../assets/img/icon/nodejs.png";
import firebaseImg from "../../../assets/img/icon/firebase.png";
import mongoImg from "../../../assets/img/icon/mongo.png";
import supabaseImg from "../../../assets/img/icon/supabase.png";

import githubImg from "../../../assets/img/icon/githubb.png";
import notionImg from "../../../assets/img/icon/notion.png";
import figmaImg from "../../../assets/img/icon/figma.png";
import adobexdImg from "../../../assets/img/icon/xd.png";
import photoshopImg from "../../../assets/img/icon/photoshop.png";
import vercelIcon from "../../../assets/img/icon/vercel.png";

let frontArr = [
  {
    img: htmlImg,
    ex: "전반적인 html 요소의 구조 및 태그를 이해하고 있습니다.",
  },
  {
    img: cssImg,
    ex: "CSS로 레이아웃, 포지셔닝, 반응형 웹을 설계하고 애니메이션과 다양한 스타일을 적용할 수 있습니다.",
  },
  {
    img: jsImg,
    ex: (
      <span>
        JavaScript로 동적인 웹 페이지와 인터페이스를 구현하며, DOM과 이벤트
        처리에 능숙합니다.
        <br />
        포트폴리오와 여러 프로젝트에서 핵심적으로 사용하고 있습니다.
      </span>
    ),
  },
  {
    img: tsImg,
    ex: "TypeScript를 사용해 더욱 안전하고 확장 가능한 코드베이스를 구축하는 방법을 배웠습니다.",
  },
  {
    img: reactImg,
    ex: (
      <span>
        React로 컴포넌트 기반의 사용자 인터페이스를 구축하며, <br />
        상태 관리와 라우팅을 효율적으로 다룹니다. 프로젝트에서 핵심적인
        프론트엔드 기술로 사용하고 있습니다.
      </span>
    ),
  },
  {
    img: nextjsImg,
    ex: (
      <span>
        Next.js App Router를 사용하여 프로젝트의 라우팅을 효율적으로 관리하고,{" "}
        <br />
        동적 라우팅과 서버 사이드 렌더링을 활용하여 성능을 최적화했습니다.{" "}
        <br />
        이를 통해 SEO와 빠른 페이지 로딩 속도를 구현하였습니다.
      </span>
    ),
  },
  {
    img: tailwindImg,
    ex: (
      <span>
        Tailwind CSS를 사용하여 유연하고 빠른 스타일링을 구현하였으며, <br />
        클래스 기반의 스타일링으로 코드 유지보수성을 높였습니다.
        <br />
        프로젝트에서 효율적인 반응형 디자인과 인터페이스를 설계하는 데
        사용했습니다.
      </span>
    ),
  },
];
let backArr = [
  {
    img: nodeImg,
    ex: (
      <span>
        프론트엔드 개발을 준비하면서 Node.js를 가끔 사용해 본 경험이 있습니다.
        <br />
        깊은 이해는 부족하지만, 몇 가지 프로젝트에서 서버 사이드 처리를 위해
        사용해 본 적이 있습니다.
      </span>
    ),
  },
  {
    img: firebaseImg,
    ex: (
      <span>
        Firebase의 실시간 데이터베이스와 인증 시스템을 사용하여 <br />
        사용자의 데이터 저장 및 인증 과정을 간소화의 장점을 살려 적용
        하였습니다.
      </span>
    ),
  },
  {
    img: mongoImg,
    ex: "MongoDb는 유연한 데이터 구조와 뛰어난 확장성을 제공합니다.그렇기 때문에 프로젝트에서 MongoDB를 사용하였습니다.",
  },
  {
    img: supabaseImg,
    ex: (
      <span>
        Supabase를 활용하여 메모, 캘린더 일정, 배경화면 이미지, 그리고 사용자
        인증을 처리했습니다. <br />
        Supabase의 실시간 데이터베이스와 인증 기능을 사용하여 효율적인 데이터
        관리와 <br />
        원활한 사용자 경험을 구현할 수 있었습니다.
      </span>
    ),
  },
];

let toolArr = [
  {
    img: githubImg,
    ex: (
      <span>
        Github를 통해 프로젝트와 포트폴리오를 관리하고 있으며 <br /> GitHub
        Pages를 이용하여 사이트 배포를 하고 있습니다.
      </span>
    ),
  },
  {
    img: notionImg,
    ex: "Notion을 사용하여 웹 개발 학습 자료를 정리하면서 사용하고 있습니다.",
  },
  {
    img: figmaImg,
    ex: (
      <span>
        Figma를 활용해 웹 디자인 및 인터페이스 프로토타입을 제작하며, <br />
        전반적인 포지셔닝과 인터랙션을 설계할 수 있습니다.
      </span>
    ),
  },
  {
    img: adobexdImg,
    ex: (
      <span>
        Adobe XD를 사용하여 웹 디자인과 사용자 경험을 개선하는 인터랙티브한
        프로토타입을 제작할 수 있습니다.
      </span>
    ),
  },
  {
    img: photoshopImg,
    ex: (
      <span>
        Photoshop을 이용해 웹 개발에 필요한 이미지와 그래픽을 디자인하고, 사진
        편집 등등을 만들 수 있습니다.
      </span>
    ),
  },
  {
    img: null, // Vercel 이미지 추가
    ex: (
      <span>
        Vercel을 사용해 프로젝트를 빠르게 배포하고, 안정적인 웹 서비스를 제공할
        수 있습니다. <br />
        이를 통해 빠른 반응 속도와 효율적인 관리가 가능합니다.
      </span>
    ),
  },
];
function Skill({ category }) {
  const [listHover, setListHover] = useState("frontArr");
  const [skillHover, setSkillHover] = useState(0);

  return (
    <div className={`skill-container ${category === "Skill" ? "active" : ""}`}>
      <ul className="skill-box">
        <li
          onMouseOver={() => setListHover("frontArr")}
          onMouseOut={() => setListHover("")}
        >
          <div className="">
            {frontArr.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onMouseOver={() => setSkillHover(idx)}
                  onMouseOut={() => setSkillHover(null)}
                  style={{ transitionDelay: `${0.1 * idx + 1}s` }}
                >
                  <img
                    src={item.img}
                    alt={item.img}
                    className={`${
                      listHover === "frontArr" && skillHover === idx
                        ? "openSkill"
                        : ""
                    } `}
                  />
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
                  {idx === 5 ? (
                    <div className="vercelIcon">
                      <img src={vercelIcon} alt="vercel" />
                    </div>
                  ) : (
                    <img src={item.img} alt={item.img} />
                  )}
                </div>
              );
            })}
          </div>
          <button>Tool & etc</button>
        </li>
      </ul>
      <div
        className="skill-exBox"
        style={listHover === "frontArr" ? { opacity: 1 } : { opacity: 0 }}
      >
        {frontArr.map((item, idx) => {
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
