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
    getProductData(`https://my-json-server.typicode.com/LucasFMachado/GadgetsStore/products/${id}`)
  }, [id])

  if (loading) {
    return <div className="loading"></div>
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
        title={`Gasgets | ${product.name}`}
        description={`Dados do produto - ${product.name}`}
      />
      <div>
        <img key={product.image} src={product.image} alt={product.name}/>
      </div>
      <div>
        <h1>{product.name}</h1>
        <span className={styles.price}>R$ {product.price}</span>
        <p className={styles.description}>{product.description}</p>
      </div>
    </section>
  )
}
