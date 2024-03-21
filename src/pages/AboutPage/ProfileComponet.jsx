import React from "react";

function ProfileComponet({ select }) {
  return (
    <div className="profileComponet">
      <div className={`profileComponet-card ${select}`}>
        <div className="profileComponet-iam">iam</div>
        <div className="profileComponet-profile">profile</div>
      </div>
    </div>
  );
}

export default ProfileComponet;
