import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Answers from './Answers';

function Questions(props) {
  const { questions } = props;
  const defaultBorderStyle = { border: '3px solid white' };
  const initialNumberForCountDown = 30;
  const history = useHistory();

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
      history.push('/feedback');
    }
  };

  return (
    <main>
      <section>
        <h3 data-testid="question-category">{ questions[currentQuestion].category }</h3>
        <p data-testid="question-text">{ questions[currentQuestion].question }</p>
      </section>
      <article data-testid="answer-options">
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
      </article>
      {
        willButtonShowUp && (
          <button
            type="button"
            onClick={ goToNextQuestion }
            data-testid="btn-next"
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
