import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Ingredient from '../components/Ingredient';
import Home from './Home';
import Modal from '../components/Modal';

const CustomizePizza = () => {
  const { _id } = useParams();
  const { pizzas, customIngredients, cartItems, setCartItems } =
    useContext(AppContext);

  const pizza = pizzas.find((pizza) => pizza._id === _id);

  const addToCart = () => setCartItems([...cartItems, { ...pizza }]);

  return (
    <>
      <Home />
      <Modal>
        <section className="customize-pizza">
          <header>
            <h2 className="number">{pizza?.id}.</h2>
            <h2>{pizza?.name}</h2>
            <Link to="/">
              <i className="fa-solid fa-xmark"></i>
            </Link>
          </header>

          <div className="ingredient-container">
            <ul className="ingredients standard">
              {pizza?.ingredients.map((element) => (
                <Ingredient
                  name={element.name}
                  price={element.price}
                  removed={element.removed}
                />
              ))}
            </ul>
            <ul className="ingredients custom">
              {customIngredients.map((element) => (
                <Ingredient
                  name={element.name}
                  price={element.price}
                  removed={true}
                />
              ))}
            </ul>
          </div>

          <div className="add-to-cart">
            <Link
              className="add-to-cart-button"
              to="/shopping-cart"
              onClick={() => addToCart()}
            >
              Pridať do košíka
            </Link>
          </div>
        </section>
      </Modal>
    </>
  );
};
export default CustomizePizza;
