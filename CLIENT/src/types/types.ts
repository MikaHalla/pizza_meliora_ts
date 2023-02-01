import { ReactNode } from 'react';

export type AppContextProps = {
  mobileMenu: boolean;
  tgMobileMenu: () => void;
  pizzas: PizzaType[];
  setPizzas: (pizzas: PizzaType[]) => void;
  displayedPizzas: PizzaType[];
  customIngredients: CustomIngredientType[];
  searchText: string;
  setSearchText: (searchText: string) => void;
  pages: number;
  currentPage: number;
  cartItems: CartItemType[];
  setCartItems: (cartItems: CartItemType[]) => void;
  setCurrentPage: (currentPage: number) => void;
};

export type AppProviderProps = {
  children: ReactNode;
};

export type IngredientType = {
  name: string;
  price?: number;
  removed: boolean;
  selected?: boolean;
};

export type PizzaType = {
  _id: string;
  id: number;
  number: number;
  ordered: number;
  name: string;
  category: string;
  price: number;
  weight: number;
  isFavorite: boolean;
  active: boolean;
  tags: string[];
  ingredients: IngredientType[];
};

export type CartItemType = {
  number?: number;
  name?: string;
  price?: number;
};

export type CustomIngredientType = {
  name: string;
  price: number;
};
