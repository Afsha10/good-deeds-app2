import React from "react";
import generateDate from "../utils/generateDate";
import dayjs from "dayjs";
import conditions from "../utils/conditions";

function Calendar() {
  const firstDateOfMonth = dayjs().year(2023).month(9).startOf("month");
  console.log("first day of month", firstDateOfMonth);

  console.log(generateDate());

  const days = ["S", "M", "T", "W", "T", "F", "S"];

  //   const days = [
  //     "Saturday",
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //   ];

  return (
    <div className="w-96 h-96 ">
      <div className="w-full grid grid-cols-7">
        {days.map((day, index) => {
          return (
            <h1 key={index} className="h-14 grid place-content-center text-sm">
              {day}
            </h1>
          );
        })}
      </div>
      <div className="w-full grid grid-cols-7">
        {generateDate().map(({ date, currentMonth, today }, index) => {
          return (
            <div key={index} className="h-14 border grid place-content-center text-sm">
              <h1 className={conditions(currentMonth ? "" : "text-gray-400", today ? "bg-red-600 text-white" : "", "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer")}>
                {date.date()}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
