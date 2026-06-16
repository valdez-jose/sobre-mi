import React from "react";
// 1. Importamos asignando la variable styles
import styles from "../css/Servicios.module.css";

const Servicios = () => {
  return (
    // 2. Usamos la notación de corchetes para clases con guiones o guiones bajos
    <section className={styles['contenedor__cards']}>
      <h2>Mis Servicios</h2>

      <div className={styles['contenido-cards']}>

        <article className={styles['card-item']}>
          <img
            src="https://abbtech.az/storage/uploads/files/1687508692_1615533694-frontendd.svg"
            srcSet="https://abbtech.az/storage/uploads/files/1687508692_1615533694-frontendd.svg"
            alt="Frontend"
          />
          <h4>Desarrollo Frontend</h4>
          <p>
            Creación de interfaces web modernas utilizando React,
            JavaScript y TypeScript, adaptadas a dispositivos móviles
            y de escritorio.
          </p>
        </article>

        <article className={styles['card-item']}>
          <img
            src="https://img-c.udemycdn.com/course/750x422/6743757_f56a_2.jpg"
            srcSet="https://img-c.udemycdn.com/course/750x422/6743757_f56a_2.jpg"
            alt="Backend"
          />
          <h4>Desarrollo Backend</h4>
          <p>
            Desarrollo de APIs REST con FastAPI, manejo de rutas,
            validación de datos e integración con aplicaciones web.
          </p>
        </article>

        <article className={styles['card-item']}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lrFluAFc9zc_Tv5KoeOBvO-G-GAMOyaF84KHZHgH1DvQHu1NKFaiyXA&s=10"
            srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lrFluAFc9zc_Tv5KoeOBvO-G-GAMOyaF84KHZHgH1DvQHu1NKFaiyXA&s=10"
            alt="Bases de datos"
          />
          <h4>Bases de Datos y Despliegue</h4>
          <p>
            Integración con PostgreSQL y despliegue de aplicaciones
            web utilizando plataformas como Vercel y Render.
          </p>
        </article>

      </div>

      <div className={styles['perfil-profesional']}>
        <p>
          Me interesa colaborar con desarrolladores en proyectos de
          software, aportar soluciones, adquirir experiencia práctica
          y seguir creciendo profesionalmente en el desarrollo web
          Full Stack.
        </p>
      </div>
    </section>
  );
};

export default Servicios;