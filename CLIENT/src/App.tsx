import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import CustomizePizza from './pages/CustomizePizza';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:_id" element={<CustomizePizza />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path="/login" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};
export default App;
