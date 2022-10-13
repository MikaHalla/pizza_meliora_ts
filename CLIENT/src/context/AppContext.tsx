import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { PIZZAS_PER_PAGE } from '../assets/constants/constants';
import { PizzaType, IngredientType } from '../types/types';

type AppContext = {
  pizzas: PizzaType[];
  filteredPizzas: PizzaType[];
  displayOnlyThesePizzas: PizzaType[];

  searchText: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;

  pages: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
};

type AppProviderProps = {
  children: ReactNode;
};

const AppContext = createContext({} as AppContext);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [pizzas, setPizzas] = useState([]);
  const [filteredPizzas, setFilteredPizzas] = useState([]);
  // const [displayOnlyThesePizzas, setDisplayOnlyThesePizzas] =
  //   useState([]);
  const [searchText, setSearchText] = useState('');
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPizzas = async () => {
    const res = await fetch('http://localhost:5000/api/pizza', {
      method: 'GET',
    });
    const data = await res.json();
    setPizzas(data);
    setFilteredPizzas(data);
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  useEffect(() => {
    setFilteredPizzas(
      pizzas.filter(
        (pizza: PizzaType) =>
          pizza.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          pizza.category
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          (pizza.isFavorite &&
            searchText.toLowerCase().includes('fav')) ||
          pizza.ingredients.some((ingredient: IngredientType) =>
            ingredient.name
              .toLowerCase()
              .includes(searchText.toLowerCase())
          ) ||
          (pizza.tags &&
            pizza.tags.some((tag: string) =>
              tag.toLowerCase().includes(searchText.toLowerCase())
            ))
      )
      // .slice(indexOfFirstPizza, indexOfLastPizza)
    );
    setCurrentPage(1);
  }, [searchText]);

  const indexOfLastPizza = currentPage * PIZZAS_PER_PAGE;
  const indexOfFirstPizza = indexOfLastPizza - PIZZAS_PER_PAGE;

  const displayOnlyThesePizzas = filteredPizzas.slice(
    indexOfFirstPizza,
    indexOfLastPizza
  );

  useEffect(() => {
    setPages(Math.ceil(filteredPizzas.length / PIZZAS_PER_PAGE));
  }, [filteredPizzas]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        pizzas,
        filteredPizzas,
        displayOnlyThesePizzas,

        searchText,
        handleSearch,

        pages,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
