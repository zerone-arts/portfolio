import { useState } from "react";
import "./ProjectTools.css";
import { useDispatch } from "react-redux";
import { setHover, setLink } from "../../../redux/reducers/uiSlice";

const TopArr = [
  {
    id: 1,
    name: "Note",
    icon: (
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="Tools-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
          />
        </svg>
      </span>
    ),
    Introduction: (
      <p>
        검색 및 월별 필터링을 통해 메모를 쉽고 <br />
        체계적으로 관리할 수 있는 간편한 디지털 메모장입니다.
      </p>
    ),
  },
  {
    id: 2,
    name: "Calendar",
    icon: (
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="Tools-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
      </span>
    ),
    Introduction: (
      <p>
        일정을 한눈에 관리할 수 있는 앱으로, <br />
        날짜별 할 일과 메모를 손쉽게 정리할 수 있습니다.
      </p>
    ),
  },
];
const CenterArr = [
  {
    id: 1,
    name: "Weather",
    icon: (
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="Tools-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
          />
        </svg>
      </span>
    ),
    Introduction: (
      <p>
        Weather는 간편한 인터페이스로 <br />
        지역별 기온과 현재 날씨, 예보를 확인할 수 있는 <br />
        앱입니다.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tools",
    icon: <p>T</p>,
    Introduction: (
      <p>
        Tools은 일상에서 활용도가 높은 <br />
        다양한 도구를 통합한 스마트 플랫폼입니다.
      </p>
    ),
  },
  {
    id: 3,
    name: "Calculator",
    icon: (
      <span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="Tools-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
            />
          </svg>
        </span>
      </span>
    ),
    Introduction: (
      <p>
        Calculator는 일반 계산과 퍼센트 계산 기능을 제공하여, <br />
        수학적 계산이 필요한 여러 상황에서 편리하게 사용할 수 있도록
        설계되었습니다
      </p>
    ),
  },
];
const BottomArr = [
  {
    id: 1,
    name: "Setting",
    icon: (
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="Tools-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </span>
    ),
    Introduction: (
      <p>
        Tools은 사용자만의 배경 이미지를 설정할 수 있는 <br />
        Light Mode와 어두운 배경의 Dark Mode가 있습니다.
      </p>
    ),
  },
  {
    id: 2,
    name: "Stack",
    icon: (
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="Tools-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
          />
        </svg>
      </span>
    ),
    Introduction: (
      <p>
        검색 및 월별 필터링을 통해 메모를 쉽고 <br />
        체계적으로 관리할 수 있는 간편한 디지털메모장입니다.
      </p>
    ),
  },
];

const StackArr = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Redux",
  "Zustande",
  "next-themes",
  "Supabase",
  "Rest API",
  "Axious",
];

