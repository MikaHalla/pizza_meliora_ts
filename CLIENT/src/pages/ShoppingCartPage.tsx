import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const ShoppingCartPage = () => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const sendOrder = () => {
    console.log(cartItems);
    setCartItems([]);
  };

  return (
    <div>
      <Link to="/">
        <button>Pokračovať v nákupe</button>
      </Link>
      <Link to="/">
        <button onClick={() => sendOrder()}>
          Odoslať objednávku
        </button>
      </Link>
    </div>
  );
};
export default ShoppingCartPage;
