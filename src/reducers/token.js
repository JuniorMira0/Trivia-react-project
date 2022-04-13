import { REQUEST_TOKEN, RESET_TOKEN } from '../actions';

const INITIAL_STATE = '';

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_TOKEN:
    return action.token;
  case RESET_TOKEN:
    return '';
  default: return state;
  }
};

export default tokenReducer;
