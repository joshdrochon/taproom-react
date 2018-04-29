import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(){
  let name = null;
  let size = null;
  let price = null;

  function handleNewKegFormSubmission(e){
    e.preventDefault();
    props.onNewKegCreation({name: name.value, size: size.value, price: price.value});
    name.value = '';
    size.value = '';
    price.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          ref={(input) => {name=input;}}
        />
        <input
          type='text'
          id='size'
          ref={(input) => {size=input;}}
        />
        <input
          type='text'
          id='price'
          ref={(input) => {price=input;}}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
