import { IngredientType } from '../types/types';

const Ingredient = ({ name, removed }: IngredientType) => {
  return (
    <li className={`ingredient ${removed && 'removed'}`}>
      <label htmlFor={name}>{name}</label>
    </li>
  );
};
export default Ingredient;
