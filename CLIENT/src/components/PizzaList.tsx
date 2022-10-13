import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Pagination from './Pagination';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  const { pages, displayOnlyThesePizzas } = useContext(AppContext);

  return (
    <section className="pizza-list-container">
      <ul>
        {displayOnlyThesePizzas.map((pizza) => (
          <PizzaCard key={pizza._id} {...pizza} />
        ))}
      </ul>
      {pages > 1 && <Pagination />}
    </section>
  );
};
export default PizzaList;
