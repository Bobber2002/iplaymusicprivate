import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";

import "./../assets/temporary_styles/audiostyles.css";


const AudioPlayer = ({ tracks }) => {

  // States
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { title, artist, audioSrc } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;


  //------------------------------------

  const startTimer = () => {

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  //-------- functions to set track index ----------------------------------------------


  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  //----- playing or not  ----------------------------------------------------

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]); // eslint-disable-line

  // -------------  ...changing tracks-machinery -------------------------------

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [trackIndex]); // eslint-disable-line


  //--------- ...scrubbing forward/backward-machinery -------------------

  const doScrubForward = () => {

    audioRef.current.currentTime = audioRef.current.currentTime + 10;
    setTrackProgress(audioRef.current.currentTime);

  }

  const doScrubBackward = () => {

    audioRef.current.currentTime = audioRef.current.currentTime - 10;
    setTrackProgress(audioRef.current.currentTime);

  }

  //--------- ...pausing -------------------------------------------------

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  //------------- ...effing return -----------------------------

  return (
    <div className="audio-player">
      <div className="track-info">
        <h2 className="title">{title}</h2>
        <h3 className="artist">{artist}</h3>
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => (e.target.value)}
          //onMouseUp={onScrubEnd}
          //onKeyUp={onScrubEnd}
          style={{ background: '#777' }}
        />
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
          onScrubBackwardClick={doScrubBackward}
          onScrubForwardClick={doScrubForward}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
