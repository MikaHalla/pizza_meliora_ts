import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';

type ingredientType = {
  _id: string;
  name: string;
  removed: boolean;
};

type pizzaType = {
  _id: string;
  id: number;
  number: number;
  name: string;
  category: string;
  isFavorite?: boolean;
  price: number;
  weight: number;
  tags: string[];
  ingredients: ingredientType[];
};

type AppContext = {
  pizzas: pizzaType[];
  searchText: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type AppProviderProps = {
  children: ReactNode;
};

const AppContext = createContext({} as AppContext);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [pizzas, setPizzas] = useState([]);
  const [searchText, setSearchText] = useState('');

  const fetchPizzas = async () => {
    const res = await fetch('http://localhost:5000/api/pizza', {
      method: 'GET',
    });
    const data = await res.json();

    setPizzas(data);
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <AppContext.Provider value={{ pizzas, searchText, handleSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
