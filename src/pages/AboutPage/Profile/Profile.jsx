import React, { useState } from "react";
import "./Profile.css";

import me2Bw from "../../../assets/img/me/meBW.jpg";
import me2 from "../../../assets/img/me/me.jpg";
import me1Bw from "../../../assets/img/me/me2BW.jpg";
import me1 from "../../../assets/img/me/me2.PNG";
import { useDispatch } from "react-redux";
import { setHover, setLink } from "../../../redux/reducers/uiSlice";

const PhotoArr = [
  {
    id: 1,
    bwImg: me1Bw,
    img: me1,
  },
  {
    id: 2,
    bwImg: me2Bw,
    img: me2,
  },
];

function Profile({ category }) {
  const [color, setColor] = useState(false);
  const [photoCount, setPhotoCount] = useState(0);
  const dispatch = useDispatch();
  return (
    <div
      className={`profile-container ${category === "Profile" ? "active" : ""}`}
    >
      <div className="profile-wrapper">
        <div
          className="profile-photoWrapper"
          onMouseEnter={() => setColor(true)}
          onMouseLeave={() => setColor(false)}
        >
          <div
            className="profile-photoBox"
            style={{ transform: `translateX(-${photoCount * 50}%)` }}
          >
            {PhotoArr.map((item, idx) => (
              <div
                className="profile-photo"
                style={photoCount === idx ? { opacity: 1 } : { opacity: 0 }}
                key={item.id}
              >
                <img
                  src={item.bwImg}
                  alt="me"
                  style={color ? { opacity: 0 } : { opacity: 1 }}
                />
                <img
                  src={item.img}
                  alt="me"
                  style={color ? { opacity: 1 } : { opacity: 0 }}
                />
              </div>
            ))}
          </div>

          <div className="profile-photo-btnBox">
            <div className="profile-photo-btn">
              <button
                style={
                  photoCount === 0
                    ? {
                        border: "1px solid rgb(236, 236, 236)",
                        backgroundColor: "rgb(236, 236, 236)",
                      }
                    : {
                        border: "1px solid rgb(166, 166, 166)",
                        backgroundColor: "transparent",
                      }
                }
                onClick={() => setPhotoCount(0)}
              ></button>
              <button
                style={
                  photoCount === 1
                    ? {
                        border: "1px solid rgb(236, 236, 236)",
                        backgroundColor: "rgb(236, 236, 236)",
                      }
                    : {
                        border: "1px solid rgb(166, 166, 166)",
                        backgroundColor: "transparent",
                      }
                }
                onClick={() => setPhotoCount(1)}
              ></button>
            </div>
            <div
              style={
                color
                  ? { opacity: 0, transition: "1s" }
                  : { opacity: 1, transition: "1s" }
              }
            >
              color?
            </div>
          </div>
        </div>

        <div
          className="profile-textBox"
          style={
            color
              ? {
                  left: "24%",
                  textShadow: "1px 1px 5px rgba(0, 0, 0, 1)",
                  color: "rgb(198, 155, 54)",
                }
              : {
                  left: "26%",
                  textShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
                  color: "rgb(196, 196, 196)",
                }
          }
        >
          <div>
            김영일
            <span
              style={{
                fontSize: "10px",
                color: "rgb(156,156,156)",
                marginLeft: "5px",
              }}
            >
              INFJ
            </span>
          </div>
          <div>1998.02.10</div>
          <div>제주특별자치도 제주시 설촌로 4길 19</div>
          <div>010-8006-5105</div>
          <div>zerone-@naver.com</div>
          <div>
            <a
              href="https://github.com/zerone-arts"
              target="_blank"
              rel="noreferrer noopener"
              onMouseOver={() => {
                dispatch(setLink(true));
              }}
              onMouseLeave={() => {
                dispatch(setLink(false));
              }}
            >
              GitHub
            </a>
          </div>

          <div>
            <a
              href="https://vercel.com/zerone-projects"
              target="_blank"
              rel="noreferrer noopener"
              onMouseOver={() => {
                dispatch(setLink(true));
              }}
              onMouseLeave={() => {
                dispatch(setLink(false));
              }}
            >
              Vercel
            </a>
          </div>
          <div style={{ fontSize: "12px" }}>
            음악 • 영화 • 디자인 • 무채색 • 컴퓨터
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
