import React from 'react'
import { Link } from 'react-router-dom'
import './ItemSale.css'

const ItemSale = (props) => {
  return (
    <div className='item'>
    <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
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