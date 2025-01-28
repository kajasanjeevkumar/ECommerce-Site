import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { useSelector } from 'react-redux';

function ProductItem({product}) {
  const dispatch=useDispatch();
  const cart=useSelector((store)=>store.cart.items);
  const cartProduct = cart.find((item) => item.id === product.id); 
  const count=cartProduct?cartProduct.quantity:0;

  return (
    <div className='product-card'>
       <Link to={`/product/${product.id}`}>
        <h3>{product.title}</h3>
        <img src={product.thumbnail} alt={product.title} style={{ width: "320px", height: "200px" }}/>
      </Link>
      <button className='cart-btn' onClick={() => dispatch(addItem(product))}>Add to Cart</button>
      {count>0 && <h5 className='count'>{count}</h5>}
    </div>
  )
}

export default ProductItem
