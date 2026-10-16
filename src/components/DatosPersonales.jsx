
import React from "react";
// 1. Importamos los estilos asignándoles una variable (styles)
import styles from "../css/DatosPersonales.module.css";

const DatosPersonales = () => {
  const datos = {
    perfil: "Desarrollador Web Full Stack con JavaScript, especializado en la creación de interfaces interactivas, eficientes y modulares.",
    telefono: "2665257500 (mensaje whatsapp)",
    correo: "jusepetony7@gmail.com",
    Github: "https://github.com/valdez-jose",
    portafolio: "https://nuevo-portafolio-angular.vercel.app/",
    residencia: "San Luis - Capital (Argentina)",
    educacion: {
      primaria: "Completo",
      secundaria: "Completo",
      // Definimos los ítems de "Otros" en una lista/array para ordenarlos fácilmente
      otros: [
        "Teología básica (Instituto Misionero Tiranno Bs.As.)",
        "Desarrollador fullStack con JS",
        "Backend",
        "Frontend"
      ],
    },
    nota: "Religión: Cristiano evangélico",
  };

  return (
    // 2. Aplicamos los estilos usando el objeto 'styles'
    <section className={styles['seccion-container']}>
      <div className={styles['contenedor-perfil']}>
        <h2>Sobre Mí</h2>
        <p className={styles['perfil-profesional']}>{datos.perfil}</p>
      </div>

      <hr className={styles.separador} />

      {/* Contenedor de las dos tarjetas */}
      <div className={styles['grid-info']}>
        {/* Tarjeta 1: Contacto y Ubicación */}
        <div className={`${styles['tarjeta-info']} ${styles['info-contacto']}`}>
          <h3>Contacto y Ubicación</h3>
          <p><strong>Teléfono:</strong> {datos.telefono}</p>
          <p><strong>Correo:</strong> {datos.correo}</p>
          <p><strong>GitHub:</strong> <a href={datos.Github} target="_blank" rel="noopener noreferrer">Ver perfil</a></p>
          <p><strong>Portafolio:</strong> <a href={datos.portafolio} target="_blank" rel="noopener noreferrer">Ver portafolio</a></p>
          <p><strong>Residencia:</strong> {datos.residencia}</p>
        </div>

        {/* Tarjeta 2: Preparación Académica */}
        <div className={`${styles['tarjeta-info']} ${styles['info-academica']}`}>
          <h3>Preparación Académica</h3>
          <p><strong>Primaria:</strong> {datos.educacion.primaria}</p>
          <p><strong>Secundaria:</strong> {datos.educacion.secundaria}</p>
          
          {/* Sección 'otros' estructurada */}
          <p><strong>Otros:</strong></p>
          <div className={styles['sub-stack']} style={{ paddingLeft: '1rem', marginTop: '0.25rem' }}>
            {datos.educacion.otros.map((item, index) => (
              <p key={index} style={{ margin: '0.1rem 0' }}>{item}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Párrafo colocado debajo de ambas tarjetas */}
      <div className={styles['contenedor-nota']} style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <p><strong>Nota:</strong> {datos.nota}</p>
      </div>
    </section>
  );
};

export default DatosPersonales;