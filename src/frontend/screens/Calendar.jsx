import React, { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css" // Gives us the default calendar styling

import "../css/calendar.css" 

export default function Sample() {
  const [value, onChange] = useState(new Date()) // from sample
  // initializes the state with Date object with current date and time
  // value is the date that the user has selected
  // onChange is a function that will be called when the user selects a date
  // every time the user selects a date, the onChange function will be called
  // to change the value of the state

  return (
    <div className="Calendar">
      <header>
        <h1>Calendar</h1>
      </header>
      <div className="Calendar__container">
        <main className="Calendar__container__content">
          <Calendar
            selectRange // Enable range selection
            onChange={onChange}
            value={value}
          />
          </main>
      </div>
    </div>
  )
}
