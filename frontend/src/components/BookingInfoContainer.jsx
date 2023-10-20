import { React, useState } from "react";
import SessionStatusBox from "./SessionStatusBox";
import YourBookingsDisplayBox from "./YourBookingsDisplayBox";

function BookingInfoContainer({ selectedDate, sessions, setSessions }) {
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  return (
    <div className="m-2 lg:m-0 py-2 lg:p-0 mx-8 lg:mx-2 sm:py-2 flex flex-col gap-2 w-full lg:max-w-fit">
      <div className="bg-deep-orange-900 p-2 text-white">
        <p className="text-xl text-center font-bold ">Booking Information</p>
      </div>
      <SessionStatusBox
        selectedDate={selectedDate}
        sessions={sessions}
        setSessions={setSessions}
        selectedVolunteer={selectedVolunteer}
        setSelectedVolunteer={setSelectedVolunteer}
      />
      <YourBookingsDisplayBox
        sessions={sessions}
        setSessions={setSessions}
        selectedVolunteer={selectedVolunteer}
        setSelectedVolunteer={setSelectedVolunteer}
      />
    </div>
  );
}

export default BookingInfoContainer;
