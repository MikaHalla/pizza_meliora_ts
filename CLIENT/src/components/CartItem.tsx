import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { CartItemType } from '../types/types';

const CartItem = ({
  price,
  name,
  id,
  added,
  removed,
}: CartItemType) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const removeItem = (id: number) => {
    const newItems = [...cartItems];

    const filteredItems = newItems.filter((i) => i.id !== id);

    setCartItems([...filteredItems]);
  };

  return (
    <li className="cart-item">
      <p>{id}.</p>
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
        onClick={() => removeItem(id)}
      ></i>
    </li>
  );
};
export default CartItem;
