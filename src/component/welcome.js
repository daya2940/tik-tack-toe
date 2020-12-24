import React, { useState } from "react";
import Game from "./Game";

const Welcome = ({ AI, friend }) => {
  const [player, setPlayer] = useState("");
  const [game, showgame] = useState(false);

  const handleSelection = (e) => {
    setPlayer(e.target.textContent);
    showgame(true);
  };
  console.log(player);
  return (
    <div>
      {!game && (
        <div>
          <h1 style={{ color: "black" }} className="welcome-text">Pick Your side</h1>
          <div className="welcome-square">
          <div>
            <p style={{display:'flex',justifyContent:'center',cursor:'pointer'}}>
              <span className="X" onClick={handleSelection}>X</span>
              <span className="O ml-5" onClick={handleSelection}>O</span>
            </p>
          </div>
          </div>
        </div>
      )}
      {game && <Game player={player} AI={AI} friend={friend} />}
    </div>
  );
};

export default Welcome;
