import React from "react";

function Playbar() {
  const playbarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
  };

  const songInfoStyle = {
    display: "flex",
    alignItems: "center",
  };

  const songCoverStyle = {
    width: "60px",
    height: "60px",
    marginRight: "10px",
  };

  const songNameStyle = {
    fontSize: "16px",
    fontWeight: "bold",
  };

  const artistStyle = {
    fontSize: "14px",
  };

  const controlsStyle = {
    display: "flex",
  };

  const controlButtonStyle = {
    backgroundColor: "#1DB954",
    color: "#fff",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const volumeControlStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <div style={playbarStyle}>
      <div style={songInfoStyle}>
        <img
          src="link-gambar-lagu.jpg"
          alt="Lagu Cover"
          style={songCoverStyle}
        />
        <div>
          <h3 style={songNameStyle}>Nama Lagu</h3>
          <p style={artistStyle}>Artis</p>
        </div>
      </div>
      <div style={controlsStyle}>
        {/* Tombol pemutar seperti play, pause, dan lainnya */}
        <div style={controlButtonStyle}>Play</div>
        <div style={controlButtonStyle}>Pause</div>
        {/* Tambahkan tombol pemutar lainnya sesuai kebutuhan Anda */}
      </div>
      <div style={volumeControlStyle}>{/* Kontrol volume dan lainnya */}</div>
    </div>
  );
}

export default Playbar;
