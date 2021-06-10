import React from "react";
import Ranking from "./Ranking";
import logo from "./transparant.png";

export default function App() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto" }}>
      <h1>
        <img src={logo} width={40} style={{ marginBottom: 18 }} alt="B" />
        oeva daagt uit
      </h1>
      <h2>
        <a style={{ color: "black" }} href="https://www.twitch.tv/williamboeva">
          <i class="nes-icon twitch is-medium"></i>
          Twitch.tv/williamboeva
        </a>
      </h2>
      <div
        class="nes-container is-centered"
        style={{
          marginBottom: 18,
        }}
      >
        <img
          height="200"
          alt="Red Bull"
          src="/redbull.jpg"
          style={{ margin: "0 1rem" }}
        />

        <img
          height="50"
          alt="Alternate"
          src="/alternate.png"
          style={{ margin: "0 1rem" }}
        />
      </div>
      <p style={{ textAlign: "center" }}>
        <a href="https://sebastiaanjansen.be/" style={{ color: "black" }}>
          Leaderboard by DrSkunk <img alt="DrSkunk logo" src="/drskunk.png" />
        </a>
      </p>
      <Ranking />
    </div>
  );
}
