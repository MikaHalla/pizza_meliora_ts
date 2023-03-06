import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Cart from './Cart';

const Navbar = () => {
  const {
    tgMobileMenu,
    cartItems,
    currentUser,
    fetchUser,
    logoutUser,
  } = useContext(AppContext);

  useEffect(() => fetchUser(), []);

  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  return (
    <nav>
      <div className="wrap">
        <div className="nav-left" onClick={() => handleClick()}>
          <div className="credentials">
            <p>
              <i className="fa-solid fa-phone"></i>012 / 345 67 89
            </p>
            <p>
              <i className="fa-solid fa-map-location-dot"></i>
              Bottova 28, Žilina
            </p>
            <p>
              <i className="fa-solid fa-clock"></i>10:00 - 23:00
            </p>
          </div>
        </div>
        <div className="nav-right">
          <div className="user">
            {currentUser ? (
              <>
                <Link to="/profile">{currentUser.name}</Link>
                <Link to="/" onClickCapture={() => logoutUser()}>
                  (odhlásiť sa)
                </Link>
              </>
            ) : (
              <Link to="/login">Prihlásiť sa</Link>
            )}
          </div>
          {cartItems.length > 0 ? <Cart /> : null}

          <i
            className="fas fa-solid fa-bars"
            onClick={() => tgMobileMenu()}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
