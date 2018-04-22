import React from 'react';
import Keg from './Keg';

let keglist = [
  {name: 'Oregon Sunrise', size: '1/2 barrel', price: '$31.99'},
  {name: 'Blackberry Oak', size: '1/2 barrel', price: '$62.99'},
  {name: 'Autumn Sunset', size: '1/2 barrel', price: '$54.99'},
  {name: 'Salem Stout', size: '1/2 barrel', price: '$34.99'},
  {name: 'Indian Pale Ale', size: 'Full barrel', price: '$72.99'},
  {name: 'England Stout', size: 'Full barrel', price: '$61.99'},
  {name: 'Autumn Sunset', size: '1/2 barrel', price: '$54.99'},
  {name: 'Blackberry Oak', size: '1/2 barrel', price: '$62.99'},
  {name: 'Salem Stout', size: '1/2 barrel', price: '$34.99'},
  {name: 'Indian Pale Ale', size: 'Full barrel', price: '$72.99'}
];

function KegList(){
  return(
    <div>
      <style jsx>{`
          hr{
            margin-bottom: 20px;
          }

        `}
      </style>
      {keglist.map((keg, index)=>
        <Keg
          name={keg.name}
          size={keg.size}
          price={keg.price}
          key={index}/>
      )}

    </div>
  );
}

export default KegList;


//not imported anywhere atm. Will be rendered via a link from App.jsx
