import { Link } from 'react-router-dom';
import tapHandles from '../../assets/images/taphandles.jpg';


import React from 'react';

const styles = {
  header: {
    width: '100%',
    height: '400px',
    textAlign: 'center',
    backgroundImage: `url(${tapHandles})`,
    backgroundSize: 'cover'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px'
  }
}

function Header(){
  return(
    <div style={styles.header} id='header'>
      <Link style={styles.link} to='/allkegs'>All Kegs</Link>
    </div>
  );
}

export default Header;
