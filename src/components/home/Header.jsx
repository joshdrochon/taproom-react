
import React from 'react';
import { Link } from 'react-router-dom';
import tapHandles from '../../assets/images/taphandles.jpg';
import $ from 'jquery';

$(document).ready(function(){

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 300){
      $('#navbar').addClass('navbar-fixed');
      //removes content shift on navbar-fixed
      $('#header').addClass('margin-correct');
    }
    if ($(window).scrollTop() <= 301){
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
            background-color: #4C6A92;
            text-align: center;
          }
          #navbar:hover{
            cursor: pointer;
          }
          #navbar div{
            width: 100%;
            height: 70px;
            margin: auto;
          }
          #navbar div:hover{
            background-color: #6f87a7;
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
          }
          .margin-correct{
            margin-bottom: 70px;
          }
        `}
      </style>
      <div style={styles.header} id='header'></div>
      <div id='navbar'>
        <Link to='/'><div>Home</div></Link>
        <Link to='/allkegs'><div>Brewer's List</div></Link>
        <Link to='/taproom'><div>Tap Room</div></Link>
        <Link to='/blog'><div>Blog</div></Link>
        <Link to='/contact'><div>Contact</div></Link>
      </div>
    </div>

  );
}

export default Header;
