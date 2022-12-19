export interface Product {
    title: string
    imageURL: string
    articleNumber: string
    name: string
    description: string
    category: string
    rating: number
    price: number
    oldPrice: number
    imgName: string
}

export interface IProductContextType {
    products: Product[]
    featured: Product[]
    getAll: () => void
    getProducts: () => void
    getFeatured: () => void

}