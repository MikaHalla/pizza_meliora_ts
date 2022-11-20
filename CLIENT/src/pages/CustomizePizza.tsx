import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Ingredient from '../components/Ingredient';

const CustomizePizza = () => {
  const { _id } = useParams();
  const { pizzas, ingredientList, cartItems, setCartItems } =
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
        <ul className="ingredients">
          {pizza?.ingredients.map((element) => (
            <Ingredient
              name={element.name}
              removed={element.removed}
            />
          ))}
        </ul>
        <ul className="ingredients">
          {ingredientList.map((element) => (
            <Ingredient name={element} removed={true} />
          ))}
        </ul>
      </div>
      <Link to="/">
        <button className="add-to-cart" onClick={() => addToCart()}>
          Pridať do košíka
        </button>
      </Link>
    </div>
  );
};
export default CustomizePizza;
