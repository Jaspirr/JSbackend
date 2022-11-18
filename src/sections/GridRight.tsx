import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { SaleContext } from '../contexts/contexts'
import { Product } from '../models/Products'

interface Props {
    items: any
    product: any
}

const GridRight: React.FC<Props> = ({items = []}) => {

    const products = useContext(SaleContext)

  return (
    <section>
        <div className="grid-right">
            <div className="container">
                <div className="min-right">
                    <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
                    {
                    items.map( (product: { articleNumber: React.Key | null | undefined }) => <ProductCard key={product.articleNumber} item={product} />)
                    }
                    </div>
                </div> 
                <div className="box-right">
                    <div className="box-text-right">
                        <h2>2 FOR USD $29</h2>
                        <NavLink to="/categories" id="box-btn-right" className="btn-theme-white btn-card-theme">
                            <span className="corner-left"></span>
                            <span className="corner-right"></span>
                            FLASH SALE
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GridRight