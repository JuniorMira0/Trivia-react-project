const RANKING_TRIVIA = 'RANKING_TRIVIA';

export const addRanking = (user) => {
  const list = JSON.parse(localStorage.getItem(RANKING_TRIVIA));
  const newList = !list ? [user] : [...list, user];
  localStorage.setItem(RANKING_TRIVIA, JSON.stringify(newList));
};

export const getRanking = () => {
  const list = JSON.parse(localStorage.getItem(RANKING_TRIVIA));
  return list;
};
