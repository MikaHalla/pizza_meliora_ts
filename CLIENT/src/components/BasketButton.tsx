import { Link } from 'react-router-dom';

type BasketButtonProps = {
  _id: string;
};

const BasketButton = ({ _id }: BasketButtonProps) => {
  return (
    <Link to={`/${_id}`}>
      <button className="basket-click">
        <i className="fas fa-basket-shopping"></i>
      </button>
    </Link>
  );
};

export default BasketButton;
