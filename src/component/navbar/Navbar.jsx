import React, { useState } from 'react'
import './Navbar.css'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
import arrow_icon from '../assets/arrow.png'

const Navbar = () => {

  const [menu, setMenu] = useState("shop");  

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link style={{ textDecoration: 'none'}} to='/'><h1>Bling Bristles</h1></Link>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link style={{ textDecoration: 'none'}} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{ textDecoration: 'none'}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: 'none'}} to='/login'><button>Login<img src={arrow_icon} alt="" /></button></Link>
        <Link style={{ textDecoration: 'none'}} to='/cart'><img className='cart-icon' src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar