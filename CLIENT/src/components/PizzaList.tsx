import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import Pagination from './Pagination';
import PizzaCard from './PizzaCard';

type ingredientType = {
  _id: string;
  name: string;
  removed: boolean;
};

const PizzaList = () => {
  const { pizzas, searchText } = useContext(AppContext);
  const [filteredPizzaList, setFilteredPizzaList] = useState([
    ...pizzas,
  ]);

  useEffect(() => {
    setFilteredPizzaList(
      pizzas.filter(
        (pizza) =>
          pizza.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          pizza.category
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          (pizza.isFavorite &&
            searchText.toLowerCase().includes('fav')) ||
          pizza.ingredients.some((ingredient: ingredientType) =>
            ingredient.name
              .toLowerCase()
              .includes(searchText.toLowerCase())
          ) ||
          (pizza.tags &&
            pizza.tags.some((tag: string) =>
              tag.toLowerCase().includes(searchText.toLowerCase())
            ))
      )
    );
    // setCurrentPage(1);
  }, [searchText]);

  return (
    <section className="pizza-list-container">
      <ul>
        {filteredPizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} {...pizza} />
        ))}
      </ul>
      {filteredPizzaList.length > 9 && <Pagination />}
    </section>
  );
};
export default PizzaList;
