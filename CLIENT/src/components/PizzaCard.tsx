import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { PizzaType } from '../types/types';
import BasketButton from './BasketButton';
import ComplexIngredientList from './ComplexIngredientList';
import Ingredient from './Ingredient';
import SimpleIngredientList from './SimpleIngredientList';

const PizzaCard = ({
  _id,
  id,
  number,
  name,
  weight,
  ordered,
  price,
  ingredients,
  active,
}: PizzaType) => {
  const { pizzas, setPizzas } = useContext(AppContext);

  const [favorite, setFavorite] = useState(false);

  const handleFocus = (_id: string) => {
    const newPizzas = pizzas;
    newPizzas.map((pizza) => (pizza.active = false));
    const activePizza = newPizzas.find((pizza) => pizza._id === _id);
    if (activePizza) activePizza.active = true;
    setPizzas([...newPizzas]);
  };

  return (
    <li
      className={`pizza-card ${active && '__focused'}`}
      tabIndex={number}
      onFocus={() => handleFocus(_id)}
    >
      <div className="--number">
        <h5>{id}.</h5>
        <i
          className={`fa-star ${
            favorite ? 'fa-solid' : 'fa-regular'
          }`}
          onClick={() => setFavorite((prev) => !prev)}
        ></i>
      </div>

      <div className="--body">
        <header>
          <h5>{name}</h5>
          <p>{weight} g</p>
        </header>

        <div className="ingredient-container">
          {active ? (
            <ComplexIngredientList
              ingredients={ingredients}
              _id={_id}
            />
          ) : (
            <SimpleIngredientList ingredients={ingredients} />
          )}
        </div>
      </div>

      <div className="--price">
        <h5>{price.toFixed(2).replace('.', ',')} €</h5>

        <BasketButton
          _id={_id}
          name={name}
          ordered={ordered}
          ingredients={ingredients}
        />
      </div>
    </li>
  );
};
export default PizzaCard;
