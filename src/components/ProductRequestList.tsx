import React, { useEffect } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import { IProductContextType } from '../models/Products'
import { Product } from '../models/Products'


const ProductRequestList = () => {
    const { products, getAll } = React.useContext(ProductContext) as IProductContextType 

    useEffect(() => {
        getAll()

    }, [])
    
    
    return (
        <>
            <h3 className="display-6 mb-4"></h3>
            {
                products.map((product: Product) => (<div key={product.articleNumber}className="mb-3">{product.imageURL}{product.title}{product.description}{product.price}</div>))
            }
    
        </>
    )
}

export default ProductRequestList