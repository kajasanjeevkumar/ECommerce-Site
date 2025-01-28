import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import useFetchProducts from '../customHooks/fetchProducts';
import "./style.css";

function ProductList() {
  const [search, setSearch] = useState('');
  const {products,loading,error}=useFetchProducts("https://dummyjson.com/products");
  if(loading){return <h1>Loading...</h1>}
  if(error){return <h1>{error}</h1>}

  const filteredItems=products.filter((p)=>p.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      <span className='search'>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> 
      </span>
       
      <ul className="itemList">
      {filteredItems.map((product) => (
          <li key={product.id} className="item"><ProductItem  product={product} /></li>
        ))}
      </ul>
    </>
  )
}

export default ProductList
