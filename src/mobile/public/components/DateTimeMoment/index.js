import React from 'react'
import moment from 'moment'

const getDateFromField = (fields) => {
  console.log('field', fields);
  return (fields.date.input.value && fields.date.input.value.format) ? fields.date.input.value : undefined;
  /*return (field.input.value && field.input.value.format) ? field.input.value.format('YYYY-MM-DD') : undefined*/
};

const getTimeFromField = (fields) => {
  return (fields.time.input.value && fields.time.input.value.format) ? fields.time.input.value : undefined;
  /*return (field.input.value && field.input.value.format) ? field.input.value.format('HH:mm') : ""*/
};

const onDateChange = (fields, event) => {
  let value = moment();
  if (fields.date.input.value) {
    value = fields.date.input.value
  }

  return fields.date.input.onChange((fields.date.input.value && fields.time.input.value) ? moment.utc(event.target.value + 'T' + value.format('HH:mm') + ':00.000Z') : fields.date.input.value);
  /*return field.input.onChange( moment.utc(event.target.value+'T'+value.format('HH:mm')+':00.000Z'))*/
};

const onTimeChange = (fields, event) => {
  let value = moment();
  if (fields.time.input.value) {
    value = fields.time.input.value
  }
  return fields.time.input.onChange((fields.date.input.value && fields.time.input.value) ? moment.utc(event.target.value + 'T' + value.format('HH:mm') + ':00.000Z') : fields.time.input.value);
  /*return field.input.onChange( moment.utc(value.format('YYYY-MM-DD') +'T'+ event.target.value+':00.000Z'))*/
};

{/*const fieldStateClass = (fields) => {
  const fieldValidityClass = (fields.date.meta.invalid) ? "fieldInvalid" : 'fieldValid';
  return (fields.date.input.value ) ? fieldValidityClass : 'fieldInitial';
};
const fieldStateClassTime = (fields) => {
  const fieldValidityClassTime = (fields.time.meta.invalid) ? "fieldInvalid" : 'fieldValid';
  return ( fields.time.input.value) ? fieldValidityClassTime : 'fieldInitial';
};*/}

const DateTimeState = React.createClass({
  onDateChange (event) {
    this.setState({date: event.target.value}, this.onMomentChange )
  },
  onTimeChange (event) {
    this.setState({time: event.target.value},this.onMomentChange )
  },
  onMomentChange () {
    const input = this.props.input;
    return input.onChange((this.state.date && this.state.time) ? moment.utc(this.state.date
      + 'T' + this.state.time + ':00.000Z') : null);
  },
  onBlur () {
    const input = this.props.input;
    return input.onBlur((this.state.date && this.state.time) ? moment.utc(this.state.date
      + 'T' + this.state.time + ':00.000Z') : null);
  },
  componentWillReceiveProps(nextProps){
    if((!nextProps.input.value) && (this.state.time==='' || this.state.date==='') ) { return }
    if((!nextProps.input.value) &&(this.state.time!=='' || this.state.date!=='')) {
      return this.setState({
        date:'',
        time:'',
      })
    }

    this.setState({
      date: this.getDateFromField(nextProps.input),
      time: this.getTimeFromField(nextProps.input),

    })
  },
  getDateFromField(input) {
    return (input.value && input.value.format) ? input.value.format('YYYY-MM-DD') : ''
  },

   getTimeFromField(input) {
     return (input.value && input.value.format) ? input.value.format('HH:mm') : ''
  },

  render(){
    const field = {...this.props};
    console.log('props', this.props);
    return (
      <div>
        <input type="date" onBlur={this.onBlur} onFocus={field.input.onFocus}
               value={this.state.date} onChange={this.onDateChange}/>
        {<span>{ field.meta.touched && field.meta.error}</span>}
        <input type="time" onBlur={this.onBlur} onFocus={field.input.onFocus}
               value={this.state.time} onChange={this.onTimeChange}/>
        {/*className={fieldStateClassTime(field)}*/}
      </div>
    )
  },
  getInitialState(){
    return {
      time: "",
      date: ""
    }
  }
});

const DateTimeMoment = (fields) => {
  console.log(fields);
  return (
    <div>
      <input {...fields.date.input} type="date"  onBlur={fields.date.input.onBlur} onFocus={fields.date.input.onFocus} className={fieldStateClass(fields)}
             value={getDateFromField(fields)} onChange={event => onDateChange(fields, event)} />
      {<span>{ fields.date.meta.touched && fields.date.meta.error}</span>}
      <input {...fields.time.input} type="time" onBlur={fields.time.input.onBlur} onFocus={fields.time.input.onFocus}
             className={fieldStateClassTime(fields)} value={getTimeFromField(fields)} onChange={event => onTimeChange(fields, event)}/>
      {<span>{ fields.time.meta.touched && fields.time.meta.error}</span>}
    </div>
  )
};

export default DateTimeState
