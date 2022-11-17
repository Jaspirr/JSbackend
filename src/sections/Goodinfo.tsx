import React from 'react'

export const GoodInfo = () => {
  return (
    // bra info om sidan.
    <section className="good-info">
        <div className="container">
            <div className="customer-support">
                <div className="info-circle"><i className="fa-solid fa-headset"></i></div>
                <div className="info-title">Customer Support</div>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="secured-payment">
                <div className="info-circle"><i className="fa-regular fa-credit-card"></i></div>
                <div className="info-title">Secured Payment</div>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="free-home-delivery">
                <div className="info-circle"><i className="fa-solid fa-truck"></i></div>
                <div className="info-title">Free Home Delivery</div>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="day-reuters">
                <div className="info-circle"><i className="fa-solid fa-truck"></i></div>
                <div className="info-title">30 Day Reuters</div>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </div>
    </section>
  )
}

export default GoodInfo