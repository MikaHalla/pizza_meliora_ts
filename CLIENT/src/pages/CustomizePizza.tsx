import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Ingredient from '../components/Ingredient';

const CustomizePizza = () => {
  const { _id } = useParams();
  const { pizzas, customIngredients, cartItems, setCartItems } =
    useContext(AppContext);

  const pizza = pizzas.find((pizza) => pizza._id === _id);

  const addToCart = () => setCartItems([...cartItems, { ...pizza }]);

  return (
    <div className="customize-pizza">
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
              removed={element.removed}
              selected={true}
            />
          ))}
        </ul>
        <ul className="ingredients custom">
          {customIngredients.map((element) => (
            <Ingredient
              name={element.name}
              price={element.price}
              removed={true}
              selected={false}
            />
          ))}
        </ul>
      </div>
      <button className="add-to-cart" onClick={() => addToCart()}>
        <Link to="/shopping-cart">Pridať do košíka</Link>
      </button>
    </div>
  );
};
export default CustomizePizza;
