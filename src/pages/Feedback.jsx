/* eslint-disable react/jsx-max-depth */
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
      setPlayerMessage('Well done!');
    }
  }, [playerInfo]);

  useEffect(() => { document.body.style.backgroundColor = '#290661'; }, []);

  return (
    <div className="vh-100">
      <div className="container text-white p-5">
        <Header />
        <section className="">
          <div
            className="row justify-content-center rounded"
            style={ { backgroundColor: '#140330' } }
          >
            <div className="col-auto">
              <div className="row justify-content-center mt-3">
                <div className="col-auto">
                  <p className="fs-4">
                    Thiago says,
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <p data-testid="feedback-text" className="fs-1">
                    {playerMessage}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={ { backgroundColor: '#8540f5' } }
            className="p-2 rounded mt-3"
          >
            <p data-testid="feedback-total-score" className="mt-1 fs-4">
              <span>All your score this time: </span>
              {playerInfo.score}
            </p>
            <hr style={ { backgroundColor: 'black' } } className="p-1" />
            <p data-testid="feedback-total-question" className="mb-1 fs-4">
              <span>Number of correct shots: </span>
              {playerInfo.assertions}
            </p>
          </div>
        </section>
        <div className="row justify-content-around gap-3 text-center mt-3">
          <Link
            data-testid="btn-play-again"
            to="/"
            className="col btn btn-light"
          >
            Play Again
          </Link>
          <Link
            data-testid="btn-ranking"
            to="/ranking"
            className="col btn btn-light"
          >
            Ranking
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
