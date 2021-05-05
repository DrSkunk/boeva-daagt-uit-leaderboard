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
        class="nes-container with-title is-centered"
        style={{
          marginBottom: 18,
        }}
      >
        <p class="title">Sponsored by</p>
        <img
          height="100"
          alt="Red Bull"
          src="https://i.imgur.com/Pttah9V.png"
        />
        <img
          height="50"
          alt="Alternate"
          src="https://www.alternate.be/mobile/javax.faces.resource/ALTERNATE_Logo.png.xhtml?ln=pix"
        />
      </div>
      <Ranking />
    </div>
  );
}
