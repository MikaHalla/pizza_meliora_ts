import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Hero = () => {
  const { setMobileMenu } = useContext(AppContext);
  return (
    <div className="hero-image" onClick={() => setMobileMenu(false)}>
      <div className="headline">
        <h1>Pizzéria MELIORA</h1>
        <h3>Pizza pečená na bukovom dreve</h3>
      </div>
      <a href="#search">
        <button>vybrať pizzu</button>
      </a>
    </div>
  );
};

export default Hero;
