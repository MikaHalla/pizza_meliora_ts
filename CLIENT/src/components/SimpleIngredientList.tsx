import { IngredientType } from '../types/types';

type SimpleIngredientListProps = {
  ingredients: IngredientType[];
};

const SimpleIngredientList = ({
  ingredients,
}: SimpleIngredientListProps) => {
  return (
    <ul className="simple-ingredient-list">
      {ingredients.map((ingredient) => (
        <li className="simple-ingredient" key={ingredient._id}>
          {ingredient.name}
        </li>
      ))}
    </ul>
  );
};
export default SimpleIngredientList;
