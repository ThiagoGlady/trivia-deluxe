import React from 'react';
import PropTypes from 'prop-types';

function Answers(props) {
  const { correctAnswer, incorrectAnswers } = props;

  return (
    <>
      <button
        type="button"
      >
        { correctAnswer }
      </button>
      <button
        type="button"
      >
        { incorrectAnswers[0] }
      </button>
      {
        console.log(props)
      }
    </>
  );
}

Answers.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Answers;
