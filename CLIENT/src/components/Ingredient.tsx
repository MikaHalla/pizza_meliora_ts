import { useEffect, useState } from 'react';
import { IngredientType } from '../types/types';

const Ingredient = ({
  name,
  price,
  removed,
  selected,
}: IngredientType) => {
  const [checked, setChecked] = useState<boolean>();

  useEffect(() => setChecked(!removed), []);

  const handleClick = () => {
    setChecked((prev) => !prev);
    console.log(name, price);
  };

  return (
    <li
      className={`ingredient ${!checked && 'removed'}`}
      onClick={() => handleClick()}
    >
      <input type="checkbox" checked={checked} />
      <p>{name}</p>
      {/* <p>{price && checked ? `+ ${price.toFixed(2)} €` : null}</p> */}
      <p>{price ? `+ ${price.toFixed(2)} €` : null}</p>
    </li>
  );
};
export default Ingredient;
