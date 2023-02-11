import "../../assets/styles/pages/home/story.css";
import MoreButton from "../../components/home/moreButton";
import IconPoint from "../../components/home/iconPoint";
import bakingImage from "../../assets/images/home/story/baking.webp";
import energyImage from "../../assets/icons/home/energy.svg";
import fiberImage from "../../assets/icons/home/fiber.svg";
import antioxidImage from "../../assets/icons/home/antioxid.svg";
import happyEyesImage from "../../assets/icons/home/happy-eyes.svg";
import bg from "../../assets/images/home/story/background.webp";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

export default function StorySection() {
  const navigate = useNavigate();
  const [imageRef, imageIsVisible] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [titleRef, titleIsVisible] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [descRef, descIsVisible] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [pointRef, pointIsVisible] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [buttonRef, buttonIsVisible] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  function handleLearnMore() {
    navigate("/about");
  }

  function handleShopNow() {
    navigate("/product-search");
  }

  return (
    <section className="story">
      <img
        ref={imageRef}
        src={bakingImage}
        alt=""
        className={
          "story__left-image " + (imageIsVisible ? "animate-story__image" : "")
        }
      />
      <div className="story__right-part">
        <img src={bg} alt="" className="story__bg" />
        <div className="story__content">
          <h1
            ref={titleRef}
            className={
              "story__title " + (titleIsVisible ? "animate-story__title" : "")
            }
          >
            Why SweetiePies?
          </h1>
          <p
            ref={descRef}
            className={
              "story__desc " + (descIsVisible ? "animate-story__desc" : "")
            }
          >
            There was once an online small bakery shop located in a quaint
            little town. It was owned by a kind and skilled baker named Safa,
            who had a passion for creating delicious Brownies and tarts. It was
            hard at first, but she did not give up. She was determined to make
            her dream come true.
          </p>
          <div className="story__points-container">
            <IconPoint
              icon={energyImage}
              text="Quick source of energy"
              innerRef={pointRef}
              isVisible={pointIsVisible}
            />
            <IconPoint
              icon={fiberImage}
              text="Good source of fibers"
              isVisible={pointIsVisible}
            />
            <IconPoint
              icon={antioxidImage}
              text="Contains antioxidants"
              isVisible={pointIsVisible}
            />
            <IconPoint
              icon={happyEyesImage}
              text="Improves your mood"
              isVisible={pointIsVisible}
            />
          </div>
          <MoreButton
            firstOnClick={handleLearnMore}
            secondOnClick={handleShopNow}
            firstText="Learn More"
            secondText="Shop Now"
            innerRef={buttonRef}
            isVisible={buttonIsVisible}
          />
        </div>
      </div>
    </section>
  );
}
