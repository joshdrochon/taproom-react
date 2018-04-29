import React from 'react';
import { getFunName } from './../../helpers';

const Form = () => {
  return(
    <div id='contact-form'>
      <style jsx>{`
        #contact-form{
          margin: auto;
          margin-top: 310px;
          width: 450px;
          height: 600px;
          background-color: clear;
          transform: skewY(1deg);
        }
        #contact-form *{
          font-family: 'Indie Flower', cursive;
          letter-spacing: 1px;
        }
        #contact-form input{
          border: none;
          background: transparent;
        }
        #submit-btn{
          font-size: 50px;
          background: transparent;
          color: #202020;
          border: none;
          display: block;
          margin: auto;
          margin-top: 20px;
        }
        #submit-btn:hover{
          cursor: pointer;
          text-shadow: 0px 0px 15px darkgray;
        }
        #comment-tag{
          width: max-content;
          margin: auto;
        }
        #comment-field{
          width: 100%;
          height: 250px;
          background: none;
          font-size: 24px;
          border: none;
          resize: none;
        }
        #comment-field:focus{
          outline: none;
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
          width:72%;
        }
        .input-label input:focus{
          outline: none;
        }
      `}
      </style>
      <form id='form'>
        <span className='input-label'><label>Firstname: </label><input maxLength='17' type='text' required/></span>
        <span className='input-label'><label>Lastname: </label><input maxLength='17' type='text' required /></span>
        <span className='input-label'><label>Email: </label><input maxLength='22' type='email' required /></span>
        <h1 id='comment-tag'>Drop a comment</h1><textarea id='comment-field' placeholder={getFunName()}></textarea>
        <button id='submit-btn' type='submit'>Get in touch!</button>
      </form>
    </div>
  );
}

export default Form;
