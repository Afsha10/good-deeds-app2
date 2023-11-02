import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import volunteers from "../volunteersdata.json";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function VolunteerDropDown({
  selectedVolunteer,
  setSelectedVolunteer,
}) {
  return (
    <Listbox value={selectedVolunteer} onChange={setSelectedVolunteer}>
      {({ open }) => (
        <>
          {/* <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
            Assigned to
          </Listbox.Label> */}
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-deep-orange-50 py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-deep-orange-200 sm:text-sm sm:leading-6 my-3">
              {selectedVolunteer ? (
                <span className="flex items-center">
                  <img
                    src={selectedVolunteer.photo}
                    alt=""
                    className="h-5 w-5 flex-shrink-0 rounded-full"
                  />
                  <span className="ml-3 block truncate">
                    {selectedVolunteer.first_name} {selectedVolunteer.last_name}
                  </span>
                </span>
              ) : (
                <span className="ml-3 block truncate">
                  Please select your name
                </span>
              )}
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                🔽
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {volunteers.map((volunteer) => (
                  <Listbox.Option
                    key={volunteer.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "bg-light-blue-800 text-white"
                          : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={volunteer}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={volunteer.photo}
                            alt=""
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {volunteer.first_name} {volunteer.last_name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            ✔️
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
