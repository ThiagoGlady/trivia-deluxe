// import for tests here
// import fetch from 'node-fetch';

const getQuestionsAPI = async (token) => {
  const url = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const request = await fetch(url);
  const data = await request.json();
  return data;
};

export default getQuestionsAPI;
