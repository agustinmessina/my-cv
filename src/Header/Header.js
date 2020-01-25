import React from 'react';
import './Header.css';
import picture from './perfil.jpg';
import gmail from './gmail.png';
import location from './location.png';
import linkedin from './linkedin.png';

function Header() {
  return (
    <header>
        <h1>
          Agustin Elian Messina
        </h1>
        <img src={picture} width="180px" alt="profile" />
        <div className="Header-contact">
          <img src={location} alt="location"/>
          <div>Location:</div>
          <div>Rosario, Santa Fe, Argentina</div>
          <img src={gmail} alt="gmail"/>
          <div>Email:</div>
          <div>agusmessin@gmail.com</div>
          <img src={linkedin} alt="linkedin"/>
          <div>Linkedin:</div>
          <div><a className="Header-linkedin" href="https://www.linkedin.com/in/agustin-messina/">linkedin.com/in/agustin-messina/</a></div>
        </div>
      </header>
  );
}

export default Header;