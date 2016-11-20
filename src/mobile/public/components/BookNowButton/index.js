import React from 'react';
import "./styles.css";
import TextButton from '../TextButton'
import { Link } from 'react-router'


const BookNowButton = (props) => {


  return (
    <div>


      <Link to="/BookingArea"/*to={`${pathname}/BookingArea`}*/>
        <TextButton className='BookNow' tekst='Book online now'> </TextButton></Link>
    </div>
  )
};

export default BookNowButton
