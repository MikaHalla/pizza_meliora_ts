import { createContext, useEffect, useState } from 'react';
import { PIZZAS_PER_PAGE } from '../assets/constants/constants';
import {
  AppContextProps,
  AppProviderProps,
  PizzaType,
  CartItemType,
  CurrentUserType,
} from '../types/types';

const AppContext = createContext({} as AppContextProps);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pizzas, setPizzas] = useState<PizzaType[]>([]);
  const [searchText, setSearchText] = useState('');
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const tgMobileMenu = () => setMobileMenu((prev) => !prev);

  const fetchPizzas = async () => {
    const res = await fetch(
      'https://pizza-meliora.cyclic.app/api/pizza',
      {
        method: 'GET',
      }
    );
    const data: PizzaType[] = await res.json();
    data.sort((a, b) => (a.id > b.id ? 1 : -1));
    data.forEach((pizza) => (pizza.price = pizza.price + 4));

    setPizzas(data);
    setIsLoading(false);
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

  const [currentUser, setCurrentUser] =
    useState<CurrentUserType>(null);

  const fetchUser = () => {
    const user = localStorage.getItem('currentUser');
    const parsedUser = user ? JSON.parse(user) : null;
    setCurrentUser(parsedUser);
  };

  const logoutUser = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        mobileMenu,
        setMobileMenu,
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
        currentUser,
        fetchUser,
        logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
