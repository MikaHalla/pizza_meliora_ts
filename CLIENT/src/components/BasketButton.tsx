import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { IngredientType } from '../types/types';

type BasketButtonProps = {
  _id: string;
  ordered: number;
  name: string;
  ingredients: IngredientType[];
};

// const addToCart = (
//   e: React.MouseEvent,
//   _id: string,
//   name: string,
//   ordered: number,
//   ingredients: IngredientType[]
// ) => {
//   e.preventDefault();
//   const ASDF = new Array(ingredients);
//   // const order = { _id, name, ordered, ingredients: [...ingredients] };
//   console.log(ASDF);
// };

const BasketButton = ({
  _id,
  name,
  ordered,
  ingredients,
}: BasketButtonProps) => {
  // const { addToCart } = useContext(AppContext);
  return (
    <button
      className="basket-click"
      onClick={() => console.log(_id, name)}
      // onClick={(e) => addToCart(e, _id)}
      // onClick={() => addToCart()}
      // another possible solution for blur event disabling this click
      // onMouseDown={() => addToCart(_id)}
    >
      {/* {ordered > 0 ? (
        `${ordered}x`
      ) : ( */}
      <i className="fas fa-basket-shopping"></i>

      {/* )} */}
    </button>
  );
};

export default BasketButton;
