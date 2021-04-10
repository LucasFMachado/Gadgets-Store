import React, { useEffect, useState } from 'react'
import styles from './styles/Products.module.css'
import { Link } from 'react-router-dom'
import Head from '../components/Head'

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      // await fetch('https://ranekapi.origamid.dev/json/api/produto')
      await fetch('https://my-json-server.typicode.com/LucasFMachado/GadgetsStore/products')
        .then(r => r.json())
        .then(json => setProducts(json))
    }
    getProducts()
  }, [])

  if (products.length <= 0) {
    return null
  }

  return (
    <section className={`${styles.products} animeLeft`}>
      <Head
        title="Gasgets"
        description="Página inicial do site Gasgets Store"
      />
      {
        products.map(product => {
          console.warn('psdad', product)
          return (
          <Link to={`product/${product.id}`} key={product.id}>
            <img src={product.image} alt={product.name} />
            <h1 className={styles.name}>{product.name}</h1>
          </Link>
        )
          })
      }
    </section>
  )
}
