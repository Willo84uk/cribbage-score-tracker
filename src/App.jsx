import './App.css'
import React, { useEffect, useState } from 'react';
import PlayerSection from './components/PlayerSection';


const App = () => {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [player3Name, setPlayer3Name] = useState('');
  const [numPlayers, setNumPlayers] = useState(2); // Initialize numPlayers to 2


  const promptForPlayerNames = () => {
    const numPlayersInput = prompt('Please enter the number of players (2 or 3):');
    setNumPlayers(numPlayersInput);


if (numPlayersInput === '2') {
  const player1Input = prompt('Please enter a name for Player 1:');
  setPlayer1Name(player1Input);

  const player2Input = prompt('Please enter a name for Player 2:');
  setPlayer2Name(player2Input);
} else if (numPlayersInput === '3') {
  const player1Input = prompt('Please enter a name for Player 1:');
  setPlayer1Name(player1Input);

  const player2Input = prompt('Please enter a name for Player 2:');
  setPlayer2Name(player2Input);

  const player3Input = prompt('Please enter a name for Player 3:');
  setPlayer3Name(player3Input);
}
  }


  // Call the promptForPlayerNames function when the component mounts
  useEffect(() => {
    promptForPlayerNames();
  }, []);


  return (
    <div >
      <div className='container'>
      <h1>Good Game</h1>
      </div>
      <div className='container'>
      <h1>Cribbage Score Tracker</h1>
      </div>
      <div className="container" style={{ display: 'flex'}}>
          <PlayerSection playerName={player1Name} />
          <PlayerSection playerName={player2Name} />
          {player3Name?<PlayerSection playerName={player3Name} />:""}
      </div>
    </div>
  );
};


export default App;