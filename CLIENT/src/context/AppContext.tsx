import { createContext, ReactNode, useEffect, useState } from 'react';

type AppContext = {
  pizzas: any[];
};

type AppProviderProps = {
  children: ReactNode;
};

const AppContext = createContext({} as AppContext);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [pizzas, setPizzas] = useState([]);

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

  return (
    <AppContext.Provider value={{ pizzas }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
