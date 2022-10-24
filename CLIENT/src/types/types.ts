export type IngredientType = {
  _id: string;
  name: string;
  removed: boolean;
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
