import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="white-space"></div>
      <div className="nav">
        <div className="logo">
          <img
            src="link-gambar-logo-spotify.png"
            alt="Logo"
            className="logo-img"
          />
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
