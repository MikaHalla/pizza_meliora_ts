import { createContext, useEffect, useState } from 'react';
import { PIZZAS_PER_PAGE } from '../assets/constants/constants';
import {
  AppContextProps,
  AppProviderProps,
  PizzaType,
  CartItemType,
} from '../types/types';

const AppContext = createContext({} as AppContextProps);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [pizzas, setPizzas] = useState<PizzaType[]>([]);
  const [searchText, setSearchText] = useState('');
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const tgMobileMenu = () => setMobileMenu((prev) => !prev);

  const fetchPizzas = async () => {
    const res = await fetch('/api/pizza', {
      method: 'GET',
    });
    const data: PizzaType[] = await res.json();
    data.sort((a, b) => (a.id > b.id ? 1 : -1));

    setPizzas(data);
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  useEffect(() => setCurrentPage(1), [searchText]);

  const filteredPizzas = pizzas.filter(
    (pizza) =>
      pizza.name.toLowerCase().includes(searchText.toLowerCase()) ||
      pizza.category
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      (pizza.isFavorite &&
        searchText.toLowerCase().includes('fav')) ||
      pizza.ingredients.some((ingredient) =>
        ingredient.name
          .toLowerCase()
          .includes(searchText.toLowerCase())
      ) ||
      (pizza.tags &&
        pizza.tags.some((tag) =>
          tag.toLowerCase().includes(searchText.toLowerCase())
        ))
  );

  const indexOfLastPizza = currentPage * PIZZAS_PER_PAGE;
  const indexOfFirstPizza = indexOfLastPizza - PIZZAS_PER_PAGE;

  useEffect(() => {
    setPages(Math.ceil(filteredPizzas.length / PIZZAS_PER_PAGE));
  }, [filteredPizzas]);

  const displayedPizzas = filteredPizzas.slice(
    indexOfFirstPizza,
    indexOfLastPizza
  );

  return (
    <AppContext.Provider
      value={{
        mobileMenu,
        tgMobileMenu,
        modalOpen,
        setModalOpen,
        pizzas,
        setPizzas,
        displayedPizzas,
        searchText,
        setSearchText,
        pages,
        currentPage,
        setCurrentPage,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
