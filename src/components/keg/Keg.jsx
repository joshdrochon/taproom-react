import React from 'react';

function Keg(props){
  return(
    <div id='keg'>
      <p>Name: {props.name}</p>
      <p>Size: {props.size}</p>
      <p>Price: {props.price}</p>
    </div>
  );
}

export default Keg;
