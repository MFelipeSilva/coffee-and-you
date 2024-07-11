import { useState, useEffect } from "react";

import { Link } from "react-scroll";

import { useCart } from "../../hooks/useCart";

import { IconCart } from "../Icons";

import { PrimaryButton, SecondaryButton } from "../Button";

import styles from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleScroll = () => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    toggleScroll();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const { total } = useCart();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a
          href="/"
          className={styles.logo}
          alt="Coffee trip cup with site name"
          title="Back to home"
        />
        <ul
          className={`${styles.links_container} ${isOpen ? styles.active : ""}`}
        >
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              href="home"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              href="menu"
              onClick={() => setIsOpen(false)}
            >
              Cardápio
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              href="about"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              href="contact"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
          </li>
          <PrimaryButton hidden={false}>Entrar</PrimaryButton>
        </ul>
        <div className={styles.button_container}>
          <a href="/cart">
            <SecondaryButton hidden={false}>
              <IconCart />
              <span>{total.items}</span>
            </SecondaryButton>
          </a>
          <PrimaryButton hidden={true}>Entrar</PrimaryButton>
          <button
            className={`${styles.menu_toggle} ${isOpen ? styles.active : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={styles.menu_bar} data-position="top"></div>
            <div className={styles.menu_bar} data-position="bottom"></div>
          </button>
        </div>
      </nav>
    </header>
  );
};
