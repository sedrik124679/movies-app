// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};
// Locale storage
export const isPersistedState = stateName => {
  const sessionState = localStorage.getItem(stateName)
  return sessionState && JSON.parse(sessionState)
};
// Average rating in account
// export const averageRating = filmsArray => {
//   let average = 0;
//   filmsArray.map(film => {
//     average += film.rating
//   })
//   return average / filmsArray.length
// }