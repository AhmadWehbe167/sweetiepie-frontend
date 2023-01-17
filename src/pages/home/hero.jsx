import tartImage from "../../assets/images/home/hero/tart.png";
import NarButton from "../../components/narrowButton";
import "../../assets/styles/pages/home/hero.css";

function HeroSection() {
  function handleShopNow() {
    //TODO: update shop now to navigate to shop page
    console.log("Shop Now");
  }
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
          <NarButton text={"Shop Now"} onClick={handleShopNow} />
        </div>
        <img className="hero-section__image" src={tartImage} alt="tart" />
      </section>
    </>
  );
}

export default HeroSection;
