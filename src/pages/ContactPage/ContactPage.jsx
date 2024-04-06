import React, { useEffect, useRef } from "react";
import "./ContactPage.css";
function ContactPage({ selectCategory }) {
  const contactRef = useRef(null);

  useEffect(() => {
    if (selectCategory == "contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectCategory]);

  return (
    <div className="contactpage-container" ref={contactRef}>
      <div className="contactpage-Wrapper"></div>
    </div>
  );
}

export default ContactPage;
