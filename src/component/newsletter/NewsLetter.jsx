import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>GET EXCLUSIVE OFFERS IN YOUR EMAIL</h1>
      <p>Subscribe to our newsletter and let's stay in touch</p>
      <div>
        <input type="email" placeholder='your@email.com'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter