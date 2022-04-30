// import for tests here
// import fetch from 'node-fetch';

const getTokenTriviaAPI = async () => {
  const url = 'https://opentdb.com/api_token.php?command=request';
  const request = await fetch(url);
  const data = await request.json();
  return data;
};

export default getTokenTriviaAPI;
