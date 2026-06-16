import React from 'react';
// 1. Importamos asignando la variable styles
import styles from '../css/Footer.module.css';
import { compu2, casa, linkedin, portafolio2, github, twitter, contacto1 } from '../assets/imagenes.js';

const Footer = () => {
  return (
    <>
      {/* 2. Reemplazamos los classNames globales por las propiedades del objeto styles */}
      <footer className={styles.footer}>
        <div className={styles['footer-logo']}>
          <img src={compu2} alt="imagen de computadora" />
          <p>Soy José</p>
        </div>

        <nav className={styles['footer-nav']}>
          <a href="#" className={styles['item-inline']}>
            <img src={casa} alt="imagen de casa" />
            <span>Home</span>
          </a>
          <a href="#" className={styles['item-inline']}>
            <img src={portafolio2} alt="imagen de portafolio" />
            <span>Servicios</span>
          </a>
          <a href="#" className={styles['item-inline']}>
            <img src={contacto1} alt="" />
            <span>Contacto</span>
          </a>
        </nav>

        <nav className={styles['footer-social']}>
          <a href="#"><img src={linkedin} alt="Linkedin" /></a>
          <a href="#"><img src={github} alt="Github" /></a>
          <a href="#"><img src={twitter} alt="Twitter" /></a>
        </nav>

        <p className={styles.copy}>&copy; 2026 Aguante Pincharrata</p>
      </footer>
    </>
  );
};

export default Footer;
