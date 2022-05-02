import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import shuffleArray from '../functions/shuffleArray';
import prepareScore from '../functions/prepareScore';
import { newAssertion } from '../redux/actions';

const intervalOfCountdown = 1000;

function Answers(props) {
  const {
    correctAnswer,
    incorrectAnswers,
    showButton,
    showWrongAnswerColor,
    showRightAnswerColor,
    wrongAnswerColor,
    rightAnswerColor,
    setCount,
    count,
    setDisableButtons,
    disabledButtons,
    difficulty,
  } = props;

  const dispatch = useDispatch();

  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const correctAnswerCheck = correctAnswer;
  let incorrectAnswerIndex = 0;

  useEffect(() => {
    const answersArray = [correctAnswer];
    incorrectAnswers.forEach((incorrectAnswer, index) => {
      answersArray[index + 1] = incorrectAnswer;
    });
    setShuffledAnswers(shuffleArray(answersArray));
  }, [correctAnswer, incorrectAnswers]);

  useEffect(() => {
    const intervalCount = setTimeout(() => {
      setCount(count - 1);
    }, intervalOfCountdown);
    if (disabledButtons === true) clearTimeout(intervalCount);
    if (count === 0) {
      clearTimeout(intervalCount);
      setDisableButtons(true);
      showRightAnswerColor({ border: '3px solid rgb(6, 240, 15)' });
      showWrongAnswerColor({ border: '3px solid rgb(255, 0, 0)' });
      showButton(true);
    }
    return () => clearTimeout(intervalCount);
  }, [
    setCount,
    count,
    showRightAnswerColor,
    showWrongAnswerColor,
    showButton,
    setDisableButtons,
    disabledButtons,
  ]);

  const checkIfCorrect = ({ target }) => {
    showButton(true);
    setDisableButtons(true);
    showRightAnswerColor({ border: '3px solid rgb(6, 240, 15)' });
    showWrongAnswerColor({ border: '3px solid rgb(255, 0, 0)' });
    const { value } = target;
    if (value === 'right') {
      const roundScore = prepareScore(difficulty, count);
      dispatch(newAssertion(roundScore));
    }
  };

  return (
    <>
      {
        shuffledAnswers.map((answer, index) => {
          if (answer === correctAnswerCheck) {
            return (
              <button
                type="button"
                key={ index }
                style={ rightAnswerColor }
                value="right"
                data-testid="correct-answer"
                onClick={ checkIfCorrect }
                disabled={ disabledButtons }
              >
                { answer }
              </button>
            );
          }
          incorrectAnswerIndex += 1;
          return (
            <button
              type="button"
              key={ index }
              style={ wrongAnswerColor }
              value="wrong"
              data-testid={ `wrong-answer-${incorrectAnswerIndex - 1}` }
              onClick={ checkIfCorrect }
              disabled={ disabledButtons }
            >
              { answer }
            </button>
          );
        })
      }
      <p>
        { count }
      </p>
    </>
  );
}

Answers.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  showButton: PropTypes.func.isRequired,
  showWrongAnswerColor: PropTypes.func.isRequired,
  showRightAnswerColor: PropTypes.func.isRequired,
  wrongAnswerColor: PropTypes.objectOf(PropTypes.string).isRequired,
  rightAnswerColor: PropTypes.objectOf(PropTypes.string).isRequired,
  setCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  setDisableButtons: PropTypes.func.isRequired,
  disabledButtons: PropTypes.bool.isRequired,
  difficulty: PropTypes.string.isRequired,
};

export default Answers;
