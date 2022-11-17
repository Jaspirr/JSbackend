import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { SaleContext } from '../contexts/contexts'

const GridLeft = ({items = []}) => {

    const products = useContext(SaleContext)
    
  return (
    // Första griden
    <section>
        <div className="grid-left">
            <div className="container">
                <div className="box">
                    <div className="box-text">
                        <h2>2 FOR USD $29</h2>
                        <NavLink to="/categories" id="box-btn" className="btn-theme-white btn-card-theme">
                            <span className="corner-left"></span>
                            <span className="corner-right"></span>
                            FLASH SALE
                        </NavLink>
                    </div>
                </div>
                <div className="min">
                    <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
                    {
                    items.map( product => <ProductCard key={product.articleNumber} item={product} />)
                    }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GridLeft