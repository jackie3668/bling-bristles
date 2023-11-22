import React, { useContext, useState, useEffect } from 'react';
import './css/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../component/assets/dropdown_icon.png';
import Item from '../component/item/Item.jsx';
import ItemSale from '../component/item/ItemSale.jsx';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const filteredItems = all_product.filter((item) =>
    item.category.includes(props.category)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalItems = filteredItems.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [props.category]);


  return (
    <div className="shop-category">
      <div className="shopcategory-banner">
        {props.category === 'new' && <h1>NEW ARRIVALS</h1>}
        {props.category === 'all' && <h1>ALL PRODUCTS</h1>}
        {props.category === 'sale' && <h1>ON SALE</h1>}
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>{`Showing ${indexOfFirstItem + 1}-${indexOfLastItem} out of ${totalItems} products`}</span>
        </p>
        <div className="shopcategory-sort">
          <p>Sort by</p>
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {currentItems.map((item, index) => {
          if (props.category === 'sale') {
            return (
              <ItemSale
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
              />
            );
          }
        })}
      </div>
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
