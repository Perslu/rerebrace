import React from 'react';
import "./styles.css";
import R from 'ramda';


const createTableRow =  label => {

  return (<div className="PC-Row" >
    <div className="RowTitle" key="{label.name}">{label.name}</div>
    <div className="RowData" key="{label.value}">{label.value}</div>
  </div>)
};

const items = {
  name:'Nicol',
  city: 'Bangkok',
  age: 55,
  nationality: 'Russian',
  languages: 'English, German, Thai, Chinese, Macedonian',
  affiliation: 'Agency',
  agency: 'RedRose'
};

const createTableRows = (items) => {
  return items.map(createTableRow);
};

const objectToList = obj => {
  const getObjectContent = (key) => obj[key];
  return R.map(getObjectContent, R.keys(obj));
};


const ProfileContent = (props) => (
  <div className="ProfileContent" >
  {R.compose(R.map(createTableRows),objectToList)(items[0])}

    <div className="PC-Row">
      <div className="RowTitle">
        <div className="RowTitleText">City:</div>
      </div>
      <div className="RowData">{items.city}</div>
    </div>
    <div className="PC-Row">
      <div className="RowTitle">
        <div className="RowTitleText">Name:</div>
      </div>
      <div className="RowData">{items.name}</div>
    </div>
    <div className="PC-Row">
      <div className="RowTitle">
        <div className="RowTitleText">Age:</div>
      </div>
      <div className="RowData">{items.age}</div>
    </div>
    <div className="PC-Row">
      <div className="RowTitle">
        <div className="RowTitleText">Nationality:</div>
      </div>
      <div className="RowData">{items.nationality}</div>
    </div>
    <div className="PC-Row">
      <div className="RowTitle">
        <div className="RowTitleText">Languages:</div>
      </div>
      <div className="RowData">{items.languages}</div>
    </div>
    <div className="PC-Row">
      <div className="RowTitle">
        <div className="RowTitleText">Affiliation:</div>
      </div>
      <div className="RowData">{items.affiliation}</div>
    </div>
    <div className="PC-Row">
      <div className="RowTitle">
        <div className="RowTitleText">Agency:</div>
      </div>
      <div className="RowData">{items.agency}</div>
    </div>
  </div>
);

/*ProfileContent.propTypes = {
  city: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number.isRequired,
  nationaality: React.PropTypes.string.isRequired,
  languages: React.PropTypes.string,
  affiliation: React.PropTypes.string,
  agency: React.PropTypes.string,
};*/

export default ProfileContent
