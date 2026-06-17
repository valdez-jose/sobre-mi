import React from 'react'
import styles from '../css/Formulario.module.css'

const Formulario = () => {
  return (
    <>
      {/* Añadimos id="contacto" para conectarlo con el href del Header */}
      <div id="contacto" className={styles.container}>
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
