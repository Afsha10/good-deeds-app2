import React, { useState } from "react";
import dayjs from "dayjs";
import AlertForFutureSessions from "./AlertForFutureSessions";
import AlertForPastSessions from "./AlertForPastSessions";

export default function ConfirmationDialogueBox({
  sessionId,
  sessions,
  setSessions,
  selectedVolunteer,
  setSelectedVolunteer,
  selectedDate,
}) {
  const [open, setOpen] = useState(false);

  const isPreviousDate = selectedDate.isBefore(dayjs().subtract(1, "day"));
  return (
    <>
      <button
        type="button"
        className="text-white bg-gradient-to-tl from-orange-300 to-blue-900 hover:bg-cyan-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-7 py-2.5 m-1 sm:m-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={() => setOpen(true)}
      >
        Book
      </button>
      {isPreviousDate ? (
        <AlertForPastSessions open={open} setOpen={setOpen} />
      ) : (
        <AlertForFutureSessions
          sessions={sessions}
          sessionId={sessionId}
          selectedVolunteer={selectedVolunteer}
          setOpen={setOpen}
          open={open}
          setSelectedVolunteer={setSelectedVolunteer}
          setSessions={setSessions}
        />
      )}
    </>
  );
}

// on click of confirm

/// PUT https://[BASE_URL]/sessions/{sessionId}
// {
//   "volunteerId": selectedVolunteer.id
// }
