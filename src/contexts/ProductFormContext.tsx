import React, { useState, useContext, createContext } from 'react'
import { Product, ProductRequest } from '../models/ProductModel'
import { ProductProviderProps } from '../models/ProductProviderModel'

export interface IProductsContext {
    product: Product
    productRequest: ProductRequest
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
    products: Product[]
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    create: (e: React.FormEvent) => void
    get: (articleNumber: string) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (articleNumber: string) => void


}


export const ProductsFormContext = createContext<IProductsContext | null>(null)
export const useProductsUpdateContext = () => { return useContext(ProductsFormContext)}

const CreateProductProvider = ({children} : ProductProviderProps) => {

    const baseUrl = 'http://localhost:5000/api/products'
    const product_default: Product = {articleNumber: '',name:'', category: '', imageURL: '', title: '', description: '', price: 0}
    const productRequest_default: ProductRequest = { category: '', imageURL: '', title: '', description: '', price: 0}

    const [product, setProduct] = useState<Product>(product_default)
    const [productRequest, setProductRequest] = useState<ProductRequest>(productRequest_default)
    const [products, setProducts] = useState<Product[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}`, {

            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productRequest)

        
        })

        if (result.status === 201) {
            setProductRequest(product_default)
          
            
        }
        else
        console.log('error')
    }

   
    
    const get  =async (articleNumber: any) => {
        const result = await fetch(`${baseUrl}/${articleNumber}` )
        
        if (result.status === 200)
        setProduct(await result.json())
    
       
    }
    
    const getAll =async () => {
        const result = await fetch(`${baseUrl}` )
        
        if (result.status === 200)
        setProducts(await result.json())
    }
    
    const update =async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}/${product.articleNumber}`, {

            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)

        
        })

        if (result.status === 200) {
            setProduct(await result.json())
        }
    }

    const remove = async (articleNumber: string) => {
        const result = await fetch(`${baseUrl}/${articleNumber}`, {
            method: 'delete'
        })

        if (result.status === 204) {
            setProduct(product_default)
        }
    }

    return (
        <ProductsFormContext.Provider value={{product, setProduct, productRequest, setProductRequest, products, setProducts, create, get, getAll, update, remove}}> 
            {children}
        </ProductsFormContext.Provider>
    )
}

export default CreateProductProvider
