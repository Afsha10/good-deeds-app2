export const generateDateForWeeklyCal = (todayDate) => {
  const numberOfWeeks = 4;
  const firstDateOfCurrentMonth = todayDate.startOf("month");
  const lastDateOfCurrentMonth = todayDate.endOf("month");
  const firstDateOfNextMonth = firstDateOfCurrentMonth.add(1, "month");
  const dateAfterFourWeeksFromToday = todayDate.add(numberOfWeeks, "week");

  const arrayOfDatesForWeeklyCal = [];

  console.log("date after 4 weeks from today -->", dateAfterFourWeeksFromToday);
  console.log("lastDateOfCurrentMonth -->", lastDateOfCurrentMonth);
  console.log("todayDate -->", todayDate);

  // generate prefix dates

  for (let i = 0; i < todayDate.day(); i++) {
    arrayOfDatesForWeeklyCal.push(todayDate.day(i));
  }

  // generate the upcoming dates from this month

  for (let i = todayDate.date(); i <= lastDateOfCurrentMonth.date(); i++) {
    arrayOfDatesForWeeklyCal.push(todayDate.date(i));
  }

  // generate the upcoming dates from next month

  for (
    let i = firstDateOfNextMonth.date();
    i < dateAfterFourWeeksFromToday.date();
    i++
  ) {
    arrayOfDatesForWeeklyCal.push(firstDateOfNextMonth.date(i));
  }

  // generate suffix dates

  const remainingDates =
    numberOfWeeks + 1 * 7 - arrayOfDatesForWeeklyCal.length;

  for (
    let i = dateAfterFourWeeksFromToday.date();
    i < dateAfterFourWeeksFromToday.date() + remainingDates;
    i++
  ) {
    arrayOfDatesForWeeklyCal.push(dateAfterFourWeeksFromToday.date(i));
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
