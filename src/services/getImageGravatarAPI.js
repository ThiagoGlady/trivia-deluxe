import md5 from 'crypto-js/md5';

const correctEmail = (input) => ((input.trim()).toLowerCase());

const getImageGravatarAPI = (input) => {
  const correctInput = correctEmail(input);
  const hash = md5(correctInput).toString();
  const urlForImage = `https://www.gravatar.com/avatar/${hash}`;
  return urlForImage;
};

export default getImageGravatarAPI;
