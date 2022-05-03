import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
      </section>
    </>
  );
}

export default Feedback;
