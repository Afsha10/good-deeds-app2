import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import VolunteerDropDown from "../VolunteerDropDown";
import { baseUrl } from "../../config";

function AlertForFutureSessions({
  sessions,
  sessionId,
  selectedVolunteer,
  setOpen,
  setSelectedVolunteer,
  setSessions,
  open,
}) {
  const cancelButtonRef = useRef(null);

  function buttonClick() {
    const updatedSessions = sessions.map((session) => {
      if (session.session_id === sessionId) {
        session.volunteer_id = selectedVolunteer.id;
        session.volunteer_first_name = selectedVolunteer.first_name;
        session.volunteer_last_name = selectedVolunteer.last_name;

        const postNewBookingData = {
          session_id: sessionId,
          volunteer_id: selectedVolunteer.id,
        };

        fetch(`${baseUrl}/bookings/create`, {
          method: "post",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postNewBookingData),
        }).then((response) => console.log("response -->", response));
      }
      //alert("You are booked for this session")
      return session;
    });
    setSessions(updatedSessions);
    setOpen(false);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Confirm your booking
                      </Dialog.Title>
                      <div className="mt-2">
                        <VolunteerDropDown
                          selectedVolunteer={selectedVolunteer}
                          setSelectedVolunteer={setSelectedVolunteer}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 items-center">
                  <button
                    type="button"
                    className="mt-3 inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-red-800 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="ml-3 inline-flex justify-center rounded-md bg-light-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 sm:ml-3 sm:w-auto"
                    onClick={buttonClick}
                  >
                    Confirm
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default AlertForFutureSessions;
