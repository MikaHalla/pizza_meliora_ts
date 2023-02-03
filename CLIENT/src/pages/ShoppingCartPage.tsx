import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import Modal from '../components/Modal';
import AppContext from '../context/AppContext';
import Home from './Home';

const ShoppingCartPage = () => {
  const { cartItems, setCartItems, setModalOpen } =
    useContext(AppContext);

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
                id={item.id}
                name={item.name}
                price={item.price}
              />
            ))}
          </ul>
          <footer>
            <div className="price-total">
              Celkom:{' '}
              {cartItems
                .reduce(
                  (prev, curr) =>
                    curr.price ? curr.price + prev : 0 + prev,
                  0
                )
                .toFixed(2)
                .replace('.', ',')}{' '}
              €
            </div>
            <Link to="/" onClickCapture={() => setModalOpen(false)}>
              <button className="shopping-button continue">
                Pokračovať v nákupe
              </button>
            </Link>

            <Link to="/" onClickCapture={() => setModalOpen(false)}>
              <button
                className="shopping-button finish"
                onClick={() => sendOrder()}
              >
                Objednať
              </button>
            </Link>
          </footer>
        </section>
      </Modal>
    </>
  );
};
export default ShoppingCartPage;
