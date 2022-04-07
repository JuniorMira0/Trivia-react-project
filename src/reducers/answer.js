import { REQUEST_ANSWER } from '../actions';

/*
  "results":[
     {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"easy",
        "question":"What is the first weapon you acquire in Half-Life?",
        "correct_answer":"A crowbar",
        "incorrect_answers":[
           "A pistol",
           "The H.E.V suit",
           "Your fists"
        ]
     }
  ]
*/

const INITIAL_STATE = {
  results: [],
};

const answerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_ANSWER:
    return {
      ...state,
      results: action.results,
    };
  default:
    return state;
  }
};

export default answerReducer;
