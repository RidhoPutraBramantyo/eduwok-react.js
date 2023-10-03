import React, { useState } from "react";
import "./Playbar.css";
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
  TbPlayerPlayFilled,
  TbPlayerPauseFilled,
  TbPlayerPause,
} from "react-icons/tb";

function Playbar() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="playbar">
      <div className="playbar-content">
        {/*  elemen-elemen playbar sesuai kebutuhan  */}
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
          {/*  tombol kontrol (play, pause, next, prev, dll.) */}
          <button className="control-button">
            <TbPlayerTrackPrevFilled />
          </button>{" "}
          <button className="control-button" onClick={togglePlayPause}>
            {isPlaying ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled />}
          </button>
          <button className="control-button">
            <TbPlayerTrackNextFilled />
          </button>
        </div>
        <div className="playbar-volume">
          {/*  kontrol volume */}
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
