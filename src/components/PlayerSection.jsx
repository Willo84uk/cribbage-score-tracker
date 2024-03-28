//BEFORE THE EDIT

import React from 'react';
import ScoreBoard from './Scoreboard';

const PlayerSection = ({ playerName }) => {
  return (
    <div style={{ padding: '16px', border: '1px solid #ccc', margin:'16px', borderRadius: '8px' }}>
      <h2>{playerName}</h2>
      <ScoreBoard />
    </div>
  );
};

export default PlayerSection;