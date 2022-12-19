import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { useProductContext, ProductContext } from '../contexts/ProductContext'
import { IProductContextType, Product } from '../models/Products'

export interface Props {
  articleNumber: string
  title: string
  items: any
  products: Product[]

}

const ProductGridSection: React.FC<Props> = ({title, items = []}) => {

  const {products} = useProductContext() as IProductContextType

  return (
    <section className="product-grid">
      <div className="container">
         <h1 className="featured-title">{title}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {
              items.map( (product: Product) => <ProductCard key={product.articleNumber} item={product} />)
            }
        </div>
      </div>
    </section>
  )
}

export default ProductGridSection