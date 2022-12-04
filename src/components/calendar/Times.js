import React from 'react'
import {useState} from 'react';
import './calendar.css';

const time = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00',]

function Times(props) {

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)

 function displayInfo(e) {
   setInfo(true);
   setEvent(e.target.innerText);
}

return (
 
 <div className="times">
   {time.map(times => {
    return (
    <div>
      <button onClick={(e)=> displayInfo(e)}> {times} </button>
    </div>
        )
     })}
    <div>
      {info ? `Horario seleccionado ${event} ${props.date.toLocaleDateString("es-AR",{ weekday:'long', day:'numeric', month:'long', year:'numeric' })}` : null}
    </div>
 </div>
  )
}

export default Times;
