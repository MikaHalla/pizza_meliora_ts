const Navbar = () => {
  return (
    <nav>
      <div className="wrap">
        <div className="nav-left">
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
          <i className="fas fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
