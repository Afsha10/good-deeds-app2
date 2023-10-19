import { React, useState } from "react";
import MonthlyCalendar from "./MonthlyCalendar";
import WeeklyCalendar from "./WeeklyCalendar";
import CalendarViewingDropDown from "./CalendarViewingDropDown";

function CalendarView() {
  const [calendarType, setCalendarType] = useState("monthly");
  return (
    <div>
      <CalendarViewingDropDown
        calendarType={calendarType}
        setCalendarType={setCalendarType}
      />
      {calendarType === "monthly" ? <MonthlyCalendar /> : <WeeklyCalendar />}
    </div>
  );
}

export default CalendarView;
