import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import Modal from '../components/Modal';
import AppContext from '../context/AppContext';
import Home from './Home';

const ShoppingCartPage = () => {
  const { cartItems, setCartItems, setModalOpen } =
    useContext(AppContext);

  const [total, setTotal] = useState(0);

  const sendOrder = async () => {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      //TODO redirect to login
      console.log('login plz');
    } else {
      const currentUser = JSON.parse(user);

      const res = await fetch(
        'https://pizza-meliora.cyclic.app/api/orders',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer: ${currentUser.token}`,
          },
          body: new URLSearchParams({
            order: JSON.stringify(cartItems),
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    }
    setCartItems([]);
  };

  const calculateTotal = () => {
    const subtotalPizzas = cartItems.reduce(
      (prev, curr) => curr?.price + prev,
      0
    );

    const subtotalIngredients = cartItems.map((item) =>
      item.customIngredients?.reduce(
        (prev, curr) => curr.price + prev,
        0
      )
    );

    const totalSubtotalIngredients = subtotalIngredients.reduce(
      (prev: number, curr) => (curr ? curr + prev : 0 + prev),
      0
    );
    setTotal(subtotalPizzas + totalSubtotalIngredients);
  };

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  return (
    <>
      <Home />
      <Modal>
        <section className="cart-items">
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <CartItem key={item.removalId} {...item} />
              ))}
            </ul>
          ) : (
            <h3 style={{ textAlign: 'center' }}>
              Váš košík je prázdny.
            </h3>
          )}
          <footer>
            {cartItems.length > 0 ? (
              <h5 className="price-total">
                Celkom: {total.toFixed(2).replace('.', ',')} €
              </h5>
            ) : null}
            <Link to="/" onClickCapture={() => setModalOpen(false)}>
              <button className="shopping-button continue">
                Pokračovať v nákupe
              </button>
            </Link>
            {cartItems.length > 0 ? (
              <Link to="/" onClickCapture={() => setModalOpen(false)}>
                <button
                  className="shopping-button finish"
                  onClick={() => sendOrder()}
                >
                  Objednať
                </button>
              </Link>
            ) : null}
          </footer>
        </section>
      </Modal>
    </>
  );
};
export default ShoppingCartPage;
