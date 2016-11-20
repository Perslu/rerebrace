import React from 'react';



const BookingCalendar = (props)=> <div>
  <div>Choose Meeting day</div>
  <input type="date" min="2016-11-02" onBlur={props.onBlur} name="date"/>
  <div>Choose Meeting time</div>
  <input type="time" onBlur={props.time} name="time"/>
</div>;

export default BookingCalendar
