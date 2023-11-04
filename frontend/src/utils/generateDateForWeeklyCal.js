export const generateDateForWeeklyCal = (todayDate) => {
  const numberOfWeeks = 4;

  const arrayOfDatesForWeeklyCal = [];

  // generate prefix dates (last Monday to yesterday)

  for (let i = todayDate.day() - 1; i > 0; i--) {
    arrayOfDatesForWeeklyCal.push(todayDate.subtract(i, "day"));
  }

  // generate the dates of the next 4 weeks starting from today

  for (let i = 0; i < 7 * numberOfWeeks; i++) {
    arrayOfDatesForWeeklyCal.push(todayDate.add(i, "day"));
  }

  // generate suffix dates (dates from 4 weeks from today until the end of the last week)

  const lastDateAtWeek4 = arrayOfDatesForWeeklyCal.at(-1);

  for (let i = 1; i <= 7 - lastDateAtWeek4.day(); i++) {
    arrayOfDatesForWeeklyCal.push(lastDateAtWeek4.add(i, "day"));
  }

  return arrayOfDatesForWeeklyCal;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
