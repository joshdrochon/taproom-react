import React from 'react';

const styles={
  backgroundColor: '#F0EDE5',
  position: 'fixed',
  bottom: '0',
  left: '0',
  width: '100%',
  lineHeight: '50px',
  textAlign: 'center'
}
function Footer(){
  return(
    <div style={styles} id='footer'>
      <p>Footer works!</p>
    </div>
  );
}

export default Footer;
