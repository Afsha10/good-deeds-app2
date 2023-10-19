import { Listbox } from "@headlessui/react";

function CalendarViewingDropdown({ calendarType, setCalendarType }) {
  return (
    <Listbox value={calendarType} onChange={setCalendarType}>
      <Listbox.Button><span className="ml-5">Select a Calendar View</span></Listbox.Button>
      <Listbox.Options>
        <Listbox.Option value="monthly">
          Monthly Calendar View {calendarType === "monthly" && "✔️"}
        </Listbox.Option>
        <Listbox.Option value="four-weekly">
          Four-Weekly Calendar View {calendarType === "four-weekly" && "✔️"}
        </Listbox.Option>
      </Listbox.Options>
    </Listbox>
  );
}

export default CalendarViewingDropdown;
