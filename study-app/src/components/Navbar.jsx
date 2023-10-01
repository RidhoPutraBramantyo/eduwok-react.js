import React from "react";
import "./Navbar.css"; // Impor file CSS yang berisi gaya tambahan

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="link-gambar-logo-spotify.png"
          alt="Logo Spotify"
          className="logo-img"
        />
        <h1>Spotify</h1>
      </div>
      <div className="user-profile">
        <img
          src="link-gambar-profil.png"
          alt="Profil User"
          className="profile-img"
        />
        <span className="user-name">Nama Pengguna</span>
      </div>
    </div>
  );
}

export default Navbar;
