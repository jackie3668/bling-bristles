import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import discord from '../assets/discord.svg'
import youtube from '../assets/youtube.svg'
import pinterest from '../assets/pinterest.svg'

const Footer = () => {
  const socialMediaLinks = [
    { platform: 'Instagram', url: 'https://www.instagram.com/blingbristles/', icon: instagram },
    { platform: 'Facebook', url: 'https://www.etsy.com/shop/BlingBristles?ref=usf_2020', icon: facebook },
    { platform: 'Pinterest', url: 'https://www.pinterest.com/blingedbrushes/blinged-brushes/', icon: pinterest },
    { platform: 'Twitter', url: 'https://twitter.com/BlingBristles', icon: twitter },
    { platform: 'YouTube', url: 'https://www.tiktok.com/@blingbristles?lang=en', icon: youtube },
    { platform: 'Discord', url: 'https://www.etsy.com/shop/BlingBristles?ref=usf_2020', icon: discord },
  ];

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-logo">
          <Link style={{ textDecoration: 'none'}} onClick={() => window.scrollTo(0, 0)} to='/'><h1>Bling Bristles</h1></Link>
        </div>
        <div className="footer-info">
          <h3>Information</h3>
          <ul>
            <li><Link style={{ textDecoration: 'none'}} onClick={() => window.scrollTo(0, 0)} to='/'>Home</Link></li>
            <li><Link style={{ textDecoration: 'none'}} onClick={() => window.scrollTo(0, 0)} to='/about'>About</Link></li>
            <li><Link style={{ textDecoration: 'none'}} onClick={() => window.scrollTo(0, 0)} to='/faqs'>FAQs</Link></li>
            <li><Link style={{ textDecoration: 'none'}} onClick={() => window.scrollTo(0, 0)} to='/blog'>Blog</Link></li>
            <li><Link style={{ textDecoration: 'none'}} onClick={() => window.scrollTo(0, 0)} to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className="footer-shop">
          <h3>Help Center</h3>
          <ul>
            <li><Link style={{ textDecoration: 'none'}} onClick={() => window.scrollTo(0, 0)} to='/'>Shop</Link></li>
            <li><Link style={{ textDecoration: 'none'}} onClick={() => window.scrollTo(0, 0)} to='/faqs'>Privacy Policy</Link></li>
            <li><Link style={{ textDecoration: 'none'}} onClick={() => window.scrollTo(0, 0)} to='/faqs'>Shipping Policy</Link></li>
            <li><Link style={{ textDecoration: 'none'}} onClick={() => window.scrollTo(0, 0)} to='/faqs'>Refund Policy</Link></li>
            <li><Link style={{ textDecoration: 'none'}} onClick={() => window.scrollTo(0, 0)} to='/faqs'>Terms of Service</Link></li>
          </ul>
        </div>
        <div className="footer-brand">
          <h3>Bling Bristles</h3>
          <p>Discover a store that blends style and affordability seamlessly. Elevate your look with our exclusive fashion and accessories. Your unique style journey starts here. Shop with us today!</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span></span>
        <div className="socials">
          {socialMediaLinks.map((link, index) => (
            <Link key={index} to={link.url} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt={`${link.platform} Icon`} />
            </Link>
          ))}
        </div>
        <div className="copyright">© 2023 Bling Bristles. All rights reserved.</div>
      </div>

    </div>
  )
}

export default Footer