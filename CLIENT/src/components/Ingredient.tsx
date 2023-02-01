import { useEffect, useState } from 'react';
import { IngredientType } from '../types/types';

const Ingredient = ({ name, price, removed }: IngredientType) => {
  const [checked, setChecked] = useState<boolean>();

  useEffect(() => setChecked(!removed), []);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <li
      className={`ingredient ${!checked && 'removed'}`}
      onClick={() => handleClick()}
    >
      <input type="checkbox" checked={checked} />
      <p>{name}</p>
      <p>{price ? `+ ${price.toFixed(2)} €` : null}</p>
    </li>
  );
};
export default Ingredient;
