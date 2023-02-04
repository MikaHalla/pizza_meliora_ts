import { ReactNode } from 'react';

export type AppContextProps = {
  mobileMenu: boolean;
  tgMobileMenu: () => void;
  modalOpen: boolean;
  setModalOpen: (p: boolean) => void;
  pizzas: PizzaType[];
  setPizzas: (pizzas: PizzaType[]) => void;
  displayedPizzas: PizzaType[];
  customIngredients: IngredientType[];
  setCustomIngredients: (customIngredients: IngredientType[]) => void;
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
  price: number;
  removed?: boolean;
  checked?: boolean;
  onClick?: () => void;
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
  tags: string[];
  ingredients: IngredientType[];
  customIngredients: IngredientType[];
};

export type CartItemType = {
  id?: number;
  number?: number;
  name?: string;
  price?: number;
  customIngredients?: CustomIngredientsType[];
  removedIngredients?: RemovedIngredientsType[];
};

export type CustomIngredientsType = {
  _id: string;
  name: string;
  price: number;
  checked: boolean;
};

export type RemovedIngredientsType = {
  _id: string;
  name: string;
  removed: boolean;
  checked: boolean;
};

export type CurrentUserType = {
  name: string;
  token: string;
} | null;
