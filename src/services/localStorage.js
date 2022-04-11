const RANKING_TRIVIA = 'RANKING_TRIVIA';

export const addRanking = (user) => {
  const list = JSON.parse(localStorage.getItem(RANKING_TRIVIA));
  const newList = [...list, user];
  localStorage.setItem(RANKING_TRIVIA, newList);
};

export const getRanking = () => {
  const list = JSON.parse(localStorage.getItem(RANKING_TRIVIA));
  return list;
};
