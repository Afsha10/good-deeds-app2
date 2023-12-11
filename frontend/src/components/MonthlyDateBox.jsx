import React from "react";
import conditionalClasses from "../utils/conditionalClasses";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";

function MonthlyDateBox({
  index,
  date,
  selectedDate,
  setSelectedDate,
  currentMonth,
  today,
  sessions,
}) {
  const stringDate = date.format("DD-MM-YYYY");
  const existingSessions = sessions.filter(
    (session) => stringDate === session.formatted_date
  );
  const existingMorningSession = existingSessions.find(
    (session) => session.session_type === "morning"
  );
  const existingEveningSession = existingSessions.find(
    (session) => session.session_type === "evening"
  );

  return (
    <button
      key={index}
      className={conditionalClasses(
        "hover:bg-black hover:text-white transition-all cursor-pointer border border-blue-gray-100 text-sm grid grid-cols-2 border-spacing-1 sm:border p-1 w-full lg:text-lg lg:mx-4",
        currentMonth ? "" : "text-gray-400",
        today ? "bg-red-400 text-white" : "",
        selectedDate.toDate().toDateString() === date.toDate().toDateString()
          ? "bg-black text-white"
          : ""
      )}
      onClick={() => {
        setSelectedDate(date);
      }}
    >
      <p>{date.date()}</p>
      <div className="grid grid-col sm:p-2">
        <div className={existingMorningSession ? "block" : "hidden"}>
          {existingMorningSession?.volunteer_id ? (
            <LightModeRoundedIcon
              sx={{
                color: "gray",
              }}
              fontSize="string"
            />
          ) : (
            <LightModeRoundedIcon
              sx={{
                color: "orange",
              }}
              fontSize="small"
            />
          )}
        </div>
        <div className={existingEveningSession ? "block" : "hidden"}>
          {existingEveningSession?.volunteer_id ? (
            <NightlightRoundSharpIcon
              sx={{
                color: "gray",
              }}
              fontSize="string"
            />
          ) : (
            <NightlightRoundSharpIcon
              sx={{
                color: "blue",
              }}
              fontSize="string"
            />
          )}
        </div>
      </div>
    </button>
  );
}

export default MonthlyDateBox;
