

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from '../css/Formulario.module.css'

const SERVICE_ID = 'service_3vjlfg1'
const TEMPLATE_ID = 'template_7ardeil'
const PUBLIC_KEY = 'khvffbAR_emplDr6Z'

const Formulario = () => {
  const formRef = useRef(null)
  const [estado, setEstado] = useState('')
  const [enviando, setEnviando] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formRef.current) return

    setEnviando(true)
    setEstado('')

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        { publicKey: PUBLIC_KEY }
      )

      setEstado('¡Mensaje enviado correctamente!')
      formRef.current.reset()
    } catch (error) {
      console.error('Error de EmailJS:', error)
      setEstado('No se pudo enviar el mensaje. Intentá nuevamente.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div id="contacto" className={styles.container}>
      <div className={styles['title-box']}>
        <h2>Escríbeme</h2>
      </div>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles['inputs-row']}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            autoComplete="name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correo"
            autoComplete="email"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Mensaje..."
          required
        />

        <div className={styles['btn-container']}>
          <button type="submit" disabled={enviando}>
            {enviando ? 'Enviando...' : 'Enviar'}
          </button>
        </div>

        {estado && <p role="status">{estado}</p>}
      </form>
    </div>
  )
}

export default Formulario
