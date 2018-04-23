import { Switch, Route } from 'react-router-dom';

import React from 'react';
import Header from './home/Header';
import Story from './home/Story';
import Slogan from './home/Slogan';
import Content from './home/Content';
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
      <Story/>
      <Slogan/>
      <Content/>
      <Switch>
        <Route exact path='/allkegs' component={KegList} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
