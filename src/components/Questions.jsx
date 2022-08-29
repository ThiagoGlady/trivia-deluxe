import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Answers from './Answers';
import getImageGravatarAPI from '../services/getImageGravatarAPI';

function Questions(props) {
  const { questions } = props;
  const defaultBorderStyle = { border: '3px solid white' };
  const initialNumberForCountDown = 30;
  const history = useHistory();
  const playerInfo = useSelector((store) => store.player);
  const playerImageSrc = getImageGravatarAPI(playerInfo.gravatarEmail);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [willButtonShowUp, setWillButtonShowUp] = useState(false);
  const [wrongAnswerColor, setWrongAnswerColor] = useState(defaultBorderStyle);
  const [rightAnswerColor, setRightAnswerColor] = useState(defaultBorderStyle);
  const [count, setCount] = useState(initialNumberForCountDown);
  const [disabledButtons, setDisableButtons] = useState(false);

  const goToNextQuestion = () => {
    const maxQuestionNumber = 4;
    if (currentQuestion < maxQuestionNumber) {
      setCurrentQuestion(currentQuestion + 1);
      setWillButtonShowUp(false);
      setWrongAnswerColor(defaultBorderStyle);
      setRightAnswerColor(defaultBorderStyle);
      setCount(initialNumberForCountDown);
      setDisableButtons(false);
    } else {
      const storagePlayerInfo = {
        name: playerInfo.name,
        score: playerInfo.score,
        picture: playerImageSrc,
      };
      const ranking = JSON.parse(localStorage.getItem('ranking'));
      ranking.push(storagePlayerInfo);
      console.log(ranking);
      localStorage.setItem('ranking', JSON.stringify(ranking));
      history.push('/feedback');
    }
  };

  return (
    <main>
      <section>
        <h3 data-testid="question-category">{ questions[currentQuestion].category }</h3>
      </section>
      <article data-testid="answer-options" style={ { color: '#495057' } }>
        <div className="card">
          <div className="card-header">
            <p data-testid="question-text">{ questions[currentQuestion].question }</p>
          </div>
          <Answers
            correctAnswer={ questions[currentQuestion].correct_answer }
            incorrectAnswers={ questions[currentQuestion].incorrect_answers }
            difficulty={ questions[currentQuestion].difficulty }
            showButton={ setWillButtonShowUp }
            showWrongAnswerColor={ setWrongAnswerColor }
            showRightAnswerColor={ setRightAnswerColor }
            wrongAnswerColor={ wrongAnswerColor }
            rightAnswerColor={ rightAnswerColor }
            count={ count }
            setCount={ setCount }
            setDisableButtons={ setDisableButtons }
            disabledButtons={ disabledButtons }
          />
        </div>
      </article>
      {
        willButtonShowUp && (
          <button
            type="button"
            onClick={ goToNextQuestion }
            data-testid="btn-next"
            className="mt-3 btn btn-primary"
          >
            Next
          </button>
        )
      }
    </main>
  );
}

Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Questions;
