import { combineReducers } from 'redux';
import player from './user';
import token from './token';
import answer from './answer';

const rootReducer = combineReducers({
  player,
  token,
  answer,
});

export default rootReducer;
