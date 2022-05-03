import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const minimumAssertions = 3;

function Feedback() {
  const playerInfo = useSelector((store) => store.player);

  const [playerMessage, setPlayerMessage] = useState('');

  useEffect(() => {
    if (playerInfo.assertions < minimumAssertions) {
      setPlayerMessage('Could be better...');
    } else {
      setPlayerMessage('Well Done!');
    }
  }, [playerInfo]);

  return (
    <>
      <Header />
      <section>
        <p
          data-testid="feedback-text"
        >
          {playerMessage}
        </p>
        <p data-testid="feedback-total-score">
          {playerInfo.score}
        </p>
        <p data-testid="feedback-total-question">
          {playerInfo.assertions}
        </p>
      </section>
      <Link data-testid="btn-play-again" to="/">Play Again</Link>
      <Link data-testid="btn-ranking" to="/ranking">Ranking</Link>
    </>
  );
}

export default Feedback;
