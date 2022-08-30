const he = require('he');

const getEncodedQuestions = async (token) => {
  const url = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const request = await fetch(url);
  const data = await request.json();
  return data;
};

const getQuestionsAPI = async (token) => {
  const data = await getEncodedQuestions(token);
  const newResult = data.results.map((qst) => (
    {
      ...qst,
      question: he.decode(qst.question),
    }
  ));
  data.results = newResult;
  return data;
};

export default getQuestionsAPI;
