import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../component/assets/dropdown_icon.png'
import Item from '../component/item/Item.jsx'
import ItemSale from '../component/item/ItemSale.jsx'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className="shop-category">
      <div className="shopcategory-banner">
        {props.category === 'new' && <h1>NEW ARRIVALS</h1>}
        {props.category === 'all' && <h1>ALL PRODUCTS</h1>}
        {props.category === 'sale' && <h1>ON SALE</h1>}
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          <p>Sort by</p><img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, index) => {
          if (item.category.includes(props.category)){
            if (props.category==="sale") {
              return <ItemSale key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            } else {
              return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
            }
          } 
          else {
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory