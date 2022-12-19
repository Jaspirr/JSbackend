import React, {useState, useContext} from 'react'
import { createContext } from 'react';
import { IProductContextType } from '../models/Products';
import { Product, ProductRequest } from "../models/ProductModel"

export interface Props {
  children: any
}
export interface ProductContext {
  product: Product
  products: Product[]
  featured: Product[]
  get: (articleNumber?: string ) => void
  getAll: (take?: number ) => void
  getProducts: (take?: number ) => void
  getFeatured: (take?: number ) => void
}



export const useProductContext = () => {
  return useContext(ProductContext)
}

export const ProductContext = createContext<IProductContextType | any>(null)

export const ProductProvider: React.FC<Props> = ({children}) => {
  const baseUrl= 'http://localhost:5000/api/products'
  const EMPTY_PRODUCT: Product = { articleNumber: '', name:'', category: '', price: 0, imageURL: ''}
  
  const [product, setProduct] = useState<Product>(EMPTY_PRODUCT)
  const [products, setProducts] = useState<Product[]>([])
  const [featured, setFeatured] = useState<Product[]>([])

  const get = async (articleNumber?: string) => {
    if (articleNumber !== undefined) {
      const res = await fetch(`${baseUrl}/details/${articleNumber}`)
        setProduct(await res.json())
    }
  }

  const getAll =async () => {
    const result = await fetch(`${baseUrl}` )
    
    if (result.status === 200)
    setProducts(await result.json())
}

  const getProducts = async () => {
    let res = await fetch(baseUrl)
    setProducts(await res.json())
  }
  const getFeatured = async (take = 0) => {
    let res = await fetch(baseUrl + `?take=${take}`)
    setFeatured(await res.json())
  }

  return <ProductContext.Provider value={{products, product, setProduct, featured, get, getAll, getProducts, getFeatured}}>
    {children}
  </ProductContext.Provider>
}
