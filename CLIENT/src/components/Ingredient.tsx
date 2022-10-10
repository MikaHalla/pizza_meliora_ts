import { useState } from 'react';

type IngredientProps = {
  _id: string;
  name: string;
  removed: boolean;
};

const Ingredient = ({ name }: IngredientProps) => {
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
