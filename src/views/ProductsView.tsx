import React, { useContext } from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../contexts/contexts'

const ProductsView: React.FC = () => {
  const products = useContext(ProductContext)

  return (
    <>
        <MainMenuSection />
        <BreadcrumbSection currentPage="Products" />
        <ProductGridSection title="Products" items={products} articleNumber={''} products={[]}/>
        <FooterSection />
    </>
  )
}

export default ProductsView