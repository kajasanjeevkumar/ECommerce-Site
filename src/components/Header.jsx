import { Link } from 'react-router-dom';
import "./style.css";
function Header() {
  return (
    <header>
      <nav>
        <ul className="navBar">
          <li className='nav-item'><Link to="/">Home</Link></li>
          <li className='nav-item'><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <hr />
    </header>
  )
}

export default Header
