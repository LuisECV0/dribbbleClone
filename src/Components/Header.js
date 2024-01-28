import React from 'react';
import './styles/Header.css'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Explorar</li>
          <li>Diseñadores</li>
          {/* Agrega más elementos de la barra de navegación según sea necesario */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
