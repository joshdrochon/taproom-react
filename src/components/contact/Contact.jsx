import React from 'react';
import paper from '../../assets/images/paper.jpg';
import Form from './Form';

const styles = {
  border: '1px solid transparent',
  backgroundImage:`url(${paper})`,
  backgroundSize: 'cover',
  width: '100%',
  height: '1100px',
  backgroundSize: '100%'
}

const Contact = () => {
  return(
    <div style={styles}>
      <Form/>
    </div>
  );
}
export default Contact
