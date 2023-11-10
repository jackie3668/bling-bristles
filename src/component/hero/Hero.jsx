import React from 'react'
import './Hero.css'
import arrow_icon from '../assets/arrow.png'
import collage_1 from '../assets/collage_1.png'
import collage_2 from '../assets/collage_2.jpg'
import collage_3 from '../assets/collage_3.jpg'
import collage_4 from '../assets/collage_4.png'
import finger_icon from '../assets/finger_icon.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h1>NEW<br />ARRIVALS</h1>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</h6>
        <div className="hero-latest-btn-icon">
          <div className="hero-latest-btn">
            <div>Get Your Bling On</div>
            <img src={arrow_icon} alt="" />
          </div>
          <img className='finger-icon' src={finger_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <div className="collage-1">
          <img src={collage_1} alt="" />
        </div>
        <div className="collage-2">
          <img src={collage_2} alt="" />
        </div>
        <div className="collage-3">
          <img src={collage_3} alt="" />
        </div>
        <div className="collage-4">
          <img src={collage_4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero