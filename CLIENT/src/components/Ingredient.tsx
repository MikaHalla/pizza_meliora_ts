import { IngredientType } from '../types/types';

const Ingredient = ({
  name,
  price,
  checked,
  onClick,
}: IngredientType) => {
  return (
    <li
      className={`ingredient ${!checked && 'removed'}`}
      onClick={onClick}
    >
      {checked ? (
        <i className="fa-regular fa-square-check"></i>
      ) : (
        <i className="fa-regular fa-square"></i>
      )}

      <p>{name}</p>
      <p>{price ? `+ ${price.toFixed(2)} €` : null}</p>
    </li>
  );
};
export default Ingredient;
