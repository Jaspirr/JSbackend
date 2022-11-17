import React from 'react'
import { NavLink } from 'react-router-dom'
import img2 from '../assets/images/showcase-img-2.png'
const TopSaleSection = () => {
  
    return (
    // Top sale sektion.
    <section className="top-sale-section">
        <div className="container">

            <img className="img-left" src='https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png' alt='placeholder'/>
            <div className="top-sale-title-first">
                SALE UP 
            </div>
            <div className="top-sale-title-second">
                To 50% Off
            </div>
            <div className="under-text">Online shopping free home delivery over $100</div>
            <NavLink to="/products" id="top-sale-btn" className="btn-theme btn-card-theme">
                <span className="corner-left"></span>
                <span className="corner-right"></span>
                SHOP NOW
            </NavLink>
            <img className="img-right " src={img2}></img>
         </div>
    </section>
  )
}

export default TopSaleSection