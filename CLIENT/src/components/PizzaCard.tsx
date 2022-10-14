import { useState } from 'react';
import { PizzaType } from '../types/types';
import BasketButton from './BasketButton';
import Ingredient from './Ingredient';

const PizzaCard = ({
  _id,
  number,
  ordered,
  name,
  weight,
  price,
  ingredients,
}: PizzaType) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <li className="pizza-card __ordered">
      <header className="__headline">
        <h5 className={'__number __ordered'}>{number}.</h5>
        <i
          className={`fa-star ${
            favorite ? 'fa-solid' : 'fa-regular'
          }`}
          onClick={() => setFavorite((prev) => !prev)}
        ></i>
        <h5
          className="__name"
          onClick={() => console.log(ingredients)}
        >
          {name}
        </h5>
        <p className="__weight">{weight} g</p>
        <h3 className="__price">
          {price.toFixed(2).replace('.', ',')} €
        </h3>
      </header>

      <BasketButton _id={_id} ordered={ordered} />

      <div className="ingredients">
        {ingredients.map((element) => (
          <Ingredient
            _id={_id}
            name={element.name}
            removed={element.removed}
          />
        ))}
      </div>
    </li>
  );
};
export default PizzaCard;
