import Ingredient from './Ingredient';

type IngredientProps = {
  ingredients: [
    {
      _id: string;
      name: string;
      removed: boolean;
    }
  ];
};

const Ingredients = ({ ingredients }: IngredientProps) => {
  return (
    <div className="ingredients">
      {ingredients.map((element) => (
        <Ingredient {...element} />
      ))}
    </div>
  );
};

export default Ingredients;
