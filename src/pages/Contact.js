import React from 'react'
import styles from './styles/Contact.module.css'
import contact from '../assets/images/contact.jpg'
import Head from '../components/Head'

export default function Contact() {
  return (
    <section className={`${styles.contact} animeLeft`}>
      <Head
        title="Gasgets | Contato"
        description="Entre em contato conosco"
      />
      <img src={contact} alt="Máquina de escrever" />
      <div>
      <h1>Entre em contato</h1>
      <ul className={styles.informations}>
        <li>lucas.fmachado19@gmail.com</li>
        <li>(55) 99999-9999</li>
        <li>Rua da loja, 999</li>
      </ul>
      </div>
    </section>
  )
}
