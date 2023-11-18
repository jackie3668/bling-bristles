import React from 'react'
import './ItemSale.css'

const ItemSale = (props) => {
  return (
    <div className='item'>
    <img src={props.image} alt="" />
    <p className='name'>{props.name}</p>
    <div className='item-prices'>
      <div className="item-price-new">
        ${props.new_price}
      </div>
      <div className="item-price-old">
        ${props.old_price}
      </div>
    </div>
  </div>
  )
}

export default ItemSale