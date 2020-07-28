import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.twoplace.com.br/">
        <img className="Logo" src={Logo} alt="Logo TwoPlace" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://github.com/roneycharles">
          Roney Charles
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
