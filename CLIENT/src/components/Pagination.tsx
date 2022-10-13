import { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';

const Pagination = () => {
  const { pages, currentPage, setCurrentPage } =
    useContext(AppContext);

  // const [pages, setPages] = useState(1);
  // const [currentPage, setCurrentPage] = useState(1);

  // const indexOfLastPizza = currentPage * PIZZAS_PER_PAGE;
  // const indexOfFirstPizza = indexOfLastPizza - PIZZAS_PER_PAGE;

  // useEffect(() => {
  //   setPages(Math.ceil(pizzas.length / PIZZAS_PER_PAGE));
  // }, [pizzas]);

  // const displayOnlyThesePizzas = pizzas.slice(
  //   indexOfFirstPizza,
  //   indexOfLastPizza
  // );

  return (
    <section className="pagination">
      <button
        disabled={currentPage <= 1}
        // onClick={() => dispatch({ type: PREVIOUS_PAGE })}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Predchádzajúca
      </button>
      <h4>
        {currentPage} / {pages}
      </h4>
      <button
        disabled={currentPage >= pages}
        onClick={() => setCurrentPage(currentPage + 1)}
        // onClick={() => dispatch({ type: NEXT_PAGE })}
      >
        Nasledujúca
      </button>
    </section>
  );
};

export default Pagination;