export default function ProjectTools({ handleProjectHover }) {
  const [select, setSelect] = useState("Tools");
  const [guide, setGuide] = useState(true);

  const dispatch = useDispatch();

  const AllToolsArr = [...TopArr, ...CenterArr, ...BottomArr];
  const filteredAllToolsArr = AllToolsArr.map((tool, index) => ({
    ...tool,
    id: index + 1,
  }));

  const selectHandle = (name) => {
    setSelect(name);
    setGuide(false);
  };

  return (
    <div
      className="ProjectTools-container"
      onMouseOver={() => {
        handleProjectHover(true);
      }}
      onMouseLeave={() => {
        handleProjectHover(false);
      }}
    >
      <div className="Tools-cubeBox">
        <div className="Tools-cube">
          <div className="Tools-face Tools-front"></div>
          <div className="Tools-face Tools-left">TOOLS</div>
          <div className="Tools-face Tools-top"></div>
        </div>
      </div>
      <div className="Tools-wrapper Tools-leftBox">
        <div className="Tools-titleBox">
          {filteredAllToolsArr.map((item, index) => {
            return (
              <div key={item.id} className="Tools-title">
                {item.name?.split("").map((char, idx) => {
                  return (
                    <span
                      key={idx}
                      style={
                        item.name === select
                          ? {
                              opacity: 1,
                              transition: "all 2s",
                              transitionDelay: `${idx * 0.1}s`,
                              transitionProperty: "opacity",
                            }
                          : { opacity: 0, transition: "0.5s" }
                      }
                    >
                      {char.toLocaleUpperCase()}
                    </span>
                  );
                })}
              </div>
            );
          })}
          <div className="Tools-subTitle">All-in-One Tools</div>
        </div>
        <div className="Tools-IntroductionWrapper">
          {filteredAllToolsArr.map((item, idx) => {
            return (
              <div
                key={item.id}
                className="Tools-Introduction"
                style={
                  item.name === select
                    ? { opacity: 1, transition: "2s" }
                    : { opacity: 0, transition: "0.5s" }
                }
              >
                {item.name === "Stack" ? (
                  <ul className="Tools-Introduction-Stack">
                    {StackArr.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  item.Introduction
                )}
              </div>
            );
          })}
        </div>
        <div className="Tools-btnBox">
          <button
            className="Tools-btn"
            onMouseEnter={() => {
              dispatch(setHover("Tools"));
              dispatch(setLink(true));
            }}
            onMouseLeave={() => {
              dispatch(setHover(""));
              dispatch(setLink(false));
            }}
          >
            <a href="https://zerone-tools.vercel.app/" target="_blank">
              view more
            </a>
          </button>
          <button
            className="Tools-btn"
            onMouseEnter={() => {
              dispatch(setLink(true));
            }}
            onMouseLeave={() => {
              dispatch(setLink(false));
            }}
          >
            <a href="https://github.com/zerone-arts/Tools" target="_blank">
              GitHub
            </a>
          </button>
        </div>
      </div>
      <div className="Tools-wrapper Tools-rightBox ">
        <div
          className="Tools-hex-wrapper"
          style={
            select === "Note" || select === "Calendar" ? { zIndex: 999 } : {}
          }
        >
          {TopArr.map((item, idx) => {
            return (
              <li key={item.id}>
                <div
                  className="Tools-HexBox"
                  onClick={() => {
                    selectHandle(item.name);
                  }}
                  style={
                    select === "Note" || select === "Calendar"
                      ? { zIndex: 999 }
                      : {}
                  }
                >
                  <div
                    className={`Tools-hex ${
                      item.name === select ? "Tools-hex-selected" : ""
                    }`}
                  ></div>
                  <div
                    className={`Tools-hex Tools-hex-innerBox ${
                      item.name === select
                        ? "Tools-hex-innerBox-select"
                        : "Tools-hex-innerBox-black"
                    }`}
                  >
                    <div
                      className={`Tools-hex-inner ${
                        item.name === select ? "Tools-hex-inner-select" : ""
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div
                    className={`Tools-hex Tools-shadowHex ${
                      select === item.name ? "Tools-shadowHex-visible" : ""
                    }`}
                  ></div>
                </div>
              </li>
            );
          })}
        </div>
        <div
          className="Tools-hex-wrapper"
          style={
            select === "Weather" ||
            select === "Tools" ||
            select === "Calculator"
              ? { zIndex: 999 }
              : {}
          }
        >
          {CenterArr.map((item, idx) => {
            return (
              <li key={item.id}>
                <div
                  className="Tools-HexBox"
                  onClick={() => {
                    selectHandle(item.name);
                  }}
                  style={
                    select === "Weather" ||
                    select === "Tools" ||
                    select === "Calculator"
                      ? { zIndex: 999 }
                      : {}
                  }
                >
                  <div
                    className={`Tools-hex ${
                      item.name === select ? "Tools-hex-selected" : ""
                    }`}
                  ></div>
                  <div
                    className={`Tools-hex Tools-hex-innerBox ${
                      item.name === select
                        ? "Tools-hex-innerBox-select"
                        : "Tools-hex-innerBox-black"
                    }`}
                  >
                    <div
                      className={`Tools-hex-inner ${
                        item.name === select ? "Tools-hex-inner-select" : ""
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div
                    className={`Tools-hex Tools-shadowHex ${
                      select === item.name ? "Tools-shadowHex-visible" : ""
                    }`}
                  ></div>
                </div>
              </li>
            );
          })}
        </div>
        <div
          className="Tools-hex-wrapper"
          style={
            select === "Setting" || select === "Stack" ? { zIndex: 999 } : {}
          }
        >
          {BottomArr.map((item, idx) => {
            return (
              <li key={item.id}>
                <div
                  className="Tools-HexBox"
                  onClick={() => {
                    selectHandle(item.name);
                  }}
                  style={
                    select === "Setting" || select === "Stack"
                      ? { zIndex: 999 }
                      : {}
                  }
                >
                  <div
                    className={`Tools-hex ${
                      item.name === select ? "Tools-hex-selected" : ""
                    }`}
                  ></div>
                  <div
                    className={`Tools-hex Tools-hex-innerBox ${
                      item.name === select
                        ? "Tools-hex-innerBox-select"
                        : "Tools-hex-innerBox-black"
                    }`}
                  >
                    <div
                      className={`Tools-hex-inner ${
                        item.name === select ? "Tools-hex-inner-select" : ""
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div
                    className={`Tools-hex Tools-shadowHex ${
                      select === item.name ? "Tools-shadowHex-visible" : ""
                    }`}
                  ></div>
                </div>
              </li>
            );
          })}
        </div>
        <div
          className="Tools-guideBox"
          style={guide ? { opacity: 0.4 } : { opacity: 0 }}
        >
          click
        </div>
      </div>
    </div>
  );
}
