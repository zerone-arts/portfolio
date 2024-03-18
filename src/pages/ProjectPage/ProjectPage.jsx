import React, { useEffect, useRef } from "react";
import "./ProjectPage.css";

function ProjectPage({ selectCategory }) {
  const projectRef = useRef(null);

  useEffect(() => {
    if (selectCategory == "project") {
      projectRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectCategory]);
  return (
    <div className="projectpage-container" ref={projectRef}>
      project
    </div>
  );
}

export default ProjectPage;
