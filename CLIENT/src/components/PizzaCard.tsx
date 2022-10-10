import { useState } from 'react';
import Ingredients from './Ingredients';

type PizzaCardProps = {
  _id: string;
  id: number;
  number: number;
  name: string;
  category: string;
  price: number;
  weight: number;
  tags: string[];
  ingredients: [
    {
      _id: string;
      name: string;
      removed: boolean;
    }
  ];
};

const PizzaCard = ({
  number,
  name,
  weight,
  price,
  ingredients,
}: PizzaCardProps) => {
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
      <Ingredients ingredients={ingredients} />
    </li>
  );
};
export default PizzaCard;
