import getTokenTriviaAPI from '../../services/getTokenTriviaAPI';

const playerLoginTokenSuccess = (gravatarEmail, name) => (
  { type: 'SAVE_LOGIN', gravatarEmail, name }
);

const playerLoginTokenError = (gravatarEmail, name) => (
  { type: 'SAVE_LOGIN_TOKEN_ERROR', gravatarEmail, name }
);

export const storeToken = (token) => (
  { type: 'SAVE_TOKEN', token }
);

export const newAssertion = (score) => (
  { type: 'NEW_ASSERTION', score }
);

export function playerLogin(email, name) {
  return async (dispatch) => {
    try {
      const { token } = await getTokenTriviaAPI();
      dispatch(playerLoginTokenSuccess(email, name));
      dispatch(storeToken(token));
    } catch (error) {
      dispatch(playerLoginTokenError(email, name));
    }
  };
}
