import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CampaignVideo from "./assets/campaign.mp4";
import MultiplayerVideo from "./assets/multiplayer.mp4";
import SpecOpsVideo from "./assets/specops.mp4";

//page imports
import Slide from "./components/slide.js";

function App() {
  return (
    <div id="container">
      <Slide gameMode="CAMPAIGN" video={CampaignVideo} />
      <Slide gameMode="MULTIPLAYER" video={MultiplayerVideo} />
      <Slide gameMode="SPEC OPS" video={SpecOpsVideo} />
    </div>
  );
}

export default App;
