import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import AppContext from '../context/AppContext';

const ShoppingCartPage = () => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const sendOrder = () => {
    console.log(cartItems);
    setCartItems([]);
  };

  return (
    <section className="cart-items">
      <ul>
        {cartItems.map((item) => (
          <CartItem
            number={item.number}
            name={item.name}
            price={item.price}
          />
        ))}
      </ul>
      <div className="price-total">
        Celkom:{' '}
        {cartItems
          .reduce((prev, curr) => curr.price + prev, 0)
          .toFixed(2)}{' '}
        €
      </div>
      <Link to="/">
        <button className="shopping-button continue">
          Pokračovať v nákupe
        </button>
      </Link>
      <Link to="/">
        <button
          className="shopping-button finish"
          onClick={() => sendOrder()}
        >
          Objednať
        </button>
      </Link>
    </section>
  );
};
export default ShoppingCartPage;
