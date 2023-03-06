import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Links = () => {
  const { currentUser, logoutUser } = useContext(AppContext);
  return (
    <div className="links">
      {currentUser ? (
        <>
          <Link to="/profile">{currentUser?.name}</Link>
          <Link to="/" onClickCapture={() => logoutUser()}>
            Odhlásiť
          </Link>
        </>
      ) : (
        <Link to="/login">Prihlásiť</Link>
      )}
    </div>
  );
};
export default Links;
