import { useContext } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import History from '../components/History';
import MobileMenu from '../components/MobileMenu';
import Navbar from '../components/Navbar';
import PizzaList from '../components/PizzaList';
import Search from '../components/Search';
import Spinner from '../components/Spinner';
import AppContext from '../context/AppContext';

const Home = () => {
  const { isLoading } = useContext(AppContext);

  return (
    <main>
      <MobileMenu />
      <section className="hero">
        <Navbar />
        <Hero />
      </section>
      <Search />
      <section className="content-box">
        {isLoading ? <Spinner /> : <PizzaList />}
        <History />
      </section>
      <Footer />
    </main>
  );
};
export default Home;
