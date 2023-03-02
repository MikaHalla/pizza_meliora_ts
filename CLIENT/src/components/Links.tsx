import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className="links">
      <Link to="/">Domov</Link>
      <Link to="/shopping-cart">Košík</Link>
      <Link to="/login">Prihlásiť</Link>
      <Link to="/register">Registrovať</Link>
      <Link to="/profile">Profil</Link>
    </div>
  );
};
export default Links;
