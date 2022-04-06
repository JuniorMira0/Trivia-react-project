import { combineReducers } from 'redux';
import user from './user';
import token from './token';
import answer from './answer';

const rootReducer = combineReducers({
  user,
  token,
  answer,
});

export default rootReducer;
