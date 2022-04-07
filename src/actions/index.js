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

export const fetchApiToken = () => async (dispatch) => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  dispatch(requestApi(data.token));
};

export const fetchApiAnswer = (token) => async (dispatch) => {
  const QTDA_ANSWER = 5;
  const NUMBER_INVALID = 3;
  let response = await fetch(`https://opentdb.com/api.php?amount=${QTDA_ANSWER}&token=${token}`);
  let data = await response.json();
  if (data.response_code === NUMBER_INVALID) {
    const newToken = await dispatch(fetchApiToken());
    response = await fetch(`https://opentdb.com/api.php?amount=${QTDA_ANSWER}&token=${newToken}`);
    data = await response.json();
  }
  return dispatch(requestAnswer(data.results));
};
