import { useState } from 'react';

const MobileMenu = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const tgMobileMenu = () => setMobileMenu((prev) => !prev);

  return (
    <section
      className={`mobile-menu ${mobileMenu && 'visible'}`}
      onBlur={() => tgMobileMenu()}
    >
      <i
        className="fa-solid fa-circle-xmark"
        onClick={() => tgMobileMenu()}
      ></i>
    </section>
  );
};
export default MobileMenu;
