import React from 'react';
import $ from 'jquery';

$(document).ready(function(){
  $('#test').click(function (){
      console.log("Hey, that's kind of strange");
    });
  });

const styles = {
  backgroundColor: '#C48F65',
  bottom: '0',
  left: '0',
  width: '100%',
  lineHeight: '30px',
  textAlign: 'center',
  position: 'fixed'
}

function Footer(){
  return(
    <div style={styles} id='footer'>
      <p id='test'>Copyright &copy; 2018 Josh Rochon</p>
    </div>
  );
}

export default Footer;
