import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Cart = () => {
  const { cartItems } = useContext(AppContext);
  return (
    <Link to="/shopping-cart">
      <div className="shopping-cart">
        <i className="fa-solid fa-cart-shopping"></i>
        <div className="shopping-cart-counter">
          {cartItems.length}
        </div>
      </div>
    </Link>
  );
};
export default Cart;
