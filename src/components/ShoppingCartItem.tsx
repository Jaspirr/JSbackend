import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/currencyFormatter'

interface Props {
    item: any
}

const ShoppingCartItem: React.FC<Props> = ({item}) => {
    const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart()



    return (
        // kundvagnen
        <div className="shoppingcart-item">
            <div className="item-image">
                <img src={item.product.imageName} alt={item.product.name} />
            </div>
            <div className="item-info">
                <div className="item-info-name">{item.product.name}</div>
                <div className="item-info-quantity-box">
                    <button className="box-button-left" onClick={() => incrementQuantity(item)}>+</button>
                    <span>{item.quantity}</span>
                    <button className="box-button-right" onClick={() => decrementQuantity(item)}>-</button>
                </div>
            </div>
            <div className="item-price">
                <div>{currencyFormatter(item.product.price * item.quantity)}</div>
                <button onClick={() => removeItem(item.articleNumber)}><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>
  )
}

export default ShoppingCartItem