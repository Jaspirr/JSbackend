import React, { ReactNode } from 'react';
import ShoppingCart from '../components/ShoppingCart';

interface IShopping {
    children: any
}

const { createContext, useContext, useState } = require('react');

const ShoppingCartContext = createContext()

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider: React.FC<IShopping> = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const cartQuantity = cartItems.reduce(
        (quantity: any, item: { quantity: any; }) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: any) => {
        return cartItems.find((item: { articleNumber: any; }) => item.articleNumber === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItem: { articleNumber: any; product: any; }) => {
        const  {articleNumber, product} = cartItem

        setCartItems((items: any[]) => {
            if (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, { articleNumber, product, quantity: 1}]
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItem: { articleNumber: any; }) => {
        const  {articleNumber} = cartItem

        setCartItems((items: any[]) => {
            if (items.find(item => item.articleNumber === articleNumber).quantity === 1) {
                return items.filter(item => item.articleNumber !== articleNumber)
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (articleNumber: any) => {
        setCartItems((items: any[]) => {
            return items.filter(item => articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children}
        <ShoppingCart item={undefined} />
    </ShoppingCartContext.Provider>
}