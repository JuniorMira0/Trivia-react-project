const RANKING_TRIVIA = 'RANKING_TRIVIA';

if (!localStorage.getItem(RANKING_TRIVIA)) {
  localStorage.setItem(RANKING_TRIVIA, JSON.stringify([]));
}

export const addRanking = (user) => {
  const list = JSON.parse(localStorage.getItem(RANKING_TRIVIA));
  const newList = [...list, user];
  localStorage.setItem(RANKING_TRIVIA, newList);
};

export default addRanking;
