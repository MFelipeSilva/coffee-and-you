import { IconCart, IconMenu } from "../Icons";

import logo from "../../assets/logo.png";

import "./styles.css";

export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img
          src={logo}
          alt="Coffee trip cup with site name"
          title="Back to home"
        />
        <ul>
          <li>Início</li>
          <li>Cardápio</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
        <div>
          <button className="cart-button">
            <IconCart />
          </button>
          <button className="sign-in-button">Entrar</button>
        </div>
        <button className="menu-button">
          <IconMenu />
        </button>
      </nav>
    </header>
  );
};
