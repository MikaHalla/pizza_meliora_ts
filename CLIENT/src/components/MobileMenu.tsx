import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Links from './Links';

const MobileMenu = () => {
  const { mobileMenu, tgMobileMenu } = useContext(AppContext);

  return (
    <section
      className={`mobile-menu ${mobileMenu && 'visible'}`}
      onBlur={() => tgMobileMenu()}
    >
      <i
        className="fa-solid fa-circle-xmark"
        onClick={() => tgMobileMenu()}
      ></i>
      <Links />
    </section>
  );
};
export default MobileMenu;
