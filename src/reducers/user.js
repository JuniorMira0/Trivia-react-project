import { SAVE_USER, NEWSCORE } from '../actions';
/*
A chave player deve conter a seguinte estrutura:
{
  name: nome-da-pessoa,
  assertions: número-de-acertos,
  score: pontuação,
  gravatarEmail: email-da-pessoa,
}
*/
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
    };
  default:
    return state;
  }
};

export default user;
