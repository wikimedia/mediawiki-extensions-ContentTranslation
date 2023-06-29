/**
 * @param {string} timeStamp A timestamp in the following form in UTC: 20230614144524
 * @return {number} an integer representing how many days have passed since the given datetime
 */
const computeDaysPassedFromTimestamp = (timeStamp) => {
  // Convert the UTC string to a Date object
  const year = parseInt(timeStamp.slice(0, 4));
  const month = timeStamp.slice(4, 6) - 1; // Subtract 1 to account for zero-based months
  const day = parseInt(timeStamp.slice(6, 8));
  const hours = parseInt(timeStamp.slice(8, 10));
  const minutes = parseInt(timeStamp.slice(10, 12));
  const seconds = parseInt(timeStamp.slice(12, 14));

  const utcDate = new Date(Date.UTC(year, month, day, hours, minutes, seconds));

  // Calculate the difference in days
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - utcDate.getTime();

  return Math.round(timeDifference / (1000 * 3600 * 24));
};

/**
 * Given a timestamp string, this method returns an object
 * containing the information about how much time has passed since
 * the date of the given timestamp, based on the following logic:
 * 1. if the days passed are less than 30, it returns a object in
 * the following form: { postfix: 'days', value: integer }
 * 2. if the days passed are 30 or more, it calculates the months
 * passed. Then:
 *   a. If the months passed are less than 12, it returns an object
 *   in the following form: { postfix: 'months', value: integer }
 *   b. If the months passed are 12 or more, it returns an object
 *   in the following form: { postfix: 'years', value: integer }
 *
 * @param {string} timeStamp A timestamp in the following form in UTC: 20230614144524
 * @return {{postfix: "days"|"months"|"years", value: number}}
 */
const timeago = (timeStamp) => {
  const daysPassed = computeDaysPassedFromTimestamp(timeStamp);

  if (daysPassed < 30) {
    return { postfix: "days", value: daysPassed };
  } else {
    const monthsPassed = Math.round(daysPassed / 30);

    if (monthsPassed < 12) {
      return { postfix: "months", value: monthsPassed };
    }

    const yearsPassed = Math.round(monthsPassed / 12);

    return { postfix: "years", value: yearsPassed };
  }
};

export { timeago };
