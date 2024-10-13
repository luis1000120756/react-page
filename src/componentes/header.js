import React from "react";
import './header.css'

function Header(){
    return(
    <header className="header" >
         <nav className="navbar  indigo darken-4">
        <ul className="nav-list">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#features">Características</a></li>
          <li><a href="#about">Acerca de</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
         <h1 className="header-title">Bienvenido a TecnologyLuis</h1>
         <p className="header-subtitle">Explora y disfruta de nuestra tecnología</p>
    </header>
    )
}
export default Header;