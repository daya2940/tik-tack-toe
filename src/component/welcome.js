import React, { useState } from "react";
import Square from "./Square";
import Game from "./Game";

const Welcome = ({ AI, friend }) => {
  const [player, setPlayer] = useState("");
  const [game, showgame] = useState(false);

  const handleselection = (e) => {
    setPlayer(e.target.textContent);
    showgame(true);
  };
  console.log(player);
  return (
    <div>
      {!game && (
        <div>
          <h1 style={{ color: "black" }}>Pick Your side</h1>
          <div className="welcome-square">
            <Square
              value="X"
              onClick={handleselection}
              style={{ background: "none" }}
            />
            <Square
              value="O"
              onClick={handleselection}
              style={{ background: "none" }}
            />
          </div>
        </div>
      )}
      {game && <Game player={player} AI={AI} friend={friend} />}
    </div>
  );
};

export default Welcome;
