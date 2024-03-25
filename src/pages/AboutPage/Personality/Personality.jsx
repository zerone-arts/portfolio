import React from "react";
import "../Personality/Personality.css";
function Personality({ select }) {
  return (
    <div className="personality">
      <ul className={`personality-wrapper ${select}`}>
        {/* <div className="personality-bg"></div> */}
        <li>
          <div>
            <p>Introversion</p>
          </div>
          <div>
            <h2>내향형</h2>
            <p>
              많은 사람들이 있을 때는 주도적으로 <br />
              대화를 이끌어 가기보다는 이야기를 <br />
              듣는 편입니다. 하지만 소수의 사람들과 있거나 관계가 깊게 형성된
              사람들이나 필요로 하는 <br />
              순간에는 주도적으로 이야기를 하는 편입니다.
            </p>
          </div>
        </li>
        <li>
          <div>
            <p>iNtuition .</p>
          </div>
          <div>
            <h2>직관형</h2>
            <p>
              문화생활을 할 때나 , 길을 걸어 다닐 때도 <br />
              간판이나 여러 사물의 디자인이나 아이디어를 <br />
              관찰하는 것을 좋아합니다. <br />
              그렇기 때문에 보이는 것에 대한 관심이 <br />
              프론트엔드를 더욱 선호하게 되었습니다.
            </p>
          </div>
        </li>
        <li>
          <div>
            <p>Feeling</p>
          </div>
          <div>
            <h2>감정형</h2>
            <p>
              사람과의 관계를 많이 생각합니다. <br />
              객관적인 시각보다는 같은 관점에서 공감하려고 노력합니다. 그리고
              여러 사람과의 관계에서 <br />
              조화로움을 중요시하고 있습니다. 그렇기 때문에 주변 상황을
              인지하려고 노력하는 편입니다.
            </p>
          </div>
        </li>
        <li>
          <div>
            <p>Judging</p>
          </div>
          <div>
            <h2>판단형</h2>
            <p>
              중요한 일이나 평소 생활 패턴에 대한 <br />
              계획이나 체계를 꼭 세우는 편입니다.
              <br /> 그렇기 때문에 스케줄이나 기한을 항상 중요시 <br />{" "}
              생각합니다. 목적이나 방향을 자주 상상하며, <br />
              문제가 생기는 상황에 대한 대처를 <br />
              많이 고민하는 편입니다.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Personality;
