import React from 'react';

const styles = {
  header: {
    backgroundColor: 'peru'
  }
}

function Header(){
  return(
    <div style={styles.header} id='header'>
      <p>Header works!</p>
    </div>
  );
}

export default Header;
