import tartImage from "../../assets/images/home/hero/tart.webp";
import rollImage from "../../assets/images/home/hero/cinnamon-roll.webp";
import brownieImage from "../../assets/images/home/hero/brownie.webp";
import cookieImage from "../../assets/images/home/hero/cookie.webp";
import NarButton from "../../components/home/narrowButton";
import "../../assets/styles/pages/home/hero.css";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-section__content">
          <span className="hero-section__title">
            A Taste Of Heaven In Every Bite!
          </span>
          <p className="hero-section__body">
            At our bakery, you'll find a wide variety of breads, from sourdough
            to rye to ciabatta, all baked to perfection in our wood-fired brick
            oven. We also offer an ever-changing selection of pastries,
            including flaky croissants, delectable donuts, and indulgent
            brownies.
          </p>
          <Link to="/product-search">
            <NarButton text={"Shop Now"} />
          </Link>
          <img
            className="hero-section__brownie"
            src={brownieImage}
            alt="cinnamon roll"
          />
          <img
            className="hero-section__cookie"
            src={cookieImage}
            alt="cinnamon roll"
          />
        </div>
        <img className="hero-section__image" src={tartImage} alt="tart" />
        <img
          className="hero-section__roll"
          src={rollImage}
          alt="cinnamon roll"
        />
      </section>
    </>
  );
}
