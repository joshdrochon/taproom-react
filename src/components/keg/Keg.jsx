import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <div id='keg'>
      <p>Name: {props.name}</p>
      <p>Size: {props.size}</p>
      <p>Price: {props.price}</p>
    </div>
  );
}

Keg.proptypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default Keg;
