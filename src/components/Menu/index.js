import React from 'react';

import './styles.css';
import Logo from '../../assets/img/Logo.png';
// import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="TwoPlace logo" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu