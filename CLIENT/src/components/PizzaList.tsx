import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Pagination from './Pagination';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  const { displayedPizzas } = useContext(AppContext);

  return (
    <section className="pizza-list-container">
      <ul>
        {displayedPizzas.map((pizza) => (
          <PizzaCard key={pizza._id} {...pizza} />
        ))}
      </ul>
      <Pagination />
    </section>
  );
};
export default PizzaList;
