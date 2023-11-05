import React from "react";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter.js";
import ConfirmationDialogueBoxMain from "./ConfirmationDialogueBox/DialogueBoxMain.jsx";

function SessionStatusBox({
  selectedDate,
  selectedVolunteer,
  setSelectedVolunteer,
  sessions,
  setSessions,
}) {
  const matchingSessions = sessions.filter(
    (session) => session.formatted_date === selectedDate.format("DD-MM-YYYY")
  );

  return (
    <div className="px-8 sm:px-12 sm:p-4 bg-black lg:text-lg text-white">
      <p className="font-semibold py-2 pb-3">
        Sessions Status for {selectedDate.toDate().toDateString()}:
      </p>
      {matchingSessions.length === 0 && <p>No sessions exist for this date</p>}
      {matchingSessions.length > 0 &&
        matchingSessions.map((session, index) => (
          <div key={index}>
            <div>
              {session.volunteer_id != null ? (
                `${capitalizeFirstLetter(session.session_type)}- ${
                  session.volunteer_first_name
                } ${session.volunteer_last_name} has booked this session`
              ) : (
                <div>
                  {capitalizeFirstLetter(session.session_type)}- This session is
                  available to book
                  <ConfirmationDialogueBoxMain
                    selectedDate={selectedDate}
                    sessionId={session.session_id}
                    selectedVolunteer={selectedVolunteer}
                    setSelectedVolunteer={setSelectedVolunteer}
                    sessions={sessions}
                    setSessions={setSessions}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

export default SessionStatusBox;
