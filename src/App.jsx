import './App.css'
import React, { useEffect, useState } from 'react';
import PlayerSection from './components/PlayerSection';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; // Assuming CSS file is in dist

const App = () => {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [player3Name, setPlayer3Name] = useState('');
  const [player4Name, setPlayer4Name] = useState('');
  const [numPlayers, setNumPlayers] = useState(2); // Initialize numPlayers to 2
  const [isInShowPhase, setIsInShowPhase] = useState(false);
  const [targetScore, setTargetScore] = useState(121);
  const [isWinnerPopupOpen, setIsWinnerPopupOpen] = useState(false);
  const [winningPlayer, setWinningPlayer] = useState('');
  const [resetScores, setResetScores] = useState(false)
  

    const promptForPlayerNames = () => {
    const numPlayersInput = prompt('Please enter the number of players (2, 3 or 4):');
    setNumPlayers(numPlayersInput);

  const player1Input = prompt('Please enter a name for Player 1:');
  setPlayer1Name(player1Input);

  const player2Input = prompt('Please enter a name for Player 2:');
  setPlayer2Name(player2Input);

  if(numPlayersInput > 2) {
    const player3Input = prompt('Please enter a name for Player 3:');
  setPlayer3Name(player3Input);}

  if(numPlayersInput > 3) {
    const player4Input = prompt('Please enter a name for Player 4:');
  setPlayer4Name(player4Input);}

// }
const targetScoreInput = prompt('Would you like to play a shortened game to a score of 61?:');
if(targetScoreInput === "y" || targetScoreInput === "yes"){
  setTargetScore(parseInt(61));
}    
  }

  // Call the promptForPlayerNames function when the component mounts
  useEffect(() => {
    promptForPlayerNames();
  }, []);

  const togglePhase = () => {
    setIsInShowPhase(!isInShowPhase);
  };

  const handleGameWin = (playerName) => {
    setIsWinnerPopupOpen(true);
    setWinningPlayer(playerName);
  };

  const closeWinnerPopup = () => {
    setIsWinnerPopupOpen(false);
    setWinningPlayer("");
  };
  
  const handleResetScores = () => {
    setResetScores(true)
    closeWinnerPopup();
  };


  return (
    <div>
      <div className='container'>
       <h1>Good Game</h1>
       </div>
       <div className='container'>
       <h1>Cribbage Score Tracker</h1>
       </div>
       <Popup open={isWinnerPopupOpen} closeOnDocumentClick onClose={closeWinnerPopup}>
        <div className='playerContainer'>
          <h1>Well Done</h1>
          <h1>{winningPlayer}</h1>
          <h1>You WON!</h1>
          <button style={{ fontWeight: 'bold', fontSize: 'large', width: '180px', height: '55px', marginBottom: '8px', border: '1px solid #ccc', background: 'linear-gradient(to bottom, #f0f0f0 0%, #ddd 50%, #ccc 100%)', padding: '8px 16px', borderRadius: '15px', cursor: 'pointer' }} onClick={handleResetScores}>Rematch</button>
        </div>
      </Popup>
      <div className="container" style={{ display: 'flex' }}>
            <PlayerSection playerName={player1Name} setIsInShowPhase={setIsInShowPhase} inShowPhase={isInShowPhase} onGameWin={handleGameWin} targetScore={targetScore} resetScores={resetScores} setResetScores={setResetScores}/>
            <PlayerSection playerName={player2Name} inShowPhase={isInShowPhase} setIsInShowPhase={setIsInShowPhase} onGameWin={handleGameWin} targetScore={targetScore} resetScores={resetScores} setResetScores={setResetScores}/>
            {player3Name ? (<PlayerSection playerName={player3Name} inShowPhase={isInShowPhase} setIsInShowPhase={setIsInShowPhase} onGameWin={handleGameWin} targetScore={targetScore} resetScores={resetScores} setResetScores={setResetScores}/>) : ""}
            {player4Name ? (<PlayerSection playerName={player4Name} inShowPhase={isInShowPhase} setIsInShowPhase={setIsInShowPhase} onGameWin={handleGameWin} targetScore={targetScore} resetScores={resetScores} setResetScores={setResetScores}/>) : ""}
      </div>

      <div style={{textAlign:'center', marginTop:'16px'}}> {/* Button Container */}
        <button onClick={togglePhase} style={{ fontWeight: 'bold', fontSize: 'large', width: '180px', height: '55px', marginBottom: '8px', border: '1px solid #ccc', background: 'linear-gradient(to bottom, #f0f0f0 0%, #ddd 50%, #ccc 100%)', padding: '8px 16px', borderRadius: '15px', cursor: 'pointer' }}>
          {isInShowPhase ? 'Play' : 'Show'}
        </button>
      </div>
    </div>
  );
};

export default App;
