import { useContext } from 'react';
import AppContext from '../context/AppContext';
import PizzaItem from './PizzaCard';

const PizzaList = () => {
  const { pizzas } = useContext(AppContext);
  return (
    <ul className="pizza-list-container">
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza._id} {...pizza} />
      ))}
    </ul>
  );
};
export default PizzaList;
