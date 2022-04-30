import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Questions from '../components/Questions';
import { storeToken } from '../redux/actions';
import getQuestionsAPI from '../services/getQuestionsAPI';
import getTokenTriviaAPI from '../services/getTokenTriviaAPI';

function Game() {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store);

  const [questions, setQuestions] = useState({});

  useEffect(() => {
    const codeForExpiredToken = 3;
    const getQuestions = async () => {
      let gotQuestions = await getQuestionsAPI(token);
      if (gotQuestions.response_code === codeForExpiredToken) {
        const newToken = await getTokenTriviaAPI();
        dispatch(storeToken(newToken));
        gotQuestions = await getQuestionsAPI(newToken);
      }
      setQuestions(gotQuestions);
    };
    getQuestions();
  }, [token, dispatch]);

  return (
    <div>
      <Header />
      {
        questions.results && (
          <Questions
            questions={ questions.results }
          />
        )
      }
    </div>
  );
}

export default Game;
