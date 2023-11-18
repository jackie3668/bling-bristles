import React from 'react'
import './Popular.css'
import all_product from '../assets/all_product.js'
import Item from '../item/Item'
import star from '../assets/star_img.png'

const Popular = () => {
  return (
    <div className="popular">
      <div className="wavy-border">
      </div>
      <div className="items-wrapper">
        <h1>TRENDING 
          <br />
          <span>Nail Designs</span>
          <img className='star-1' src={star} alt="" />
          <img className='star-2' src={star} alt="" />
        </h1>
        <div className="popular-item">
          {all_product.map((item, index) => {
              if (item.category.includes('popular')){
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }})}
        </div>
        <button>View All</button>
      </div>
    </div>
  )
}

export default Popular