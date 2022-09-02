import React from 'react';
import { Link } from 'react-router-dom';

function Ranking() {
  return (
    <>
      <h3 data-testid="ranking-title">
        Tela de ranking
      </h3>
      <Link data-testid="btn-go-home" to="/">Play Again</Link>
    </>
  );
}

export default Ranking;
