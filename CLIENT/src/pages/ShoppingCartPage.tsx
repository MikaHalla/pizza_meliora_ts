import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import Modal from '../components/Modal';
import AppContext from '../context/AppContext';
import Home from './Home';

const ShoppingCartPage = () => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const sendOrder = () => {
    console.log(cartItems);
    setCartItems([]);
  };

  return (
    <>
      <Home />
      <Modal>
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
              .reduce(
                (prev, curr) =>
                  curr.price ? curr.price + prev : 0 + prev,
                0
              )
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
      </Modal>
    </>
  );
};
export default ShoppingCartPage;
