import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import MainMenuSection from '../sections/MainMenuSection'

const ProductDetailsView: React.FC = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
  
  
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
            setProduct(await result.json())
        }
        fetchData()
    }, [])

    return (
    <>
        <MainMenuSection />
        <BreadcrumbSection currentPage="Products" />
        <ProductGridSection items={product} articleNumber={''} title={''} products={[]} />
        <FooterSection />
    
    </>
  )
}

export default ProductDetailsView