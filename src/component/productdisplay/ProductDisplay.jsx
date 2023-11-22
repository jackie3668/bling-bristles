import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import all_product from '../assets/all_product'
import Item from '../item/Item'
import Collapsible from '../collapsible/Collapsible';

const ProductDisplay = ( props ) => {
  const {product} = props
  const array = []
  const {addToCart, addToCartNow} = useContext(ShopContext)
  
  return (
    <div className="product-details-container">
      <div className='productdisplay'>
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1 className='productdisplay-right-name'>{product.name}</h1>
          <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-prices-new">${product.new_price}</div>
            {product.category.includes('sale') && <div className="productdisplay-right-prices-old">${product.old_price}</div>}
          </div>

          <div className="productdisplay-right-size">
            <p className='productdisplay-right-size-select'>Select Size</p>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
            </div>
          </div>

          <div className="productdisplay-right-buttons">
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <Link to='/checkoutnow'><button onClick={()=>{addToCartNow(product.id)}}>BUY IT NOW</button></Link>
            <p>{product.keyword}</p>
          </div>

          <div className="productdisplay-right-description">
            <p>Description</p>
            {product.description}
          </div>

          <Collapsible />
        </div>
      </div>
      <div className="relatedproducts">
        <p>You may also like</p>
        <div className="relatedproducts-item">
          {all_product.map((item, index) => {
            
            if (
              item.keywords.some(keyword => product.keywords.includes(keyword)) &&
              item.id !== product.id
            ) {
              array.push(item.id)
              if (array.length <= 4) {
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
              }
            }
          })}
        </div>
      </div>
    </div>
    
  )
}

export default ProductDisplay