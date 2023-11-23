import React from 'react'
import './Offers.css'
import star from '../assets/star_img.png'
import offers_image from '../assets/offers_image.png'

const Offers = () => {
  return (
    <div className="offers">
      <div className="wavy-border">
      </div>
      <div className="offers-container">
        <div className="offers-left">
          <h1>EXCLUSIVE
            <br />
            <span>Offers For You</span>
            <img className='star-1' src={star} alt="" />
            <img className='star-2' src={star} alt="" />
          </h1>
          <p>
          Unlock Glamour Now! Exclusive offers await! 
          <br />
          Shop with us until 12/31 to snag a free set of Bling Bristle trendy press-ons.
          <br />
          Plus, enjoy free shipping on orders over $200. 
          Elevate your style and dive into a world of beauty! 💅✨</p>
          <button>Shop Now</button>
        </div>
        <div className="offers-right">
          <img className='offers-img'src={offers_image} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Offers