import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Head from '../components/Head'

import styles from './styles/Product.module.css'

export default function Product(props) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    async function getProductData(url) {
      try {
        setLoading(true)
        const response = await fetch(url)
        const json = await response.json()
        setProduct(json)
      } catch (err) {
        setError("Ocorreu um erro ao buscar os dados do produto selecionado.")
      } finally {
        setLoading(false)
      }
    }
    getProductData(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  if (loading) {
    return <div>Carregando...</div>
  }
  if (error) {
    return <p>{error}</p>
  }
  if (!product) {
    return null
  }
  return (
    <section className={`${styles.product} animeLeft`}>
      <Head
        title={`Gasgets | ${product.nome}`}
        description={`Dados do produto - ${product.nome}`}
      />
      {
        product.fotos.map((picture) =>
          <img key={picture.src} src={picture.src} alt={picture.titulo}/>
        )
      }
      <div>{product.nome}</div>
      <span className={styles.price}>R$ {product.preco}</span>
      <p className={styles.descricao}>{product.descricao}</p>
    </section>
  )
}
