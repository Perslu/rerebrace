import React from 'react'
import R from 'ramda'
import injectSheet from 'UI/styles/jss'

const createTableRow =  label => {

  return (<div className={classes.PCRow} >
    <div className={classes.RowTitle} key="{label.name}">{label.name}</div>
    <div className={classes.RowData} key="{label.value}">{label.value}</div>
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


const ProfileContent = ({sheet: {classes}, ...prop}) => (
  <div className="ProfileContent" >
  {R.compose(R.map(createTableRows),objectToList)(items[0])}

    <div className={classes.PCRow}>
      <div className={classes.RowTitle}>
        <div className={classes.RowTitleText}>City:</div>
      </div>
      <div className={classes.RowData}>{items.city}</div>
    </div>
    <div className={classes.PCRow}>
      <div className={classes.RowTitle}>
        <div className={classes.RowTitleText}>Name:</div>
      </div>
      <div className={classes.RowData}>{items.name}</div>
    </div>
    <div className={classes.PCRow}>
      <div className={classes.RowTitle}>
        <div className={classes.RowTitleText}>Age:</div>
      </div>
      <div className={classes.RowData}>{items.age}</div>
    </div>
    <div className={classes.PCRow}>
      <div className={classes.RowTitle}>
        <div className={classes.RowTitleText}>Nationality:</div>
      </div>
      <div className={classes.RowData}>{items.nationality}</div>
    </div>
    <div className={classes.PCRow}>
      <div className={classes.RowTitle}>
        <div className={classes.RowTitleText}>Languages:</div>
      </div>
      <div className={classes.RowData}>{items.languages}</div>
    </div>
    <div className={classes.PCRow}>
      <div className={classes.RowTitle}>
        <div className={classes.RowTitleText}>Affiliation:</div>
      </div>
      <div className={classes.RowData}>{items.affiliation}</div>
    </div>
    <div className={classes.PCRow}>
      <div className={classes.RowTitle}>
        <div className={classes.RowTitleText}>Agency:</div>
      </div>
      <div className={classes.RowData}>{items.agency}</div>
    </div>
  </div>
);


const styles = {
    PCRow: {
      display      : 'flex',
      flexDirection: 'row',
      alignItems   : 'stretch',
    },
    RowTitle: {
      alignItems: 'center',
      display: 'flex',
      textAlign: 'initial',
      fleGrow: '0',
      flexShrink: '0',
      flexBasis: '40%',
      marginRight: '2px',
      webkitBoxSizing: 'border-box',
      mozBoxSizing: 'border-box',
      boxSizing: 'border-box',
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginBottom: '2px',
      padding: '4px 6px',
      background: 'linear-gradient(70deg, rgba(34, 34, 34, 0.4), rgba(51, 51, 51, 1) 95%)',
    },
    RowTitleText: {
      flexGrow: '1',
      textOverflow: 'ellipsis',
    },
    RowData: {
      flexGrow: 1,
      webkitBoxSizing: 'border-box',
      mozBoxSizing: 'border-box',
      boxSizing: 'border-box',
      fontSize: '0.8rem',
      textAlign: 'left',
      marginBottom: '2px',
      padding: '4px 6px',
      background: 'linear-gradient(70deg, rgba(51, 51, 51, 1) 80%, rgba(34, 34, 34, 0.4))',
    },

}
/*ProfileContent.propTypes = {
  city: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number.isRequired,
  nationaality: React.PropTypes.string.isRequired,
  languages: React.PropTypes.string,
  affiliation: React.PropTypes.string,
  agency: React.PropTypes.string,
},*/

export default injectSheet(styles)(ProfileContent)
