import { combineReducers } from 'redux';
import player from './player';
import token from './saveToken';

const rootReducer = combineReducers({
  player,
  token,
});

export default rootReducer;
