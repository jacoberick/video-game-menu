import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CampaignVideo from "./assets/campaign.mp4";
import MultiplayerVideo from "./assets/multiplayer.mp4";
import SpecOpsVideo from "./assets/specops.mp4";
import $ from "jquery";

//page imports
import Slide from "./components/slide.js";

function App() {
  return (
    <div id="container">
      <Slide
        descrip="Start the single player campaign."
        gameMode="CAMPAIGN"
        video={CampaignVideo}
        id="#CampaignVideo"
      />
      <Slide
        descrip="Rank up, unlock new weapons, perks, killstreaks, and much more online"
        gameMode="MULTIPLAYER"
        video={MultiplayerVideo}
        id="#MultiplayerVideo"
      />
      <Slide
        descrip="Various cooperative modes and missions await."
        gameMode="SPEC OPS"
        video={SpecOpsVideo}
        id="#SpecOpsVideo"
      />
    </div>
  );
}

export default App;
