import { REQUEST_TOKEN } from '../actions';

const INITIAL_STATE = '';

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_TOKEN:
    return action.token;
  default: return state;
  }
};

export default tokenReducer;
