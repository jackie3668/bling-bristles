import React, { useState } from 'react'
import './Navbar.css'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className="fixed-bar">
        FREE SHIPPING ON ALL ORDERS OVER $200
      </div>
      <div className='navbar'>
        <div className="nav-logo">
          <Link style={{ textDecoration: 'none'}} to='/'><h1>Bling Bristles</h1></Link>
        </div>
        <ul className="nav-menu">
          <li><Link style={{ textDecoration: 'none'}} to='/'>Home</Link></li>
          <li><Link style={{ textDecoration: 'none'}} to='/all'>Shop All</Link></li>
          <li><Link style={{ textDecoration: 'none'}} to='/new'>New Arrivals</Link></li>
          <li><Link style={{ textDecoration: 'none'}} to='/sale'>Sale</Link></li>
          <li><Link style={{ textDecoration: 'none'}} to='/about'>About</Link></li>
          <li><Link style={{ textDecoration: 'none'}} to='/about'>FAQs</Link></li>
          <li><Link style={{ textDecoration: 'none'}} to='/about'>Contact</Link></li>
        </ul>
        <div className="nav-login-cart">
          <Link style={{ textDecoration: 'none'}} to='/login'><button>Login</button></Link>
          <Link style={{ textDecoration: 'none'}} to='/cart'><img className='cart-icon' src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar