import React from 'react'

import Logo from '../../assets/img/logo.png'
import './styles.css';

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="TDDEVFLIX"/>
      </a>

      <a href="" className="ButtonLink">
        Novo Vídeo
      </a>
    </nav>
  );
}
