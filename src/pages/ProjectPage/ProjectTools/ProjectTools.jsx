import "./ProjectTools.css";

export default function ProjectTools({
  setHover,
  selectBtn,
  handleProjectHover,
}) {
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
          <div className="Tools-title">TOOLS</div>
          <div className="Tools-subTitle">All-in-One Tools</div>
        </div>
        <div className="Tools-Introduction">
          Tools은 일상에서 활용도가 높은 <br />
          다양한 도구를 통합한 스마트 플랫폼입니다.
        </div>
        <div className="Tools-btnBox">
          <button className="Tools-btn">
            <a href="https://zerone-tools.vercel.app/" target="_blank">
              view more
            </a>
          </button>
          <button className="Tools-btn">
            <a href="https://github.com/zerone-arts/Tools" target="_blank">
              GitHub
            </a>
          </button>
        </div>
      </div>
      <div className="Tools-wrapper Tools-rightBox "></div>
    </div>
  );
}
