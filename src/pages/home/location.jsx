import { useInView } from "react-intersection-observer";
import mapImage from "../../assets/images/home/location/map.webp";
import bg from "../../assets/images/home/location/background.webp";
import mapIcon from "../../assets/images/home/location/map-marker.svg";
import IconPoint from "../../components/iconPoint";
import MoreButton from "../../components/moreButton";
import "../../assets/styles/pages/home/location.css";

function LocationSection() {
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
    console.log("handle learn more");
  }

  function handleShopNow() {
    console.log("handle shop now");
  }

  return (
    <div className="location-section">
      <img src={bg} alt="" className="location-section__bg" />
      <div className="story">
        <a href="https://www.google.com/maps/place/croissant+bahja/@33.3775972,35.4425261,15.08z/data=!4m5!3m4!1s0x151e93068fd54183:0x9d7b28d07dbab!8m2!3d33.3780276!4d35.4433496">
          <img
            ref={imageRef}
            src={mapImage}
            alt=""
            className={
              "story__left-image location-image " +
              (imageIsVisible ? "animate-story__image" : "")
            }
          />
        </a>
        <div className="story__right-part">
          <div className="story__content">
            <h1
              ref={titleRef}
              className={
                "story__title " + (titleIsVisible ? "animate-story__title" : "")
              }
            >
              Our Location
            </h1>
            <p
              ref={descRef}
              className={
                "story__desc " + (descIsVisible ? "animate-story__desc" : "")
              }
            >
              You can find our products at following Bahja stores:
            </p>
            <div className="story__points-container">
              <IconPoint
                icon={mapIcon}
                text="Harouf, Nabatioeh"
                innerRef={pointRef}
                isVisible={pointIsVisible}
              />
              <IconPoint
                icon={mapIcon}
                text="Kfaromen, Nabatieh"
                isVisible={pointIsVisible}
              />
              <IconPoint
                icon={mapIcon}
                text="Nabatieh tahta"
                isVisible={pointIsVisible}
              />
            </div>
            <MoreButton
              firstOnClick={handleLearnMore}
              secondOnClick={handleShopNow}
              firstText="Contact Us"
              secondText="Shop Now"
              innerRef={buttonRef}
              isVisible={buttonIsVisible}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationSection;
