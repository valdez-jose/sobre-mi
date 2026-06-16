import React, { useState } from 'react';
// 1. Importamos asignando la variable styles
import styles from '../css/Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles['contenedor-header']}>
      <div className={styles.marca}>
        <h1 className={styles['titulo-nombre']}>Jose Valdez</h1>
        <span className={styles['subtitulo-rol']}>Desarrollador Web</span>
      </div>

      {/* 2. Clases dinámicas: combinamos la clase fija con la condicional usando template literals */}
      <div 
        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Aquí puedes usar la notación de punto (.) porque son palabras simples sin guiones */}
        <span className={`${styles.line} ${styles.top}`}></span>
        <span className={`${styles.line} ${styles.middle}`}></span>
        <span className={`${styles.line} ${styles.bottom}`}></span>
      </div>

      {/* 3. Navegación dinámica */}
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-mi">Sobre Mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      <div className={styles['logo-container']}>
        <img 
          src="https://cdn-icons-png.flaticon.com/512/11851/11851744.png" 
          alt="Portafolio Logo" 
          className={styles['logo-img']}
        />
      </div>
    </header>
  );
};

export default Header;
