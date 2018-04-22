import { Link } from 'react-router-dom';
import tapHandles from '../../assets/images/taphandles.jpg';
import $ from 'jquery';


import React from 'react';

$(document).ready(function(){

  $(window).scroll(function(){
    if ($(window).scrollTop() > 300){
      $('#navbar').addClass('navbar-fixed');
      //removes content shift on navbar-fixed
      $('#header').addClass('margin-correct');
    }
    if ($(window).scrollTop() < 301){
      $('#navbar').removeClass('navbar-fixed');
      $('#header').removeClass('margin-correct');
    }
  });
});

const styles = {
  header: {
    width: '100%',
    height: '300px',
    textAlign: 'center',
    backgroundImage: `url(${tapHandles})`,
    backgroundSize: 'cover'
  }
}

function Header(){
  return(
    <div>
      <style jsx>{`
          #navbar{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            width: 100%;
            height: 70px;
            background-color: #92B6D5;
            text-align: center;
          }
          #navbar div{
            width: 100%;
            height: 70px;
            margin: auto;
          }
          #navbar div:hover{
            background-color: #4C6A92;
            cursor: pointer;
          }
          #navbar a{
            color: white;
            text-decoration: none;
            font-size: 24px;
            line-height: 70px;
          }
          .navbar-fixed{
            top: 0;
            z-index: 100;
            position: fixed;
            width: 100%;
          }
          .margin-correct{
            margin-bottom: 70px;
          }
        `}
      </style>
      <div style={styles.header} id='header'></div>
      <div id='navbar'>
        <div><a href='#'>Home</a></div>
        <div><Link to='/allkegs'>Brewer's List</Link></div>
        <div><a href='#'>Tap Room</a></div>
        <div><a href='#'>Blog</a></div>
        <div><a href='#'>Menu</a></div>
      </div>
    </div>

  );
}

export default Header;
