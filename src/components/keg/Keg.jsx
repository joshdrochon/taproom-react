import React from 'react';
import PropTypes from 'prop-types';

const Keg = (props) => {
  return(
    <div id='keg-note'>
      <style jsx>{`
          #keg-note{
            width: 350px;
            height: 170px;
            text-align: center;
            background-color: peru;
            margin: auto;
            margin-top: 40px;
            padding: 50px;
          }
          #keg-note:hover{
            transform: scale(1.01);
            cursor: pointer
          }

          #keg-info{
            margin-top: auto;
            margin-bottom: auto;
            display:block;
          }
          #keg-info *{
            font-family: 'indie flower', cursive;
          }
          #keg-info>:last-child{
            margin-bottom: 0px;
          }
          #keg-info>:first-child{
            margin-top: 0px;
          }
      `}
      </style>
      <span id='keg-info'>
        <h1>{props.name}</h1>
        <h2>{props.size}</h2>
        <h2>{props.price}</h2>
      </span>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.string
};

export default Keg;
