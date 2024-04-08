import React from "react";
import "../ProfileComponet/ProfileComponet.css";
import profileImg from "../../../assets/img/profileImgTest2.png";
import Tilt from "react-vanilla-tilt";
function ProfileComponet({ select }) {
  const options = {
    scale: 0,
  };

  return (
    <div className="profileComponet">
      <Tilt style={{ background: "transparent" }} options={options}>
        <div className={`profileComponet-card ${select}`}>
          <div className="profileComponet-iam">
            <div className="profileComponet-iam-bg"></div>
            <div className="profileComponet-iam-title">
              <p>" 디자인 ･ 인터랙션 만드는 것을 좋아하는 개발자 " </p>
            </div>
          </div>
          <div className="profileComponet-profileBox">
            <div className="profileComponet-profileBox-bg"></div>

            <div className="profileComponet-profileBox-img">
              <img src={profileImg} alt="profileImg" />
              <p>zero one</p>
              <div></div>
            </div>
            <div className="profileComponet-profileBox-profile">
              <ul>
                <li>
                  <p>김영일</p>
                  <p>Frontend Developer</p>
                </li>
                <li>
                  <p>98.02.10</p>
                </li>
                <li>
                  <p>zerone.arts@gmail.com</p>
                </li>
                <li>
                  <p>제주특별자치도 제주시</p>
                </li>
                <li>
                  <p>제주대학교 컴퓨터공학전공</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default ProfileComponet;
