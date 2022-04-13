import { REQUEST_ANSWER, RESET_ANSWER } from '../actions';

const INITIAL_STATE = {
  response_code: '',
  results: [],
};

const answerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_ANSWER:
    return {
      response_code: action.results.response_code,
      results: action.results.results,
      loading: false,
    };
  case RESET_ANSWER:
    return { ...state, results: [] };
  default:
    return state;
  }
};

export default answerReducer;
