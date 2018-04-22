import { Switch, Route } from 'react-router-dom';

import React from 'react';
import Header from './home/Header';
import Summary from './home/Summary';
import Footer from './home/Footer';
import KegList from './keg/KegList';

function App(){
  return(
    <div id='app'>
      <style jsx global>{`
          *:not(p){
            font-family: helvetica;
            padding: 0px;
            margin: 0px;
          }
          body{
            background-color: #F0EDE5;
          }
        `}
      </style>
      <Header/>
      <Summary/>
      <Switch>
        <Route path='/allkegs' component={KegList} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
