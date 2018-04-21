import React from 'react';
import Keg from './Keg';

function KegList(){
  return(
    <div id='keglist'>
      <h2>Keg List:</h2>
      <Keg
        name='Oregon Sunrise'
        size='1/2 barrel'
        price='$31.99'/>
    </div>
  );
}

export default KegList;


//not imported anywhere atm. Will be rendered via a link from App.jsx
