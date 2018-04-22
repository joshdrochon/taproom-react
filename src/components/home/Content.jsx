import React from 'react';

function Content(){
  return(
    <div id='content'>
      <style jsx>
        {`
          #content{
            text-align: center;
          }
          #content p{
            margin: 200px;
          }
        `}
      </style>
      <p>Keep</p><p>scrolling</p><p>to</p><p>see</p><p>the</p><p>rest</p><p>of</p><p>the</p><p>page.</p>
    </div>
  )
}
export default Content;
