import { useState } from 'react';
import { IngredientType } from '../types/types';

const Ingredient = ({ name }: IngredientType) => {
  const [removed, setRemoved] = useState(false);
  return (
    <div
      className={`ingredient ${removed && 'removed'}`}
      onClick={() => setRemoved((prev) => !prev)}
    >
      <p>{name}</p>
    </div>
  );
};
export default Ingredient;
