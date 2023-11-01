import { Listbox } from "@headlessui/react";

function CalendarViewingDropdown({ calendarType, setCalendarType }) {
  return (
    <Listbox value={calendarType} onChange={setCalendarType}>
      <Listbox.Button>
        <span className="text-white text-lg sm:text-xl">
          Select a Calendar View
        </span>
      </Listbox.Button>
      <Listbox.Options>
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
