import React from "react";
import Ranking from "./Ranking";
import logo from "./transparant.png";

export default function App() {
  return (
    <div className="center" style={{ margin: 20 }}>
      <div>
        <h1>
          <img src={logo} width={40} style={{ marginBottom: 16 }} alt="B" />
          oeva daagt uit
        </h1>
        <Ranking />
      </div>
    </div>
  );
}
