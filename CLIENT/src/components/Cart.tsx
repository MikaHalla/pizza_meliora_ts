import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Cart = () => {
  const { cartItems } = useContext(AppContext);
  return (
    <div className="shopping-cart">
      {cartItems.length > 0 ? (
        <Link to="/shopping-cart">{cartItems.length}</Link>
      ) : null}
    </div>
  );
};
export default Cart;
