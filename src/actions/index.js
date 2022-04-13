export const SAVE_USER = 'SAVE_USER';
export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const REQUEST_ANSWER = 'REQUEST_ANSWER';
export const NEWSCORE = 'NEWSCORE';
export const SCORE_BOARD = 'SCORE_BOARD';
export const RESET_ANSWER = 'RESET_ANSWER';
export const RESET_TOKEN = 'RESET_TOKEN';

export const saveUser = (name, email) => ({
  type: SAVE_USER,
  name,
  email,
});

export const resetScore = (score) => ({
  type: NEWSCORE,
  score,
});

export const requestAnswer = (results) => ({
  type: REQUEST_ANSWER,
  results,
});

export const resetAnswer = () => ({
  type: RESET_ANSWER,
});

export const requestApi = (token) => ({
  type: REQUEST_TOKEN,
  token,
});

export const fetchApiToken = () => async (dispatch) => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  dispatch(requestApi(data.token));
};

export const resetToken = () => ({
  type: RESET_TOKEN,
});

export const fetchApiAnswer = (token) => async (dispatch) => {
  const QTDA_ANSWER = 5;
  const NUMBER_INVALID = 3;
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=${QTDA_ANSWER}&token=${token}`);
    const data = await response.json();
    if (data.response_code === NUMBER_INVALID) {
      const newResponse = await fetch('https://opentdb.com/api_token.php?command=request');
      const newData = await newResponse.json();
      dispatch(requestApi(newData.token));
    } else {
      dispatch(requestAnswer(data));
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleScore = (score) => ({
  type: SCORE_BOARD,
  score,
});
