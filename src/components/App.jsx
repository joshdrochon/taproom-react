import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Header from './home/Header';
import Footer from './home/Footer';
import KegList from './keg/KegList';
import Contact from './contact/Contact';
import TapRoom from './taproom/TapRoom';
import Blog from './blog/Blog';
import NewKegControl from './admin/NewKegControl';

import React from 'react';
import $ from 'jquery';

$(document).ready(function(){

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 300){
      $('#navbar').addClass('navbar-fixed');
      $('#header').addClass('margin-correct');
      //removes content shift on navbar-fixed
      $('#keg-list-container').first().addClass('margin-correct-top');


    }
    if ($(window).scrollTop() <= 301){
      $('#navbar').removeClass('navbar-fixed');
      $('#header').removeClass('margin-correct');

      $('#keg-list-container').first().removeClass('margin-correct-top');

    }
  });
});

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    return(
      <div>
        <style jsx global>{`
            html body {
              width: 100%;
              overflow-x: hidden;
              background-color: #F0EDE5;
              padding: 0px;
              margin: 0px;
            }
            #container-main{
              max-width: 100%;
            }
            #container-main *{
              font-family: helvetica;
              font-weight: lighter;
            }
            .navbar-fixed{
              top: 0;
              z-index: 100;
              position: fixed;
            }
            .margin-correct{
              margin-bottom: 70px;
            }
            .margin-correct-top{
              margin-top: 70px;
              border: 1px solid transparent;
            }
          `}
        </style>
        <div id='container-main'>
          <Header/>
          <Switch>
            <Route exact path='/' component={LandingPage}/>

          <Route
              path='/allkegs'
              render={()=><KegList kegList={this.state.masterKegList} />}
          />

          <Route
              path='/newkeg'
              render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />}
          />

          <Route path='/contact' component={Contact}/>
            <Route path='/taproom' component={TapRoom}/>
            <Route path='/blog' component={Blog}/>
          </Switch>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
