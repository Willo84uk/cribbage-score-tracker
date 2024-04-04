//BEFORE THE EDIT

import '../App.css'
import React from 'react';
import ScoreBoard from './Scoreboard';

const PlayerSection = ({ playerName, inShowPhase }) => {
  return (
    <div style={{ padding: '0px', border: '1px solid #ccc', margin:'4px', borderRadius: '8px' }}>
      <h2 className='container'>{playerName}</h2>
      <ScoreBoard inShowPhase={inShowPhase}/>
    </div>
  );
};

export default PlayerSection;