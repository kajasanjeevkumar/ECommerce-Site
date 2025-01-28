import './style.css'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';

function Cart() {
  const cart=useSelector((state)=>state.cart.items);
  let count=cart.length;
  
  return (
    <>
       <div className="heading">
        <h1>Your cart has {count} different items</h1>
      </div>
      <div className='table-div'>
          <table border="2">
            <thead>
              <tr>
                <th className='sno'>S.No</th>
                <th>Product Title</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Modify Quanitity</th>
                <th>Remove Item</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item,index)=>(
                <tr key={item.id}>
                  <CartItem item={item} index={index}></CartItem>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
      
    </>
  )
}

export default Cart
