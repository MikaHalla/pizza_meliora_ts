import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { CartItemType } from '../types/types';

const CartItem = ({
  id,
  price,
  name,
  removalId,
  customIngredients,
  removedIngredients,
}: CartItemType) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const removeItem = (removalId: number) => {
    const items = cartItems.filter((i) => i.removalId !== removalId);
    setCartItems([...items]);
  };

  return (
    <li className="cart-item">
      <p>{id}.</p>
      <div>
        {name}
        <ul className="added-ingredients name">
          {customIngredients
            ? customIngredients.map((i) => (
                <p key={i.name}>+ {i.name}</p>
              ))
            : null}
        </ul>
        <ul className="removed-ingredients name">
          {removedIngredients?.map((i) => (
            <p key={i.name}>- {i.name}</p>
          ))}
        </ul>
      </div>
      <div>
        {price?.toFixed(2).replace('.', ',')} €
        <ul className="added-ingredients price">
          {customIngredients?.map((i) => (
            <p key={i.name}>
              {i.price.toFixed(2).replace('.', ',')} €
            </p>
          ))}
        </ul>
      </div>
      <i
        className="fa-solid fa-xmark"
        onClick={() => removeItem(removalId)}
      ></i>
    </li>
  );
};
export default CartItem;
