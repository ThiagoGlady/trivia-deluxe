const INITIAL_STATE = {
  gravatarEmail: '',
  name: '',
  assertions: 0,
  score: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_LOGIN':
    return {
      ...state,
      gravatarEmail: action.gravatarEmail,
      name: action.name,
    };
  case 'NEW_ASSERTION':
    return {
      ...state,
      assertions: state.assertions + 1,
      score: state.score + action.score,
    };
  default:
    return state;
  }
};

export default player;
