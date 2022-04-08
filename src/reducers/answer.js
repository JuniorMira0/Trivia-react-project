import { REQUEST_ANSWER, LOADING } from '../actions';

const INITIAL_STATE = {
  loading: true,
  response_code: '',
  results: [],
};

const answerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING:
    return { ...state, loading: true };
  case REQUEST_ANSWER:
    return {
      response_code: action.results.response_code,
      results: action.results.results,
      loading: false,
    };
  default:
    return state;
  }
};

export default answerReducer;
