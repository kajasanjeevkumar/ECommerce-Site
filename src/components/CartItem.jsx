import { useDispatch } from "react-redux";
import { addItem,removeItem,clearItem } from "../redux/cartSlice";
import './style.css';

function CartItem({item,index}) {
  const dispatch=useDispatch();
  return (
    <>
          <td className="sno">{index+1}</td>
          <td>{item.title}</td>
          <td>
            <img src={item.thumbnail} alt={item.title} style={{ width: '80px', height:'80px'}} />
          </td>
          <td>{item.quantity}</td>
          <td >
            <button className='modify-btn' onClick={() => dispatch(addItem(item))}>+</button>
            <button className='modify-btn' onClick={() => dispatch(removeItem(item))}>-</button>
          </td>
          <td>
            <button className="clear-btn" onClick={() => dispatch(clearItem(item))}>Remove</button>
          </td>     

    </>
  )
}

export default CartItem
