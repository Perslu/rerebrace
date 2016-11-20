import React from 'react';

import BookingCalendar from '../BookingCalendar'
import BookingSummary from '../BookingSummary'
import ProfileRatesForm from '../ProfileRatesForm'


const BookingArea = React.createClass({



   choosenDate(e){
     this.setState({date: e.target.value});
    console.log(e.target.value);
  },
  choosenTime(e){
    this.setState({time: e.target.value});
  },
  getInitialState(){
    return({
      date: 0,
      time:0,
    })
  },



  render(){
  return (
    <div>
      <div >BookingArea</div>
      <div>Username:</div>
    <ProfileRatesForm/>
      <BookingCalendar onBlur={this.choosenDate} time={this.choosenTime}/>
      <BookingSummary choosenDate={this.state.date} time={this.state.time} />
    </div>

    )}
});
export default BookingArea

