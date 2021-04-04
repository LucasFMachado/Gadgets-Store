import React from 'react'
import styles from './styles.css'
import contactImg from '../../assets/images/programmer.jpeg'

export default function Contact() {
  return (
    <section className={styles.contact}>
      <img src={contactImg} alt="Contact image" />
      <h1>Contato</h1>
    </section>
  )
}
