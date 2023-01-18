import '../assets/styles/app.css';
import Header from '../components/header';
import HeroSection from './home/hero';
import FeaturedProducts from './home/featuredProducts';

function App() {
  return (
    <>
    <Header />
    <HeroSection />
    <FeaturedProducts />
    </>
  );
}

export default App;
