export interface ProductRequest {
   
    imageURL?: string
    category?: string 
    rating?: string
    title?: string
    description?: string
    price: number
  
}

export interface Product {
   
    imageURL?: string
    articleNumber?: string
    name: string
    category?: string 
    rating?: string
    title?: string
    description?: string
    price: number
    

  }