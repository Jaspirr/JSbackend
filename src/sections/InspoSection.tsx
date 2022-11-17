import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from '../assets/images/pamela.svg'
import img2 from '../assets/images/lets-be.svg'

const InspoSection = () => {
  return (
    // Insperation för kunderna.
    <section className="inspo">
        <div className="container">
            <img className="pamela" src={img1} alt="pamela"/>
            <p className="pamela-title">Pamela Reif's Top Picks</p>
            <NavLink to="/categories" id="pamela-btn" className="btn-theme-white btn-card-theme">
                <span className="corner-left"></span>
                <span className="corner-right"></span>
                SHOP NOW
            </NavLink>
            <p className="lets-be-title">Let's Be &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Conscious</p>
            <NavLink to="/categories" id="lets-be-btn" className="btn-theme-white btn-card-theme">
                <span className="corner-left"></span>
                <span className="corner-right"></span>
                FLASH SALE
            </NavLink>
            <img className="lets-be" src={img2} alt="lets-be"/>

        </div>
    </section>
  )
}

export default InspoSection