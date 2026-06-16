import React from 'react'
// 1. Importamos asignando la variable styles
import styles from '../css/Formulario.module.css'

const Formulario = () => {
  return (
    <>
      {/* 2. Cambiamos las clases de texto por las propiedades del objeto styles */}
      <div className={styles.container}>
        <div className={styles['title-box']}>
          <h2>Escríbeme</h2>
        </div>

        <form>
          <div className={styles['inputs-row']}>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Correo" required />
          </div>
          <textarea placeholder="Mensaje..." required></textarea>
          
          <div className={styles['btn-container']}>
             <button type="submit">Enviar</button>
          </div>
        </form>
    </div>
    </>
  )
}

export default Formulario