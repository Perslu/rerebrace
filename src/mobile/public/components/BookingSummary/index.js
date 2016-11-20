import React from 'react';


const BookingSummary =(props)=>(
  <div>
    <div>Price:{props.price}</div>
    <div>Date:{props.choosenDate}</div>
    <div>Time:{props.time}</div>
    <div>Total:</div>
  </div>
)

export default BookingSummary
