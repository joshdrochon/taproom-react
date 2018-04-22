import React from 'react';

const styles = {
  list: {
    textAlign: 'center'
  },
  name: {
    margin: '10px'
  },
  details: {
    margin: '15px',
    fontSize: '18px'
  }
}

function Keg(props){
  return(
    <div style={styles.list} id='keg'>
      <h3 style={styles.name}>{props.name}</h3>
      <p style={styles.details}>{props.size}</p>
      <p style={styles.details}>{props.price}</p>
    </div>
  );
}

export default Keg;
