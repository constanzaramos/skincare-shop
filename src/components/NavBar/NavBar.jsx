import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo-light.png";
import './navBar.scss';


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="My Ritual Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#hair">Cabello</a>
        </li>
        <li>
          <a href="#face">Rostro</a>
        </li>
        <li>
          <a href="#body">Cuerpo</a>
        </li>
        <li>
          <a href="#sale">Ofertas</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
