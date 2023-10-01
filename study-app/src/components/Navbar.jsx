import React from "react";

function Navbar() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1DB954",
    padding: "10px 20px",
    color: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    marginLeft: "250px", // Menyesuaikan dengan lebar Sidebar
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoImgStyle = {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  };

  const userProfileStyle = {
    display: "flex",
    alignItems: "center",
  };

  const profileImgStyle = {
    width: "30px",
    height: "30px",
    marginRight: "10px",
    borderRadius: "50%",
  };

  return (
    <div style={navbarStyle}>
      <div style={logoStyle}>
        <img
          src="link-gambar-logo-spotify.png"
          alt="Logo Spotify"
          style={logoImgStyle}
        />
        <h1>Spotify</h1>
      </div>
      <div style={userProfileStyle}>
        <img
          src="link-gambar-profil.png"
          alt="Profil User"
          style={profileImgStyle}
        />
        <span style={{ fontSize: "14px" }}>Nama Pengguna</span>
      </div>
    </div>
  );
}

export default Navbar;
