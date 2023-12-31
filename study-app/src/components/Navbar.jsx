import React, { useState } from "react";
import "./Navbar.css";
import { SiAudiomack } from "react-icons/si";

function Navbar() {
  return (
    <div className="navbar">
      <div className={`white-space `}></div>
      <div className="nav">
        <div className="logo">
          <div className="rotating-image"></div>
          <h1>My Audio</h1>
        </div>
        <div className="user-profile">
          <img
            src="link-gambar-profil.png"
            alt="Profil User"
            className="profile-img"
          />
          <span className="user-name">Username</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
