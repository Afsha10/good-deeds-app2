import { Listbox } from "@headlessui/react";

function CalendarViewingDropdown({ calendarType, setCalendarType }) {
  return (
    <Listbox value={calendarType} onChange={setCalendarType}>
      <Listbox.Button className="relative ml-6">
        <span className="text-white text-lg sm:text-xl">
          Select a Calendar View
        </span>
        <span className="absolute pl-2">🔽</span>
      </Listbox.Button>
      <Listbox.Options className="ml-6">
        <Listbox.Option
          className="text-white text-base sm:text-lg"
          value="monthly"
        >
          Monthly Calendar View {calendarType === "monthly" && "✔️"}
        </Listbox.Option>
        <Listbox.Option
          className="text-white text-base sm:text-lg"
          value="four-weekly"
        >
          Four-Weekly Calendar View {calendarType === "four-weekly" && "✔️"}
        </Listbox.Option>
      </Listbox.Options>
    </Listbox>
  );
}

export default CalendarViewingDropdown;
