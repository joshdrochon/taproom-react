import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Header from './home/Header';
import Footer from './home/Footer';
import KegList from './keg/KegList';


import React from 'react';

function App(){
  return(
    <div>
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
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/allkegs' component={KegList}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
