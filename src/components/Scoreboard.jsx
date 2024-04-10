import React, { useState } from "react";
import "../App.css";


const ScoreBoard = ({ inShowPhase, setIsInShowPhase, targetScore, onGameWin, playerName, resetScores, setResetScores, numPlayers }) => {
  const [currentScore, setCurrentScore] = useState(0);
  const [scoreInput, setScoreInput] = useState("");
  const [scoreHistory, setScoreHistory] = useState([]);


  const handleScoreIncrease = (amount) => {
    setCurrentScore((prevScore) => prevScore + amount);
    if (currentScore + amount >= targetScore) {
      onGameWin(playerName); // Pass the winning player's name up to App
    }
    setScoreHistory((prevHistory) => [...prevHistory, amount]);
  };


  const handleUndo = () => {
    if (scoreHistory.length > 0) {
      const lastScoreChange = scoreHistory.pop();
      setCurrentScore(currentScore - lastScoreChange);
      setScoreHistory([...scoreHistory]);
    }
  };


  const handleSubmitScore = () => {
    const newScore = parseInt(scoreInput, 10);
    if (!isNaN(newScore)) {
      handleScoreIncrease(newScore);
      setScoreInput(""); // Clear input
    }
  };


  if(resetScores && currentScore>0){
    setResetScores(false)
    setScoreHistory([])
    setCurrentScore(0)
    setScoreInput("")
    setIsInShowPhase(false)
  }


  let buttons;
  if (inShowPhase) {
    buttons = (
      <div className="container">
        <div className="inputContainer">
          <input
            className="input"
            type="number"
            value={scoreInput}
            onChange={(e) => setScoreInput(e.target.value)}
          />
          </div>
          <button className="scoreboard" onClick={handleSubmitScore}>
            Submit
          </button>
          <button onClick={handleUndo} className="scoreboard red">
            Undo
          </button>
      </div>
    );
  } else {
    if (numPlayers > 2) {
      buttons = (
        <div className="playerContainer">
          <button className="scoreboard" onClick={() => handleScoreIncrease(1)}>
            Peg 1
          </button>
          <button className="scoreboard" onClick={() => handleScoreIncrease(2)}>
            Peg 2
          </button>
          <button onClick={handleUndo} className="scoreboard red">Undo</button>
        </div>
      );
    } else {
      buttons = (
        <div className="playerContainer">
          <button className="scoreboard" onClick={() => handleScoreIncrease(1)}>
            Go!
          </button>
          <button className="scoreboard" onClick={() => handleScoreIncrease(2)}>
            15 / Pair / Heels / 31
          </button>
          <button className="scoreboard" onClick={() => handleScoreIncrease(3)}>
            Run 3
          </button>
          <button className="scoreboard" onClick={() => handleScoreIncrease(4)}>
            Run 4
          </button>
          <button className="scoreboard" onClick={() => handleScoreIncrease(5)}>
            Run 5
          </button>
          <button className="scoreboard" onClick={() => handleScoreIncrease(6)}>
            3 of a kind
          </button>
          <button
            className="scoreboard"
            onClick={() => handleScoreIncrease(12)}
          >
            4 of a kind
          </button>
          <button onClick={handleUndo} className="scoreboard red">Undo</button>
        </div>
      );
    }
  }


  return (
    <div className="scoreboard">
      <div className="container">
      <h3 style={{ fontWeight: "lighter", fontSize: "36px", marginTop:"8px" ,marginBottom: "8px", color:"#95c11f"}}>{currentScore}</h3>
      </div>
      {buttons}
    </div>
  );
};


export default ScoreBoard;