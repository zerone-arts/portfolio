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
      contact
    </div>
  );
}

export default ContactPage;
