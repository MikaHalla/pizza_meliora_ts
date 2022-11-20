import { PizzaType } from '../types/types';
import BasketButton from './BasketButton';
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
  return (
    <li
      className={`pizza-card ${active && '__focused'}`}
      tabIndex={number}
    >
      <div className="--number">
        <h5>{id}.</h5>
      </div>

      <div className="--body">
        <header>
          <h5>{name}</h5>
          <p>{weight} g</p>
        </header>

        <div className="ingredient-container">
          <SimpleIngredientList ingredients={ingredients} />
        </div>
      </div>

      <div className="--price">
        <h5>{price.toFixed(2).replace('.', ',')} €</h5>

        <BasketButton _id={_id} />
      </div>
    </li>
  );
};
export default PizzaCard;
