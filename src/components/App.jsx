import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Header from './home/Header';
import Footer from './home/Footer';
import KegList from './keg/KegList';
import Contact from './contact/Contact';
import TapRoom from './taproom/TapRoom';
import Blog from './blog/Blog';


import React from 'react';

function App(){

  let docWidth = document.documentElement.offsetWidth;

  [].forEach.call(
  document.querySelectorAll('*'),
    function(element) {
      if (element.offsetWidth < docWidth) {
        console.log(element);
      }else{
        console.log('nothing to report');
      }
    }
  );
  return(
    <div>
      <style jsx global>{`
          html body {
            width: 100%;
            overflow-x: hidden;
            background-color: #F0EDE5;
          }
          #container-main{
            max-width: 100%;
          }
          *:not(p){
            font-family: helvetica;
            font-weight: lighter;
            padding: 0px;
            margin: 0px;
          }
        `}
      </style>
      <div id='container-main'>
        <Header/>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/allkegs' component={KegList}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/taproom' component={TapRoom}/>
          <Route path='/blog' component={Blog}/>
        </Switch>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
