import { IconCart, IconMenu } from "../Icons";

import logo from "../../assets/logo.png";

import { PrimaryButton, SecondaryButton } from "../Button";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
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
          <SecondaryButton hidden={true}>
            <IconCart />
          </SecondaryButton>
          <PrimaryButton hidden={true}>Entrar</PrimaryButton>
        </div>
        <button className={styles.menu_button}>
          <IconMenu />
        </button>
      </nav>
    </header>
  );
};
