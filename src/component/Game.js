import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = ({player,AI,friend}) => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  let score1=0,score2=0;

  const winner = calculateWinner(history[stepNumber]);
  if(winner==='X'){
    score1++;
  }
  if(winner==='O'){
    score2++;
  }

  let player1 = player==='X'?'X':'O';
  let player2 = player==='X'?'O':'X';
  let xO = xIsNext ? player1 : player2;

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };
  
  return (
    <>
      <div className="score" style={{color:'black'}}>
       <span>{AI}</span> {score1} - {score2}<span>{friend}</span>
      </div>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <h3 style={{color:'black'}}>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
      </div>
    </>
  );
};

export default Game;
