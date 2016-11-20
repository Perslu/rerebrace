import React from 'react';
import './styles.css';




const ProfileRatesForm = React.createClass({
  onClick(e){
    this.setState({selected: !this.state.selected});
    console.log(this);

  },
  getInitialState(){
    return({
      selected: this.props.initSelected
    })
  },

  addClassName(){
    const classNames = [];
    if( this.state.selected )
      classNames.push("selected");
    return classNames
  },


  render() {
    const  prices = {
      hour1:'160',
      hours2:'300',
      hours3:'500',
      day:'1000',
      week:'3000',
    }
    return (
      <div>

        <div className="TableRates">
          <div className="RatesRow Header">
            <div className="RatesColumn">Incall</div>
            <div className="RatesColumn">Duration</div>
            <div className="RatesColumn">Outcall</div>
          </div>
          <div className="RatesRow">
            <div className="RatesColumn"><p>Not available</p></div>
            <div className="RatesColumn" ><p className={this.addClassName()}
                                             onClick={this.onClick} selected>1 Hours</p></div>
            <div className="RatesColumn"><p>{prices.hour1} $</p></div>
          </div>
          <div className="RatesRow">
            <div className="RatesColumn" ><p>Not available</p></div>
            <div className="RatesColumn"><p className={this.addClassName()}
                                              onClick={this.onClick} selected>2 Hours</p></div>
            <div className="RatesColumn"><p>{prices.hours2} $</p></div>
          </div>
          <div className="RatesRow">
            <div className="RatesColumn"><p>Not available</p></div>
            <div className="RatesColumn"><p>4 Hours</p></div>
            <div className="RatesColumn"><p>{prices.hours3} $</p></div>
          </div>
          <div className="RatesRow">
            <div className="RatesColumn"><p>Not available</p></div>
            <div className="RatesColumn"><p>1 Day</p></div>
            <div className="RatesColumn"><p>{prices.day} $</p></div>
          </div>
          <div className="RatesRow">
            <div className="RatesColumn"><p>Not available</p></div>
            <div className="RatesColumn"><p>1 Week</p></div>
            <div className="RatesColumn"><p>{prices.week} $</p></div>
          </div>
        </div>

      </div>
    )
  }
});




/*ProfileRates.Prototypes = {
 hour1: React.PropTypes.number,
 hours2: React.PropTypes.number,
 hours3: React.PropTypes.number,
 };*/



export default ProfileRatesForm
