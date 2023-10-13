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
import { BsHeart, BsHeartFill } from "react-icons/bs";

import data from "../data/fakeData.json";

function Playbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioCover = data.musics[currentSongIndex].imageUrl;
  const musicLength = data.musics.length;

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % musicLength;
    setCurrentSongIndex(nextIndex);
    console.log(nextIndex);
  };
  const playPreviousSong = () => {
    const previousIndex = (currentSongIndex - 1 + musicLength) % musicLength;
    setCurrentSongIndex(previousIndex);
    console.log(previousIndex);
  };

  return (
    <div className="playbar">
      <div className="playbar-content">
        {/*  elemen-elemen playbar sesuai kebutuhan  */}
        <div className="playbar-info">
          <img
            src={require(`../img/${audioCover}`)}
            alt={audioCover}
            className="song-img"
          />
          <div className="song-details">
            <h3 className="song-title">
              {data.musics[currentSongIndex].title}
            </h3>
            <p className="artist">{data.musics[currentSongIndex].artist}</p>
          </div>
          <div className="whistlist">
            <BsHeart className="heart-icon" />
            <BsHeartFill />
          </div>
        </div>

        <div className="playbar-controls">
          {/*  tombol kontrol (play, pause, next, prev, dll.) */}
          <button className="control-button" onClick={playPreviousSong}>
            <TbPlayerTrackPrevFilled />
          </button>{" "}
          <button className="control-button" onClick={togglePlayPause}>
            {isPlaying ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled />}
          </button>
          <button className="control-button" onClick={playNextSong}>
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
