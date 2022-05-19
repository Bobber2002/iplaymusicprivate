//this is rendered through/imported into AudioPlayer.jsx. Should NOT be used elsewhere/otherwise.

import React from "react";
import { ReactComponent as Play } from "./../assets/audiobuttons/doPlay.svg";
import { ReactComponent as Pause } from "./../assets/audiobuttons/doPause.svg";
import { ReactComponent as Next } from "./../assets/audiobuttons/goForward.svg";
import { ReactComponent as Prev } from "./../assets/audiobuttons/goPrev.svg";
import { ReactComponent as ScrubForward } from "./../assets/audiobuttons/scrubForward.svg";
import { ReactComponent as ScrubBack } from "./../assets/audiobuttons/scrubBack.svg";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  onScrubForwardClick,
  onScrubBackwardClick
}) => (
  <div className="audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <Prev />
    </button>
    <button
      type="button"
      className="scrubback"
      aria-label="Scrub back"
      onClick={onScrubBackwardClick}
    >
      <ScrubBack />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Play />
      </button>
    )}
    <button
      type="button"
      className="scrubforward"
      aria-label="Scrub forward"
      onClick={onScrubForwardClick}
    >
      <ScrubForward />
    </button>
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <Next />
    </button>
  </div>
);

export default AudioControls;
