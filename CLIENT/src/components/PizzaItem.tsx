type PizzaItemProps = {
  _id: string;
  id: number;
  number: number;
  name: string;
  category: string;
  price: number;
  weight: number;
  tags: string[];
  ingredients: any[];
};

const PizzaItem = ({ name }: PizzaItemProps) => {
  return <div>{name}</div>;
};
export default PizzaItem;
