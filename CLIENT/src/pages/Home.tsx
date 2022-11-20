import Footer from '../components/Footer';
import Hero from '../components/Hero';
import History from '../components/History';
import MobileMenu from '../components/MobileMenu';
import Navbar from '../components/Navbar';
import PizzaList from '../components/PizzaList';
import Search from '../components/Search';

const Home = () => {
  return (
    <main>
      <MobileMenu />
      <section className="hero">
        <Navbar />
        <Hero />
      </section>
      <Search />
      <PizzaList />
      <History />
      <Footer />
    </main>
  );
};
export default Home;
