import React from 'react';

const Form = () => {
  return(
    <div id='contact-form'>
      <style jsx>
      {`
        #contact-form{
          margin: auto;
          margin-top: 280px;
          width: 450px;
          height: 600px;
          border: 2px dotted green;
          background-color: clear;
        }
        #contact-form input{
          background: transparent;
          border: 1px dotted green;
        }
      `}
      </style>
      <form>
        <input>
        </input>
        <input>
        </input>
      </form>
      <button type='submit'>Get in touch!</button>
    </div>
  );
}

export default Form;
