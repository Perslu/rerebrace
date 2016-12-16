import React from 'react';


const selectedDuration= {
  isIncall :false,
    duration: 24*3600*1000
};

let pricing = {};
 pricing.incall = {
  isAvailable4Hours: true,
  price4Hours: 3000,
  isAvailable12Hours: true,
  price12Hours: 8000,
  isAvailable24Hours: true,
  price24Hours: 15000
};

pricing.outcall = {
  isAvailable4Hours: false,
  isAvailable12Hours: false,
  isAvailable24Hours: false
};

const currency = {
  code: "USD",
  symbol: "$"
};

const RatesPriceCell = (props) => {
  return (
    <div className="RatesColumn">
      {(props.isAvailable)? props.price+ props.currency.symbol:'Not Available '}
    </div>
  )
};

const RatesDurationCell = (props) => {
  return (
    <div className="RatesColumn">
      {props.text}
    </div>
  )
};

const ProfileRatesForm2 = (props) => {

  return (
    <div className="TableRates">
      <div className="RatesRow Header">
        <div className="RatesColumn">Incall</div>
        <div className="RatesColumn">Duration</div>
        <div className="RatesColumn">Outcall</div>
      </div>
      <div className="RatesRow">
        <RatesPriceCell
          isAvailable={pricing.incall.isAvailable4Hours}
          price={pricing.incall.price4Hours}
          incall
          currency={currency}
          selectedDuration={selectedDuration}/>

        <RatesDurationCell
          isIncallAvailable={pricing.incall.isAvailable4Hours}
          isOutcallAvailable={pricing.outcall.isAvailable4Hours}
          selectedDuration={selectedDuration}
          text="4 Hours"
        />

        <RatesPriceCell
          isAvailable={pricing.outcall.isAvailable4Hours}
          price={pricing.outcall.price4Hours}
          outcall
          currency={currency}
          selectedDuration={selectedDuration}/>
      </div>

    </div>
  )
};

export default ProfileRatesForm2
