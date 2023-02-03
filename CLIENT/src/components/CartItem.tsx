import { CartItemType } from '../types/types';

const CartItem = ({ price, name, id }: CartItemType) => {
  return (
    <li className="cart-item">
      <p>{id}.</p>
      <div>
        {name}
        <div className="added-ingredients">+ asdf</div>
        <div className="removed-ingredients">- asdf</div>
      </div>
      <div>
        {price?.toFixed(2).replace('.', ',')} €
        <div className="added-ingredients">+ asdf</div>
        <div className="removed-ingredients">- asdf</div>
      </div>
      <i className="fa-solid fa-xmark"></i>
    </li>
  );
};
export default CartItem;
