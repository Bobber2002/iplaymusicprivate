import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import './assets/temporary_styles/audiostyles.css';
import AudioPlayer from './components/AudioPlayer.jsx';
import tracks from './audiotracks.js';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AudioPlayer tracks={tracks} />
      {/*<App />*/}
    </Router>
  </React.StrictMode>

);
