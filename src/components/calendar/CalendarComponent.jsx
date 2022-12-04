import React, { useState } from 'react'
import { Calendar } from 'react-calendar'
import './calendar.css'
// import 'react-calendar/dist/Calendar.css'
import  Time from './Time'
import './Times'

function CalendarComponent() {
  const [date, setDate] = useState(new Date())
  const [showTime, setShowTime] = useState(false)
  return (
    <div className="flex flex-wrap items-center justify-center p-2">
      <div className="Calendar">
        <div className="Calendar__container shadow-lg rounded-xl">
          <div className="Calendar__container__content border-none">
            <Calendar
              calendarType="ISO 8601"
              locale="es-ES"
              onChange={setDate}
              value={date}
              onClickDay={() => setShowTime(true)}
            />
          </div>
        </div>
        </div>
        <div Style={'width:100%; text-align:center; margin-top:3em;'}>

          {date.length > 0 ? (
            <p>
              <span>Start:</span>
              {date[0].toLocaleDateString("es-AR",{ weekday:'long', day:'numeric', month:'long', year:'numeric' })}
              &nbsp; &nbsp;
              <span>End:</span>
              {date[1].toLocaleDateString("es-AR",{ weekday:'long', day:'numeric', month:'long', year:'numeric' })}
            </p>
          ) : (
            <p>
              <span>Fecha seleccionada: </span>
              {date.toLocaleDateString("es-AR",{ weekday:'long', day:'numeric', month:'long', year:'numeric' })}
            </p>
          )}

          </div>
        <Time showTime={showTime} date={date} />
    </div>
  )
}

export default CalendarComponent
