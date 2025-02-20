import React, { useState } from "react";
import "./ArtWeb.css";
import artImg1 from "../../../assets/img/art1.png";
import artImg2 from "../../../assets/img/art2.png";
import artImg3 from "../../../assets/img/art3.png";
import artImg4 from "../../../assets/img/art4.png";
import { useDispatch } from "react-redux";
import { setHover, setLink } from "../../../redux/reducers/uiSlice";
function ArtWeb({ handleProjectHover }) {
  const [selectList, setSelectList] = useState(0);
  const dispatch = useDispatch();

  const list = [
    {
      img: artImg1,
    },
    {
      img: artImg2,
    },
    {
      img: artImg3,
    },
    {
      img: artImg4,
    },
  ];
  const artwebText = "ART WEB";
  const interactionText = "Interaction";
  const positionText = "Position";
  const designText = "Design & Art";
  const circleText = "Art Web - Project ";
  return (
    <div
      className="artweb-container"
      onMouseOver={() => {
        handleProjectHover(true);
      }}
      onMouseLeave={() => {
        handleProjectHover(false);
      }}
    >
      <div className="artweb-right-wrapper">
        {list.map((item, idx) => {
          return (
            <li
              className={`artweb-right-listBox-list ${
                selectList === idx ? "select" : ""
              }`}
              key={idx}
            >
              <img src={item.img} alt={item.img} />
            </li>
          );
        })}
      </div>
      <div className="artweb-left-wrapper">
        <div className="artweb-left-title">Art Web</div>
        <ul
          className="artweb-left-textWrapper"
          style={{ left: `${selectList * -300}px` }}
        >
          <li style={selectList === 0 ? { opacity: 1 } : { opacity: 0 }}>
            <div className="artweb-left-textBox">
              <h2>
                {artwebText.split("").map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      style={
                        selectList === 0
                          ? {
                              opacity: 1,
                              transitionDelay: `0.${idx + 3}s`,
                            }
                          : { opacity: 0 }
                      }
                    >
                      {item}
                    </p>
                  );
                })}
              </h2>
              <p>
                Art Web은
                <a href="http://nlf.geex-arts.com/" target="_blank">
                  geex-arts
                </a>
                를 클론 코딩하고,
                <br />
                이를 기반으로 제작한 웹사이트입니다.
              </p>
            </div>
          </li>
          <li style={selectList === 1 ? { opacity: 1 } : { opacity: 0 }}>
            <div className="artweb-left-textBox">
              <h2>
                {interactionText.split("").map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      style={
                        selectList === 1
                          ? idx === 10
                            ? {
                                opacity: 1,
                                transitionDelay: `1s`,
                              }
                            : {
                                opacity: 1,
                                transitionDelay: `0.${idx}s`,
                              }
                          : { opacity: 0 }
                      }
                    >
                      {item}
                    </p>
                  );
                })}
              </h2>
              <p>
                오브젝트, 마우스 포인터, 마우스 위치값 등을
                <br />
                활용한 인터랙션과 디자인 요소를 적용하였습니다.
              </p>
            </div>
          </li>
          <li style={selectList === 2 ? { opacity: 1 } : { opacity: 0 }}>
            <div className="artweb-left-textBox">
              <h2>
                {positionText.split("").map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      style={
                        selectList === 2
                          ? {
                              opacity: 1,
                              transitionDelay: `0.${idx}s`,
                            }
                          : { opacity: 0 }
                      }
                    >
                      {item}
                    </p>
                  );
                })}
              </h2>
              <p>
                일러스트를 제외한 모든 오브젝트는 <br />
                JavaScript,React,CSS를 이용하여 배치하였습니다.
              </p>
            </div>
          </li>
          <li style={selectList === 3 ? { opacity: 1 } : { opacity: 0 }}>
            <div className="artweb-left-textBox">
              <h2>
                {designText.split("").map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      style={
                        selectList === 3
                          ? idx >= 10
                            ? idx == 10
                              ? {
                                  opacity: 1,
                                  transitionDelay: `1s`,
                                }
                              : {
                                  opacity: 1,
                                  transitionDelay: `1.1s`,
                                }
                            : {
                                opacity: 1,
                                transitionDelay: `0.${idx}s`,
                              }
                          : { opacity: 0 }
                      }
                    >
                      {item}
                    </p>
                  );
                })}
              </h2>
              <p>
                상업적인 프로젝트는 아니지만, <br />
                제가 좋아하는 디자인을 활용하여
                <br /> 웹사이트를 만들어 보고 싶었습니다. :)
              </p>
            </div>
          </li>
        </ul>
        <div className="artweb-left-linkBox">
          <div className="artweb-left-site">
            <a
              href="https://zerone-artweb.vercel.app/"
              target="_blank"
              onMouseEnter={() => {
                dispatch(setHover("ArtWeb"));
                dispatch(setLink(true));
              }}
              onMouseLeave={() => {
                dispatch(setHover(""));
                dispatch(setLink(false));
              }}
            >
              view more
            </a>
          </div>
          <div
            className="artweb-left-github"
            onMouseEnter={() => {
              dispatch(setLink(true));
            }}
            onMouseLeave={() => {
              dispatch(setLink(false));
            }}
          >
            <a href="https://github.com/zerone-arts/art-web" target="_blank">
              GitHub
            </a>
          </div>
        </div>
        <div className="artweb-left-btnBox">
          {list.map((item, idx) => {
            return (
              <button
                className={`artweb-left-btnBox-btn ${
                  selectList === idx ? "active" : ""
                }`}
                onClick={() => {
                  setSelectList(idx);
                }}
                key={idx}
              >
                0{idx + 1}
              </button>
            );
          })}
          <div className="artweb-left-btnLineBox">
            <div
              className="artweb-left-btn-line"
              style={{
                backgroundColor: `#d29e3c`,
                width: `${(selectList + 1) * 25}%`,
              }}
            ></div>
            <div
              className="artweb-left-btn-ball"
              style={{
                backgroundColor: `#d29e3c`,
                left: `${(selectList + 1) * 25}%`,
              }}
            ></div>
          </div>
          <div
            className="artweb-left-btn-arrow"
            onClick={() => {
              selectList === 3
                ? setSelectList(0)
                : setSelectList(selectList + 1);
            }}
          ></div>
        </div>
      </div>
      <div className="artweb-circleTextBox">
        <p>
          {circleText.split("").map((item, idx) => {
            return (
              <span key={idx} style={{ transform: `rotate(${idx * 20.5}deg)` }}>
                {item}
              </span>
            );
          })}
        </p>
        <div className="artweb-circleTextBox-bg">
          {list.map((item, idx) => {
            return (
              <div
                className="artweb-circleTextBox-bg-line"
                key={idx}
                style={
                  selectList === idx
                    ? { opacity: 1, border: `2px solid #d29e3c` }
                    : { opacity: 0, border: `2px solid #d29e3c` }
                }
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ArtWeb;
