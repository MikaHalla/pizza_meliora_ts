import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import CustomizePizzaPage from './pages/CustomizePizzaPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:_id" element={<CustomizePizzaPage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};
export default App;
