import "../assets/styles/app.css";
import Header from "../components/header";
import HeroSection from "./home/hero";
import FeaturedProducts from "./home/featuredProducts";
import StorySection from "./home/story";
import StatSection from "./home/stats";
import TestimonialsPage from "./home/testimonials";
import LocationSection from "./home/location";
import Footer from "../components/footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <StorySection />
      <StatSection />
      <TestimonialsPage />
      <LocationSection />
      <Footer />
    </>
  );
}

export default App;
