export const SAVE_USER = 'SAVE_USER';
export const REQUEST_TOKEN = 'REQUEST_TOKEN';

export const saveUser = (name, email) => ({
  type: SAVE_USER,
  name,
  email,
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
