export const SAVE_USER = 'SAVE_USER';
export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const REQUEST_ANSWER = 'REQUEST_ANSWER';

export const saveUser = (name, email) => ({
  type: SAVE_USER,
  name,
  email,
});

export const requestAnswer = (results) => ({
  type: REQUEST_ANSWER,
  results,
});

export const requestApi = (token) => ({
  type: REQUEST_TOKEN,
  token,
});
// let token = '';
export const fetchApiToken = () => async (dispatch) => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  // token = data.token;
  dispatch(requestApi(data.token));
};

export const fetchApiAnswer = (token) => async (dispatch) => {
  const QTDA_ANSWER = 5;
  const NUMBER_INVALID = 3;
  const response = await fetch(`https://opentdb.com/api.php?amount=${QTDA_ANSWER}&token=${token}`);
  const data = await response.json();
  console.log(data.results);
  if (data.response_code === NUMBER_INVALID) {
    dispatch(fetchApiToken());
    // dispatch(fetchApiAnswer());
  } else {
    dispatch(requestAnswer(data.results));
  }
};
