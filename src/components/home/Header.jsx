import { Link } from 'react-router-dom';
import tapHandles from '../../assets/images/taphandles.jpg';


import React from 'react';

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
          #nav{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            width: 100%;
            height: 70px;
            background-color: #92B6D5;
            text-align: center;
          }
          #nav div{
            width: 100%;
            height: 70px;
            margin: auto;
          }
          #nav div:hover{
            background-color: #4C6A92;
            cursor: pointer;
          }
          #nav a{
            color: white;
            text-decoration: none;
            font-size: 24px;
            line-height: 70px;
          }
        `}
      </style>
      <div style={styles.header} id='header'></div>
      <div id='nav'>
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
