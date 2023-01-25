import "../assets/styles/app.css";
import Header from "../components/header";
import HeroSection from "./home/hero";
import FeaturedProducts from "./home/featuredProducts";
import StorySection from "./home/story";
import StatSection from "./home/stats";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <StorySection />
      <StatSection />
    </>
  );
}

export default App;
