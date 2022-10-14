import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Search = () => {
  const {
    searchText,
    setSearchText,
    //  handleSearch
  } = useContext(AppContext);

  return (
    <section id="search">
      <p className="search-tips">
        <strong>TIP:</strong> Pri vyhľadávaní môžete použiť názov
        pizze, ale aj kategóriu <em>(napr. "pikantná")</em>, alebo
        ingrediencu <em>(napr. "huby").</em>
        <br />
        Kliknutím na názov pridáte pizzu medzi obľúbené.
      </p>
      <input
        type="text"
        placeholder="Nájsť pizzu..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
    </section>
  );
};

export default Search;
