import React, { useState } from "react";
import "./Profile.css";

import meBw from "../../../assets/img/me/meBW.jpg";
import me from "../../../assets/img/me/me.jpg";
import me2Bw from "../../../assets/img/me/me2BW.jpg";
import me2 from "../../../assets/img/me/me2.PNG";
function Profile({ category }) {
  const [color, setColor] = useState(false);
  return (
    <div
      className={`profile-container ${category === "Profile" ? "active" : ""}`}
    >
      <div
        className="profile-wrapper"
        onMouseEnter={() => setColor(true)}
        onMouseLeave={() => setColor(false)}
      >
        <div className="profile-photoBox">
          <img
            src={me2Bw}
            alt="me"
            style={color ? { opacity: 0 } : { opacity: 1 }}
          />
          <img
            src={me2}
            alt="me"
            style={color ? { opacity: 1 } : { opacity: 0 }}
          />

          <div
            className="profile-photoBox-color"
            style={color ? { opacity: 0 } : { opacity: 1 }}
          >
            color?
          </div>
        </div>
        <div
          className="profile-textBox"
          style={color ? { left: "25%" } : { left: "30%" }}
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
          <div>zerone-@naver.com</div>
          <div>010-8006-5105</div>
          <div style={{ fontSize: "12px" }}>
            음악 • 영화 • 디자인 • 무채색 • 컴퓨터
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
