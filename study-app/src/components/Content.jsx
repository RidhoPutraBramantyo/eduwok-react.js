import React from "react";

function Content() {
  const contentStyle = {
    marginTop: "20px",
    marginLeft: "270px", // Menyesuaikan dengan lebar Sidebar + margin
    padding: "20px",
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const playlistStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  const playlistItemStyle = {
    width: "200px",
    margin: "10px",
  };

  const playlistImgStyle = {
    width: "100%",
    height: "auto",
  };

  const playlistNameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "5px",
  };

  const curatorStyle = {
    fontSize: "14px",
    color: "#888",
  };

  return (
    <div style={contentStyle}>
      <h2 style={headerStyle}>Featured Playlists</h2>
      <div style={playlistStyle}>
        {/* Tambahkan item playlist sesuai kebutuhan Anda */}
        <div style={playlistItemStyle}>
          <img
            src="link-gambar-playlist.jpg"
            alt="Playlist Cover"
            style={playlistImgStyle}
          />
          <h3 style={playlistNameStyle}>Playlist Name</h3>
          <p style={curatorStyle}>Curated by User Name</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
