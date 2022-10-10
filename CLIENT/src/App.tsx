import Footer from './components/Footer';
import Hero from './components/Hero';
import History from './components/History';
import MobileMenu from './components/MobileMenu';
import Navbar from './components/Navbar';
import PizzaList from './components/PizzaList';
import Search from './components/Search';

const App = () => {
  return (
    <main>
      <MobileMenu />
      <Navbar />
      <Hero />
      <Search />
      <PizzaList />
      <History />
      <Footer />
    </main>
  );
};
export default App;
