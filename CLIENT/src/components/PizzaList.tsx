import { useContext } from 'react';
import AppContext from '../context/AppContext';
import PizzaItem from './PizzaItem';

const PizzaList = () => {
  const { pizzas } = useContext(AppContext);
  return (
    <section className="pizza-list">
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza._id} {...pizza} />
      ))}
    </section>
  );
};
export default PizzaList;
