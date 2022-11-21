import {createContext} from 'react'

interface AppContextInterface {
    
}

export const ProductContext = createContext<AppContextInterface | null>(null); 
export const FeaturedProductsContext = createContext<AppContextInterface | null>(null);
export const SaleContext = createContext<AppContextInterface | null>(null);