import React from 'react';

function Slogan(){
  return(
    <div id='slogan'>
      <style jsx>{`
          #slogan{
            background-color: #6b3912;
            text-align: center;
            height: 220px;
          }
          .wrapper text{
            color: white;
            font-weight: lighter;
            font-size: 30px;
            line-height: 220px;
            letter-spacing: 5px;
          }
        `}
      </style>
      <span className='wrapper'><text>Because beer matters. Enjoy a pint today!</text></span>
    </div>
  )
}

export default Slogan;
