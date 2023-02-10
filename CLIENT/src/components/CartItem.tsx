import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { CartItemType } from '../types/types';

const CartItem = ({
  price,
  name,
  number,
  removalId,
  added,
  removed,
}: CartItemType) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const removeItem = (removalId: number) => {
    const items = cartItems.filter((i) => i.removalId !== removalId);
    setCartItems([...items]);
  };

  return (
    <li className="cart-item">
      <p>{number}.</p>
      <div>
        {name}
        <ul className="added-ingredients name">
          {added
            ? added.map((i) => <p key={i.name}>+ {i.name}</p>)
            : null}
        </ul>
        <ul className="removed-ingredients name">
          {removed
            ? removed.map((i) => <p key={i.name}>- {i.name}</p>)
            : null}
        </ul>
      </div>
      <div>
        {price?.toFixed(2).replace('.', ',')} €
        <ul className="added-ingredients price">
          {added
            ? added.map((i) => (
                <p key={i.price}>
                  {i.price.toFixed(2).replace('.', ',')} €
                </p>
              ))
            : null}
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
