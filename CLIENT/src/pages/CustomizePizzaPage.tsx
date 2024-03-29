import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Ingredient from '../components/Ingredient';
import Home from './Home';
import Modal from '../components/Modal';
import { PizzaType, IngredientType } from '../types/types';
import Spinner from '../components/Spinner';

const CustomizePizza = () => {
  const { _id } = useParams();
  const { pizzas, cartItems, setCartItems, setModalOpen } =
    useContext(AppContext);

  const [isLoading, setIsLoading] = useState(true);
  const [activePizza, setActivePizza] = useState<PizzaType>({
    _id: '',
    id: 0,
    number: 0,
    ordered: 0,
    name: '',
    category: '',
    price: 0,
    weight: 0,
    isFavorite: false,
    tags: [],
    ingredients: [],
    customIngredients: [],
  });

  const [customIngredients, setCustomIngredients] = useState<
    IngredientType[]
  >([]);

  const fetchCustomIngredients = async () => {
    const res = await fetch(
      'https://pizza-meliora.cyclic.app/api/ingredients',
      {
        method: 'GET',
      }
    );
    const data = await res.json();
    setCustomIngredients(data);
    setIsLoading(false);
  };

  useEffect(() => {
    const pizza = pizzas.find((pizza) => pizza._id === _id);
    if (pizza) {
      pizza.ingredients.map((i) => (i.checked = true));

      setActivePizza({ ...pizza });
      fetchCustomIngredients();
    }
  }, []);

  const handleIngredientClick = (name: string) => {
    const ingredient = activePizza.ingredients.find(
      (i) => i.name === name
    );
    if (ingredient) {
      ingredient.checked = !ingredient.checked;
      setActivePizza({ ...activePizza });
    }
  };

  const handleCustomIngredientClick = (name: string) => {
    const ingredient = customIngredients.find((i) => i.name === name);
    if (ingredient) {
      ingredient.checked = !ingredient.checked;
      setCustomIngredients([...customIngredients]);
    }
  };

  const addToCart = () => {
    const addedIngredients = customIngredients.filter(
      (i) => i.checked === true
    );
    const removedIngredients = activePizza.ingredients.filter(
      (i) => i.checked === false
    );
    const removalId = Math.random();
    const pizza = {
      ...activePizza,
      customIngredients: [...addedIngredients],
      removedIngredients: [...removedIngredients],
      removalId: removalId,
    };
    setCartItems([...cartItems, { ...pizza }]);
  };

  return (
    <>
      <Home />
      <Modal>
        <section className="customize-pizza">
          <header>
            <h2 className="number">{activePizza?.id}.</h2>
            <h2>{activePizza?.name}</h2>
            <Link to="/" onClickCapture={() => setModalOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </Link>
          </header>

          <div className="ingredient-container">
            <ul className="ingredients standard ">
              {activePizza?.ingredients.map((element, index) => (
                <Ingredient
                  key={index + element.name}
                  name={element.name}
                  price={element.price}
                  removed={element.removed}
                  checked={element.checked}
                  onClick={() => handleIngredientClick(element.name)}
                />
              ))}
            </ul>
          </div>
          <div className="ingredient-container">
            {isLoading ? (
              <Spinner />
            ) : (
              <ul className="ingredients custom">
                {customIngredients.map((element, index) => (
                  <Ingredient
                    key={index + element.name}
                    name={element.name}
                    price={element.price}
                    removed={true}
                    checked={element.checked}
                    onClick={() =>
                      handleCustomIngredientClick(element.name)
                    }
                  />
                ))}
              </ul>
            )}
          </div>

          <footer>
            <Link
              to="/shopping-cart"
              className="add-to-cart-button"
              onClick={() => addToCart()}
            >
              Pridať do košíka
            </Link>
          </footer>
        </section>
      </Modal>
    </>
  );
};
export default CustomizePizza;
