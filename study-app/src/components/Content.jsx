import React from "react";
import "./Content.css";
import fakeData from "../data/fakeData.json";

function Content() {
  return (
    <div className="content">
      <h2 className="header">Featured Playlists</h2>
      <div className="playlist">
        {/* Tambahkan item playlist sesuai kebutuhan  */}
        {fakeData.playlists.map((playlist) => (
          <div className="playlist-item">
            <div className="playlist-imgBox">
              <img
                src="link-gambar-playlist.jpg"
                alt="Playlist Cover"
                className="playlist-img"
              />
            </div>

            <h3 className="playlist-name">{playlist.playlistName}</h3>
            <p className="curator">{playlist.curatedbyusername}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
