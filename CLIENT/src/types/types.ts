import { ReactNode } from 'react';

export type AppContextProps = {
  isLoading: boolean;
  mobileMenu: boolean;
  tgMobileMenu: () => void;
  setMobileMenu: (arg: boolean) => void;
  modalOpen: boolean;
  setModalOpen: (p: boolean) => void;
  pizzas: PizzaType[];
  setPizzas: (pizzas: PizzaType[]) => void;
  displayedPizzas: PizzaType[];
  searchText: string;
  setSearchText: (searchText: string) => void;
  pages: number;
  currentPage: number;
  cartItems: CartItemType[];
  setCartItems: (cartItems: CartItemType[]) => void;
  setCurrentPage: (currentPage: number) => void;
  currentUser: CurrentUserType;
  fetchUser: () => void;
  logoutUser: () => void;
};

export type AppProviderProps = {
  children: ReactNode;
};

export type ModalType = {
  children: ReactNode;
};

export type IngredientType = {
  _id?: string;
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
  customIngredients?: IngredientType[];
  removedIngredients?: IngredientType[];
};

export type CartItemType = {
  _id?: string;
  id: number;
  removalId: number;
  number?: number;
  ordered?: number;
  name?: string;
  category?: string;
  price: number;
  weight?: number;
  isFavorite?: boolean;
  tags?: string[];
  added?: IngredientType[];
  removed?: IngredientType[];
  ingredients?: IngredientType[];
  customIngredients?: IngredientType[];
  removedIngredients?: IngredientType[];
};

export type CurrentUserType = {
  name: string;
  token: string;
} | null;

export type FormInputType = {
  type?: string;
  name: string;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  required?: boolean;
  pattern?: string;
  autoFocus?: boolean;
};

export type FormValuesType = {
  [key: string]: string;
  username: string;
  password: string;
  confirmPassword: string;
};
