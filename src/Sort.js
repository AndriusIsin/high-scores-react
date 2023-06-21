const SortAscending = (score1, score2) => {
  if (score1.s < score2.s) {
    return -1;
  } else if (score1.s > score2.s) {
    return 1;
  } else {
    return 0;
  }
};
const SortDescending = (score1, score2) => {
  if (score1.s > score2.s) {
    return -1;
  } else if (score1.s < score2.s) {
    return 1;
  } else {
    return 0;
  }
};
export { SortDescending, SortAscending };
