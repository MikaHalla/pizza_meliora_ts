import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { IngredientType } from '../types/types';
import Ingredient from './Ingredient';

type ComplexIngredientsListProps = {
  ingredients: IngredientType[];
  _id: string;
};

const ComplexIngredientList = ({
  ingredients,
  _id,
}: ComplexIngredientsListProps) => {
  const { ingredientList } = useContext(AppContext);

  return (
    // <div className={`ingredients ${focused && '__focused'}`}>
    <>
      <ul className="ingredients">
        {ingredients.map((element) => (
          <Ingredient
            _id={_id}
            name={element.name}
            removed={element.removed}
          />
        ))}
      </ul>
      <ul className="ingredients">
        {ingredientList.map((element) => (
          <Ingredient _id={_id} name={element} removed={true} />
        ))}
      </ul>
    </>
  );
};
export default ComplexIngredientList;
