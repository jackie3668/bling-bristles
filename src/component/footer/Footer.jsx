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
          <Link style={{ textDecoration: 'none'}} to='/'><h1>Bling Bristles</h1></Link>
        </div>
        <div className="footer-info">
          <h3>Information</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-shop">
          <h3>Help Center</h3>
          <ul>
            <li>Shop</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer-brand">
          <h3>Bling Bristles</h3>
          <p>Write something enticing about your stored here. What makes your store special? Why should people buy something from you?</p>
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