import { Link } from 'react-router-dom';

import React from 'react';

const styles = {
  backgroundColor: '#C0AB8E',
  width: '100%',
  lineHeight: '80px',
  textAlign: 'center'
}

function Header(){
  return(
    <div style={styles} id='header'>
      <p>Header works!</p>
      <p><Link to='/allkegs'>All Kegs</Link></p>
    </div>
  );
}

export default Header;
