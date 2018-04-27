import React from 'react';

const Form = () => {
  return(
    <div id='contact-form'>
      <style jsx>
      {`
        #contact-form{
          margin: auto;
          margin-top: 310px;
          width: 450px;
          height: 600px;
          background-color: clear;
        }
        #contact-form *{
          font-family: 'Indie Flower', cursive;
        }
        #contact-form input{
          border: none;
          border-bottom: 1px dotted black;
          background: transparent;
        }
        #submit-btn{
          font-size: 50px;
          background: transparent;
          color: #202020;
          border: none;
          display: block;
          margin: auto;
          margin-top: 50px;
        }
        #submit-btn:hover{
          cursor: pointer;
          text-shadow: 0px 0px 15px darkgray;
        }
        #comment-tag{
          width: max-content;
          margin: auto;
          margin-bottom: 12px;
        }
        #comment-field{
          width: 100%;
          height: 200px;
          background: none;
          border:none;
          box-shadow: inset 0 0 10px gray;
        }
        .input-label{
          display:block;
          margin-bottom: 35px;
        }
        .input-label label{
          font-size: 24px;
          color: #202020;
        }
        .input-label input{
          font-size: 32px;
          color: #202020;
        }
        .input-label input:focus{
          outline: none;
        }
      `}
      </style>
      <form id='form'>
        <span className='input-label'><label>Firstname: </label><input maxLength='20' type='text' required/></span>
        <span className='input-label'><label>Lastname: </label><input maxLength='20' type='text' required /></span>
        <span className='input-label'><label>Email: </label><input maxLength='22' type='email' required /></span>
        <h2 id='comment-tag'>Drop a comment</h2><textarea id='comment-field'></textarea>
        <button id='submit-btn' type='submit'>Get in touch!</button>
      </form>
    </div>
  );
}

export default Form;
