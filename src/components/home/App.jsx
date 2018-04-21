import React from 'react';
import Header from './Header';
import Footer from './Footer';
import KegList from '../keg/KegList';

function App(){
  return(
    <div id='app'>
      <style jsx>{`
          *{
            font-family: helvetica;
            padding: 0px;
            margin: 0px;
          }
        `}
      </style>
      <Header/>
      <KegList/>
      <Footer/>
    </div>
  );
}

export default App;
