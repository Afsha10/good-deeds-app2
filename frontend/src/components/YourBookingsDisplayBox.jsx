import React from "react";
import VolunteerDropDown from "./VolunteerDropDown";
import CancelBookingButton from "./CancelBookingButton";

function YourBookingsDisplayBox({
  sessions,
  setSessions,
  selectedVolunteer,
  setSelectedVolunteer,
}) {
  return (
    <div className="px-8 p-3 sm:p-4 bg-red-900 text-white font-bold sm:px-12 lg:text-lg">
      <p>See your booked session(s):</p>
      <VolunteerDropDown
        selectedVolunteer={selectedVolunteer}
        setSelectedVolunteer={setSelectedVolunteer}
      />
      <ul>
        {selectedVolunteer
          ? sessions
              .filter(
                (session) => session.volunteer_id === selectedVolunteer.id
              )
              .map((session, index) => (
                <li key={index}>
                  You are booked for {session.formatted_date}{" "}
                  {session.session_type} session
                  <CancelBookingButton
                    selectedSession={session}
                    allSessions={sessions}
                    setSessions={setSessions}
                  />
                </li>
              ))
          : ""}
      </ul>
    </div>
  );
}

export default YourBookingsDisplayBox;
