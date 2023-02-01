import { CartItemType } from '../types/types';

const CartItem = ({ price, name, number }: CartItemType) => {
  return (
    <li className="cart-item">
      <p>{number}.</p>
      <p>{name}</p>
      <p>{price.toFixed(2)} €</p>
      <p>X</p>
    </li>
  );
};
export default CartItem;
