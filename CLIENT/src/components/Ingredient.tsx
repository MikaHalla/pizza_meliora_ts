import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { IngredientType } from '../types/types';

const Ingredient = ({ _id, name, removed }: IngredientType) => {
  const { filteredPizzas, toggleIngredient } = useContext(AppContext);
  return (
    <div
      className={`ingredient ${removed && 'removed'}`}
      onClick={() => toggleIngredient(_id, name)}
    >
      <p>{name}</p>
    </div>
  );
};
export default Ingredient;
