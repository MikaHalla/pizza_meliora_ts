import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { IngredientType } from '../types/types';

const Ingredient = ({ _id, name, removed }: IngredientType) => {
  // const { toggleIngredient } = useContext(AppContext);

  return (
    <li
      className={`ingredient ${removed && 'removed'}`}
      // onClick={() => toggleIngredient(_id, name)}
    >
      {/* <input
        type="checkbox"
        name={name}
        id={name}
        defaultChecked={!removed}
      ></input> */}
      <label htmlFor={name}>{name}</label>
    </li>
  );
};
export default Ingredient;
