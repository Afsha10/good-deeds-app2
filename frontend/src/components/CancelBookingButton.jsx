import React from "react";
// import ConfirmationDialogueBoxTom from "./ConfirmationDialogueBoxTom";

function CancelBookingButton({ selectedSession, allSessions, setSessions }) {
  function handleClick() {
    const updatedSessions = allSessions.map((session) => {
      if (session.session_id === selectedSession.session_id) {
        session.volunteer_id = null;
      }
      return session;
    });
    setSessions(updatedSessions);
  }

  return (
    <button
      className="m-2 rounded bg-brown-300 px-4 py-2 font-bold text-red-900 transition-colors duration-200 hover:bg-red-100 active:bg-red-500 sm:rounded-lg sm:px-2 sm:py-2"
      onClick={handleClick}
    >
      Cancel
    </button>
  );
}

export default CancelBookingButton;
