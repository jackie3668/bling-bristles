import React from 'react'
import './Hero.css'
import new_icon from '../assets/new_icon.png'
import star from '../assets/star_img.png'

const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <div className="hero-left">
          <h1>SHOP NEW ARRIVALS</h1>
          <button>SHOP NOW</button>
          <img className='img-1' src={star} alt="" />
          <img className='img-2' src={star} alt="" />
          <img className='img-3' src={star} alt="" />
        </div>
        <div className="hero-right">
          <img src={new_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero