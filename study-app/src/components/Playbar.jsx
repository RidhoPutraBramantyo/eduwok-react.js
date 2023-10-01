import React from "react";
import "./Playbar.css"; // Impor file CSS yang berisi gaya tambahan

function Playbar() {
  return (
    <div className="playbar">
      <div className="playbar-content">
        {/* Tambahkan elemen-elemen playbar sesuai kebutuhan Anda */}
        <div className="playbar-info">
          <img
            src="link-gambar-lagu.jpg"
            alt="Lagu Cover"
            className="song-img"
          />
          <div className="song-details">
            <h3 className="song-title">Judul Lagu</h3>
            <p className="artist">Nama Artis</p>
          </div>
        </div>
        <div className="playbar-controls">
          {/* Tambahkan tombol kontrol (play, pause, next, prev, dll.) */}
          <button className="control-button">Play</button>
          <button className="control-button">Pause</button>
          <button className="control-button">Next</button>
          <button className="control-button">Prev</button>
        </div>
        <div className="playbar-volume">
          {/* Tambahkan kontrol volume */}
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            className="volume-slider"
          />
        </div>
      </div>
    </div>
  );
}

export default Playbar;
