import React from "react";
import "./Profile.css";
function Profile({ category }) {
  return (
    <div
      className={`profile-container ${category === "Profile" ? "active" : ""}`}
    >
      Profile
    </div>
  );
}

export default Profile;
