import "../../assets/styles/pages/home/featuredProducts.css";
import FeaturedItem from "../../components/featuredItem";

import droppingImage from "../../assets/images/home/featuredProducts/dropping.png";
import bgImage from "../../assets/images/home/featuredProducts/background.png";

import leftBubbleImage from "../../assets/images/home/featuredProducts/left-bubble.svg";
import middleBubbleImage from "../../assets/images/home/featuredProducts/middle-bubble.svg";
import rightBubbleImage from "../../assets/images/home/featuredProducts/right-bubble.svg";

import brownie1Image from "../../assets/images/home/featuredProducts/brownie-1.svg";
import brownie2Image from "../../assets/images/home/featuredProducts/brownie-2.svg";
import brownie3Image from "../../assets/images/home/featuredProducts/brownie-3.svg";

import { useInView } from "react-intersection-observer";

function FeaturedProducts() {
  const [dropRef, dropIsVisible] = useInView({ threshold: 0, triggerOnce: true });
  const options = { threshold: 0.5, triggerOnce: true };
  const [leftRef, leftIsVisible] = useInView(options);
  const [midRef, midIsVisible] = useInView(options);
  const [rightRef, rightIsVisible] = useInView(options);

  return (
    <>
      <section className="featured-prods">
        <div className="featured-prods__rectangle">
          <span className="featured-prods__title">
            A Glimpse of Our Baked Delights
          </span>
        </div>
        <img
          ref={dropRef}
          className={"dropping " + (dropIsVisible ? "dropping-animation" : "")}
          src={droppingImage}
          alt="dropping"
        />
        <div className="featured-prods__container ">
          <FeaturedItem
            innerRef={leftRef}
            title={"Snowy wonder"}
            bg={rightBubbleImage}
            image={brownie1Image}
            isVisible={leftIsVisible}
          />
          <FeaturedItem
            innerRef={midRef}
            title={"Lotus Nirvana"}
            bg={middleBubbleImage}
            image={brownie2Image}
            className={"featured-item__image--middle"}
            isVisible={midIsVisible}
          />
          <FeaturedItem
            innerRef={rightRef}
            title={"Merry Fudge"}
            bg={leftBubbleImage}
            image={brownie3Image}
            isVisible={rightIsVisible}
          />
        </div>
        <img className="featured-prods__bg" src={bgImage} alt="bg" />
      </section>
    </>
  );
}

export default FeaturedProducts;
