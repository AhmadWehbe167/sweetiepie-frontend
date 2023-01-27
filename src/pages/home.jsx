import "../assets/styles/app.css";
import HeroSection from "./home/hero";
import FeaturedProducts from "./home/featuredProducts";
import StorySection from "./home/story";
import StatSection from "./home/stats";
import TestimonialsPage from "./home/testimonials";
import LocationSection from "./home/location";

function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <StorySection />
      <StatSection />
      <TestimonialsPage />
      <LocationSection />
    </>
  );
}

export default Home;
