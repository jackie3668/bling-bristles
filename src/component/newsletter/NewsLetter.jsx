import React from 'react'
import './NewsLetter.css'
import star from '../assets/star_img.png'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <div className="wavy-border">
      </div>
      <div className="newsletter-wrapper">
        <h1>SUBSCRIBE 
          <span>To Our Emails</span>
          <img className='star-1' src={star} alt="" />
          <img className='star-2' src={star} alt="" />
        </h1>
        <p>Be the first to know about new collections and exclusive offers.</p>
        <div>
          <input type="email" placeholder='Email'/>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter