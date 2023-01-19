import "../../assets/styles/pages/home/story.css";
import MoreButton from "../../components/moreButton";
import bakingImage from "../../assets/images/home/story/baking.png";
import IconPoint from "../../components/iconPoint";
import energyImage from "../../assets/icons/pages/story/energy.svg";
import fiberImage from "../../assets/icons/pages/story/fiber.svg";
import antioxidImage from "../../assets/icons/pages/story/antioxid.svg";
import happyEyesImage from "../../assets/icons/pages/story/happy-eyes.svg";
import bg from "../../assets/images/home/story/background.png";
import { useInView } from 'react-intersection-observer';

function StorySection() {
  const [ref, isVisible] = useInView({threshold: 0 });
  const [ref2, isVisible2] = useInView({threshold: 0 });


  function handleLearnMore() {
    //TODO: implement learn more button
    console.log("handle Learn More");
  }

  function handleShopNow() {
    //TODO: implement shop now button
    console.log("shop now!");
  }

  return (
    <section className="story">
      <img
        ref={ref}
        src={bakingImage}
        alt=""
        className={
          "story__left-image " + (isVisible ? "animate-story__image" : "")
        }
      />
      <div className="story__right-part">
        <img src={bg} alt="" className="story__bg" />
        <div className="story__content">
          <h1
            className={
              "story__title " + (isVisible ? "animate-story__title" : "")
            }
          >
            Why SweetiePies?
          </h1>
          <p
            className={
              "story__desc " + (isVisible ? "animate-story__desc" : "")
            }
          >
            There was once a small bakery shop located in a quaint little town.
            It was owned by a kind and skilled baker named Maria, who had a
            passion for creating delicious pastries and breads. There was once a
            small bakery shop located in a little town.
          </p>
          <div ref={ref2} className="story__points-container">
            <IconPoint
              icon={energyImage}
              text="Quick source of energy"
              isVisible={isVisible2}
            />
            <IconPoint
              icon={fiberImage}
              text="Good source of fibers"
              isVisible={isVisible2}
            />
            <IconPoint
              icon={antioxidImage}
              text="Contains antioxidants"
              isVisible={isVisible2}
            />
            <IconPoint
              icon={happyEyesImage}
              text="Improves your mood"
              isVisible={isVisible2}
            />
          </div>
          <MoreButton
            firstOnClick={handleLearnMore}
            secondOnClick={handleShopNow}
            firstText="Learn More"
            secondText="Shop Now"
            isVisible={isVisible2}
          />
        </div>
      </div>
    </section>
  );
}

export default StorySection;
