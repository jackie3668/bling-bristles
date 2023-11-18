import React from 'react'
import './NewCollections.css'
import all_product from '../assets/all_product.js'
import Item from '../item/Item.jsx'
import star from '../assets/star_img.png'

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <div className="items-wrapper">
        <h1>
          <img className='star-1' src={star} alt="" />
          NEW ARRIVALS
          <img className='star-2' src={star} alt="" />
        </h1>
        <div className="collections">
          {all_product.map((item, index) => {
            if (item.category.includes('new')){
              return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }})}
        </div>
      </div>
    </div>
  )
}

export default NewCollections