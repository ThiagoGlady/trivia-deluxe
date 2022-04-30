import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers';

function Questions(props) {
  const { questions } = props;

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const goToNextQuestion = () => {
    const maxQuestionNumber = 4;
    if (currentQuestion < maxQuestionNumber) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log('da quinta pergunta não passa por enquanto');
    }
  };

  return (
    <main>
      <section>
        <h3>{ questions[currentQuestion].category }</h3>
        <p>{ questions[currentQuestion].question }</p>
      </section>
      <article>
        <Answers
          correctAnswer={ questions[currentQuestion].correct_answer }
          incorrectAnswers={ questions[currentQuestion].incorrect_answers }
        />
      </article>
      <button
        type="button"
        onClick={ goToNextQuestion }
      >
        Próxima
      </button>
    </main>
  );
}

Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Questions;
