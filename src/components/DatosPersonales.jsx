import React from "react";
// 1. Importamos los estilos asignándoles una variable (styles)
import styles from "../css/DatosPersonales.module.css";

const DatosPersonales = () => {
  const datos = {
    perfil: "Desarrollador Web Full Stack con JavaScript, especializado en la creación de interfaces interactivas, eficientes y modulares.",
    telefono: "2664685772",
    correo: "jusepetony7@gmail.com",
    Github:"https://github.com/valdez-jose",
    residencia: "San Luis, Argentina",
    educacion: {
      primaria: "Completo",
      secundaria: "Completo",
      otros: "Capacitación en desarrollo web, cursos de JavaScript, React, Node.js y FastAPI."
    },
  };

  return (
    // 2. Aplicamos los estilos usando el objeto 'styles'
    <section className={styles['seccion-container']}>
      <div className={styles['contenedor-perfil']}>
        <h2>Sobre Mí</h2>
        <p className={styles['perfil-profesional']}>{datos.perfil}</p>
      </div>

      <hr className={styles.separador} />

      {/* Cuando la clase no lleva guiones, puedes usar la notación de punto (.) directamente */}
      <div className={styles['grid-info']}>
        {/* Para combinar múltiples clases de CSS Modules, usamos templates literales `` */}
        <div className={`${styles['tarjeta-info']} ${styles['info-contacto']}`}>
          <h3>Contacto y Ubicación</h3>
          <p><strong>Teléfono:</strong> {datos.telefono}</p>
          <p><strong>Correo:</strong> {datos.correo}</p>
          <p><strong>GitHub:</strong> <a href={datos.Github} target="_blank" rel="noopener noreferrer">Ver perfil</a></p>
          <p><strong>Residencia:</strong> {datos.residencia}</p>
        </div>

        <div className={`${styles['tarjeta-info']} ${styles['info-academica']}`}>
          <h3>Preparación Académica</h3>
          <p><strong>Primaria:</strong> {datos.educacion.primaria}</p>
          <p><strong>Secundaria:</strong> {datos.educacion.secundaria}</p>
          <p><strong>Otros:</strong> {datos.educacion.otros}</p>
        </div>
      </div>
    </section>
  );
};

export default DatosPersonales;