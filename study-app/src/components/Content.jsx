import React from "react";
import "./Content.css";

function Content() {
  return (
    <div className="content">
      <h2 className="header">Featured Playlists</h2>
      <div className="playlist">
        {/* Tambahkan item playlist sesuai kebutuhan  */}
        <div className="playlist-item">
          <img
            src="link-gambar-playlist.jpg"
            alt="Playlist Cover"
            className="playlist-img"
          />
          <h3 className="playlist-name">Playlist Name</h3>
          <p className="curator">Curated by User Name</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
