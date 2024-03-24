import React from "react";
import "../ProfileComponet/ProfileComponet.css";
import profileImg from "../../../assets/img/profileImgTest2.png";

function ProfileComponet({ select }) {
  return (
    <div className="profileComponet">
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
            <p>
              FrontEnd <br />
              Developer
            </p>
            <div></div>
          </div>
          <div className="profileComponet-profileBox-profile">
            <ul>
              <li>
                <p>김영일</p>
                <p>FrontEnd Developer</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponet;
