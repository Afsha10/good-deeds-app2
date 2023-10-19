plan for MonthlyDateBox:

we are mapping through the dates and creating a date box for each date, we are passing in a date value. So each date box contains a reference to the date that we generated. Knowing that we can compare the date that is passed to our date box with dates from the sessions data

1. We will format the "date" variable into a string.
Knowledge:
- after that we need to check if it matches with the formatted_date in the sessions data
- once we've done that we will have each date box which will have a variable that will have a formatted_date string
- we know each box component will be render from top to bottom
- we are creating a value from the prop date and it is created from each render

2. After that we can create a new variable existingSessions and we will use filter method to our sessions data to get an array of objects that matches the same date (if the date value matches the formatted_date from sessions data)

3. We create existingMorningSessions and existingEveningSessions and use find method to go through the existingSessions data

4. Then in our calendar date if existingMorningSessions or existingEveningSessions is true, we have the icons displayed; if existingMorningSessions or existingEveningSessions is false, then no icons displayed

5. We also use a ternary operator with LightModeRoundedIcon that checks if existingMorningSessions is true and has volunteer_id then we have our icons gray if the existingMorningSessions is null then we have our icons coloured as they are available to book.


Pseudocode for SessionsStatusBox:

check selectedDate exists in the sessions data if it doesn't exist it gives us an empty array
if it doesn't exist then we render "no sessions exist for this date"
if the selectedDate exist in the sessions data  then give the info about the session status:
- if it a volunteer_id exist then say volunteer_name booked this session
- or else this session is available to book

<div>
    <p>Session Status...</p>
    <p>No sessions exist</p>
    <div>
        <p>Volunteer name has booked this session</p>
        <p>This session is available to book
            <ConfirmationDialogueBoxBest />
    </div>
    </p>
</div>
