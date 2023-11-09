import React, { useState, useEffect } from "react";
import {
  generateDateForMonthlyCal,
  months,
} from "../../utils/generateDateForMonthlyCal";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import MonthlyDateBox from "../MonthlyDateBox";
import BookingInfoContainer from "../BookingInfoContainer";
import { baseUrl } from "../../config";
import "./monthlyCalendar.css";

function MonthlyCalendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/sessions`)
      .then((response) => response.json())
      .then((data) => {
        setSessions(data);
      });
  }, []);

  // if (!sessions.length) {
  if (sessions.length === 0) {
  return (
    <div className="flex flex-col lg:flex-row sm:mx-auto sm:mt-5 sm:gap-1 items-center lg:items-start lg:mt-2 lg:p-2">
      <div className="ring">
        Loading
        <span className="animation"></span>
      </div>
    </div>
  );
  }

  return (
    <div className="flex flex-col lg:flex-row sm:mx-auto sm:mt-5 sm:gap-1 items-center lg:items-start lg:mt-2 lg:p-2">
      <div className="w-full py-2 bg-blue-gray-50 lg:p-4">
        {/* displaying the month and year*/}
        <div className="flex justify-between px-6 ">
          <p className="font-semibold lg:text-xl">
            {months[today.month()]} {today.year()}
          </p>
          <div className="flex items-center gap-5">
            {/* Button showing previous month */}
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer"
              onClick={() => setToday(today.month(today.month() - 1))}
            />
            {/* button taking us to today */}
            <p
              className="cursor-pointer bg-red-400 p-2 text-white lg:text-xl"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </p>
            {/* Button showing previous month */}
            <GrFormNext
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        {/* getting the days */}
        <div className="w-full grid grid-cols-7 text-gray-800 px-8 sm:px-8 lg:text-lg lg:my-1 lg:mx-4">
          {days.map((day, index) => {
            return (
              <p key={index} className="h-14 grid place-content-center text-sm">
                {day}
              </p>
            );
          })}
        </div>
        {/* generating date in the monthly calendar */}
        <div className="w-full lg:max-w-full grid grid-cols-7 px-8">
          {generateDateForMonthlyCal(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <MonthlyDateBox
                  key={index}
                  index={index}
                  date={date}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  currentMonth={currentMonth}
                  today={today}
                  sessions={sessions}
                  setSessions={setSessions}
                />
              );
            }
          )}
        </div>
      </div>
      <BookingInfoContainer
        sessions={sessions}
        setSessions={setSessions}
        selectedDate={selectedDate}
      />
    </div>
  );
}

export default MonthlyCalendar;
