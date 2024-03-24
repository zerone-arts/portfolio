import React from "react";
import "../SkillComponent/SkillComponent.css";
import htmlIcon from "../../../assets/img/icon/html.png";
import cssIcon from "../../../assets/img/icon/css.png";
import reactIcon from "../../../assets/img/icon/react.png";
import jsIcon from "../../../assets/img/icon/js.png";
import tsIcon from "../../../assets/img/icon/ts.png";
import mongoIcon from "../../../assets/img/icon/mongo.png";
import firebaseIcon from "../../../assets/img/icon/firebase.png";
import nodejsIcon from "../../../assets/img/icon/nodejs.png";
import githubIcon from "../../../assets/img/icon/githubb.png";
import figmaIcon from "../../../assets/img/icon/figma.png";
import notionIcon from "../../../assets/img/icon/notion.png";
import xdIcon from "../../../assets/img/icon/xd.png";
import photoshopIcon from "../../../assets/img/icon/photoshop.png";

import Tilt from "react-vanilla-tilt";

function SkillComponent(props) {
  return (
    <div className="skillcomponent">
      <Tilt
        style={{
          position: "relative",
          width: 300,
          height: 450,
          top: 50,
          background: "#ffffff",
        }}
      >
        <div className="skillcomponent-wrapper">
          <div>
            <h4>Frontend</h4>
            <ul>
              <li>
                <img src={htmlIcon} alt="htmlIcon" />
                <p>HTML</p>
              </li>
              <li>
                <img src={cssIcon} alt="cssIcon" />
                <p>CSS</p>
              </li>
              <li>
                <img src={jsIcon} alt="jsIcon" />
                <p>JAVASCRIPT</p>
              </li>
              <li>
                <img src={tsIcon} alt="tsIcon" />
                <p>TYPESCRIPT</p>
              </li>
              <li>
                <img src={reactIcon} alt="reactIcon" />
                <p>React</p>
              </li>
            </ul>
          </div>
          <div>
            <h4>Backend</h4>
            <ul>
              <li>
                <img src={nodejsIcon} alt="nodejsIcon" />
                <p>node.js</p>
              </li>
              <li>
                <img src={firebaseIcon} alt="firebaseIcon" />
                <p>fireBase</p>
              </li>
              <li>
                <img src={mongoIcon} alt="mongoIcon" />
                <p>mongoDB</p>
              </li>
            </ul>
          </div>
          <div>
            <h4>Tool</h4>
            <ul>
              <li>
                <img src={githubIcon} alt="githubIcon" />
                <p>GitHub</p>
              </li>
              <li>
                <img src={notionIcon} alt="notionIcon" />
                <p>Notion</p>
              </li>
              <li>
                <img src={figmaIcon} alt="figmaIcon" />
                <p>Figma</p>
              </li>
              <li>
                <img src={xdIcon} alt="xdIcon" />
                <p>Adobe XD</p>
              </li>
              <li>
                <img src={photoshopIcon} alt="photoshopIcon" />
                <p>Photoshop</p>
              </li>
            </ul>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default SkillComponent;
