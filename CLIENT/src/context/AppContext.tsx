import {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { PIZZAS_PER_PAGE } from '../assets/constants/constants';
import { PizzaType, IngredientType } from '../types/types';

type AppContext = {
  pizzas: PizzaType[];
  setPizzas: (pizzas: PizzaType[]) => void;
  displayedPizzas: PizzaType[];
  ingredientList: string[];
  searchText: string;
  setSearchText: (searchText: string) => void;
  pages: number;
  currentPage: number;
  // toggleIngredient: (_id: string, name: string) => void;
  // addToCart: (e: React.MouseEvent, _id: string) => void;

  setCurrentPage: (currentPage: number) => void;
};

type AppProviderProps = {
  children: ReactNode;
};

const AppContext = createContext({} as AppContext);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [pizzas, setPizzas] = useState<PizzaType[]>([]);
  const [searchText, setSearchText] = useState('');
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPizzas = async () => {
    const res = await fetch('http://localhost:5000/api/pizza', {
      method: 'GET',
    });
    const data: PizzaType[] = await res.json();
    data.sort((a, b) => (a.id > b.id ? 1 : -1));
    data.map((element: PizzaType) => (element.active = false));

    setPizzas(data);
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  const fetchIngredients = () => {
    const ingredients: string[] = [];
    pizzas.forEach((pizza) =>
      pizza.ingredients.forEach((ingredient) => {
        if (!ingredients.includes(ingredient.name))
          ingredients.push(ingredient.name);
      })
    );
    ingredients.sort();
    return ingredients;
  };

  const ingredientList = useMemo(() => fetchIngredients(), [pizzas]);

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

  // const toggleIngredient = (_id: string, name: string) => {
  //   const newPizzas = filteredPizzas;
  //   const pizza = newPizzas.find((pizza) => pizza._id === _id);

  //   const ingredient = pizza?.ingredients.find(
  //     (ingredient) => ingredient.name === name
  //   );

  //   if (ingredient) ingredient.removed = !ingredient.removed;
  //   setFilteredPizzas([...newPizzas]);
  // };

  // const addToCart = (e: React.MouseEvent, _id: string) => {
  //   // e.stopPropagation();
  //   const pizza = filteredPizzas.find((pizza) => pizza._id === _id);
  //   console.log(pizza);
  // };

  return (
    <AppContext.Provider
      value={{
        pizzas,
        setPizzas,
        displayedPizzas,
        ingredientList,
        searchText,
        setSearchText,
        pages,
        currentPage,
        setCurrentPage,
        // addToCart,
        // toggleIngredient,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
