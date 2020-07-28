import React from 'react'

import Logo from '../../assets/img/logo.png'
import './styles.css';
import ButtonLink from '../ButtonLink';

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="TDDEVFLIX"/>
      </a>


      <ButtonLink className="ButtonLink" href="/">
        Novo Vídeo
      </ButtonLink>
    </nav>
  );
}
