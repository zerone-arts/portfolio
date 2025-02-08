import React from "react";
import "../Personality/Personality.css";
function Personality({ category }) {
  return (
    <div
      className={`personality ${category === "Personality" ? "active" : ""}`}
    >
      <ul className={`personality-wrapper ${category}`}>
        <li
          style={
            category === "Personality"
              ? { transitionDelay: `0.2s` }
              : { transitionDelay: `0.8s` }
          }
        >
          <div>
            <p>Introversion</p>
          </div>
          <div>
            <h2>내향형</h2>
            <p className="personality-text">
              많은 사람들 속에서는 주로 이야기를 듣는 편이지만, 소수의 사람들과
              함께 있거나 친밀한 관계가 형성된 경우, 혹은 필요한 순간에는
              주도적으로 대화를 이끌어 갑니다.
            </p>
          </div>
        </li>
        <li
          style={
            category === "Personality"
              ? { transitionDelay: `0.4s` }
              : { transitionDelay: `0.6s` }
          }
        >
          <div>
            <p>iNtuition .</p>
          </div>
          <div>
            <h2>직관형</h2>
            <p className="personality-text">
              문화생활을 즐길 때나 길을 걸을 때도 간판이나 다양한 사물의
              디자인과 아이디어를 관찰하는 것을 좋아합니다. 자연스럽게 시각적인
              요소에 대한 관심이 커졌고, 이는 프론트엔드에 대한 선호로
              이어졌습니다.
            </p>
          </div>
        </li>
        <li
          style={
            category === "Personality"
              ? { transitionDelay: `0.6s` }
              : { transitionDelay: `0.4s` }
          }
        >
          <div>
            <p>Feeling</p>
          </div>
          <div>
            <h2>감정형</h2>
            <p className="personality-text">
              사람과의 관계를 중요하게 생각하며, 상대의 입장에서 공감하려
              노력하고 객관적인 시각도 놓치지 않으려 합니다. 또한, 여러 사람과의
              관계에서 조화를 중시하며, 주변 상황을 세심하게 인지하려는
              편입니다.
            </p>
          </div>
        </li>
        <li
          style={
            category === "Personality"
              ? { transitionDelay: `0.8s` }
              : { transitionDelay: `0.2s` }
          }
        >
          <div>
            <p>Judging</p>
          </div>
          <div>
            <h2>판단형</h2>
            <p className="personality-text">
              중요한 일이나 일상적인 생활 패턴에 대해 계획을 세우고 체계를
              갖추는 것을 중요하게 생각합니다. 따라서 스케줄과 기한을 항상 신경
              쓰며, 목적과 방향을 자주 상상합니다. 또한, 예상되는 문제 상황에
              대한 대처를 깊이 고민하는 편입니다.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Personality;
