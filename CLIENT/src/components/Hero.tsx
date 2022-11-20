import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="hero-image">
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
