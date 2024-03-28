//BEFORE THE EDIT

import React from 'react';

const ScoreBoard = () => {
  const [currentScore, setCurrentScore] = React.useState(0);

  const handleScoreIncrease = (amount) => {
    setCurrentScore((prevScore) => prevScore + amount);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{currentScore}</h3>
      <button style={{
  width: '110px',
  marginBottom: '8px',
  border: '1px solid #ccc',
  background: 'linear-gradient(to bottom, #f0f0f0 0%, #ddd 50%, #ccc 100%)',
  padding: '8px 16px',
  borderRadius: '15px',
  cursor: 'pointer'
}} onClick={() => handleScoreIncrease(1)}>Peg</button>
      <button style={{
  width: '110px',
  marginBottom: '8px',
  border: '1px solid #ccc',
  background: 'linear-gradient(to bottom, #f0f0f0 0%, #ddd 50%, #ccc 100%)',
  padding: '8px 16px',
  borderRadius: '15px',
  cursor: 'pointer'
}} onClick={() => handleScoreIncrease(2)}>Double Peg</button>
      <button style={{
  width: '110px',
  marginBottom: '8px',
  border: '1px solid #ccc',
  background: 'linear-gradient(to bottom, #f0f0f0 0%, #ddd 50%, #ccc 100%)',
  padding: '8px 16px',
  borderRadius: '15px',
  cursor: 'pointer'
}} onClick={() => handleScoreIncrease(3)}>Three-Peg</button>
      <button style={{
  width: '110px',
  marginBottom: '8px',
  border: '1px solid #ccc',
  background: 'linear-gradient(to bottom, #f0f0f0 0%, #ddd 50%, #ccc 100%)',
  padding: '8px 16px',
  borderRadius: '15px',
  cursor: 'pointer'
}} onClick={() => handleScoreIncrease(4)}>Four-Peg</button>
<button style={{
  width: '110px',
  marginBottom: '8px',
  border: '1px solid #ccc',
  background: 'linear-gradient(to bottom, #f0f0f0 0%, #ddd 50%, #ccc 100%)',
  padding: '8px 16px',
  borderRadius: '15px',
  cursor: 'pointer'
}} onClick={() => handleScoreIncrease(5)}>Five-Peg</button>
<button style={{
  width: '110px',
  marginBottom: '8px',
  border: '1px solid #ccc',
  background: 'linear-gradient(to bottom, #f0f0f0 0%, #ddd 50%, #ccc 100%)',
  padding: '8px 16px',
  borderRadius: '15px',
  cursor: 'pointer'
}} onClick={() => handleScoreIncrease(6)}>3 of a kind</button>
<button style={{
  width: '110px',
  marginBottom: '8px',
  border: '1px solid #ccc',
  background: 'linear-gradient(to bottom, #f0f0f0 0%, #ddd 50%, #ccc 100%)',
  padding: '8px 16px',
  borderRadius: '15px',
  cursor: 'pointer'
}} onClick={() => handleScoreIncrease(12)}>4 of a kind</button>
    </div>
  );
};

export default ScoreBoard;