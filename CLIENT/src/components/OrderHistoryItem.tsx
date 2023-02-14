import { useNavigate } from 'react-router-dom';

interface OrderHistoryItemProps {
  niceDate: string;
  _id: string;
  items: [
    {
      id: string;
      name: string;
      price: number;
      customIngredients: [
        { _id: string; name: string; price: number }
      ];
      removedIngredients: [
        { _id: string; name: string; price: number }
      ];
    }
  ];
}

const OrderHistoryItem = ({
  niceDate,
  ...props
}: OrderHistoryItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const confirm = window.confirm('Zopakovať objednávku?');
    navigate('/shopping-cart');

    confirm ? console.log(props._id, props.items) : null;
  };

  return (
    <div className="order-history-card" onClick={() => handleClick()}>
      <h5>{niceDate}</h5>
      {props.items.map((item) => (
        <div className="item">
          <header>
            <h4>{item.name}</h4>
            <p>{item.price.toFixed(2).replace('.', ',')} €</p>
          </header>
          <div className="ingredients custom">
            {item.customIngredients.map((ingredient) => (
              <p>{ingredient.name}</p>
            ))}
          </div>
          <div className="ingredients removed">
            {item.removedIngredients.map((ingredient) => (
              <p>{ingredient.name}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default OrderHistoryItem;
