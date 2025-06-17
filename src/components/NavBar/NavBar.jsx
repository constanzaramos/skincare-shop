import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo-light.png";
import './navBar.scss';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* Al hacer click en el logo, vuelve al inicio */}
        <Link to="/">
          <img src={logo} alt="My Ritual Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/categoria/Cabello">Cabello</Link>
        </li>
        <li>
          <Link to="/categoria/Rostro">Rostro</Link>
        </li>
        <li>
          <Link to="/categoria/Cuerpo">Cuerpo</Link>
        </li>
        <li>
          <Link to="/categoria/Ofertas">Ofertas</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
