import React from 'react'
import './NewCollections.css'
import new_collection from '../assets/new_collections'
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
          {new_collection.map((item, index) => {
              return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default NewCollections