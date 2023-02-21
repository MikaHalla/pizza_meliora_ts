import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Pagination = () => {
  const { pages, currentPage, setCurrentPage } =
    useContext(AppContext);

  return (
    <section className="pagination">
      <button
        disabled={currentPage <= 1}
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
      >
        Nasledujúca
      </button>
    </section>
  );
};

export default Pagination;
