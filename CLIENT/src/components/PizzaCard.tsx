import { Link } from 'react-router-dom';
import { PizzaType } from '../types/types';
import BasketButton from './BasketButton';
import SimpleIngredientList from './SimpleIngredientList';

const PizzaCard = ({
  _id,
  id,
  number,
  name,
  weight,
  price,
  ingredients,
}: PizzaType) => {
  return (
    <Link to={`/${_id}`} className="pizza-card" tabIndex={number}>
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
    </Link>
  );
};
export default PizzaCard;
