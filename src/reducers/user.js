import { SAVE_USER, NEWSCORE, SCORE_BOARD } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_USER:
    return {
      ...state,
      name: action.name,
      gravatarEmail: action.email,
    };
  case NEWSCORE:
    return {
      ...state,
      score: action.score,
  case SCORE_BOARD:
    return {
      ...state,
      score: state.score + action.score,
    };
  default:
    return state;
  }
};

export default user;
