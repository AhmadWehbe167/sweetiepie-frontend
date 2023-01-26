import "../../assets/styles/pages/home/testimonials.css";
import bgImage from "../../assets/images/home/testimonials/background.png";
import rachelImage from "../../assets/images/home/testimonials/rachel.webp";
import rossImage from "../../assets/images/home/testimonials/ross.jpg";
import joeyImage from "../../assets/images/home/testimonials/joey.png";
import leftSVG from "../../assets/images/home/testimonials/left-arrow.svg";
import rightSVG from "../../assets/images/home/testimonials/right-arrow.svg";
import starImage from "../../assets/images/home/testimonials/star.png";
import leftQuoteImage from "../../assets/images/home/testimonials/left-quote.svg";
import rightQuoteImage from "../../assets/images/home/testimonials/right-quote.svg";
import { useState } from "react";
import reviews from "../../assets/customData/reviews.json";
import { useInView } from "react-intersection-observer";

function TestimonialsPage() {
  const [index, setIndex] = useState(1);
  const [titleRef, titleIsVisible] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [cardRef, cardIsVisible] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const images = [rossImage, rachelImage, joeyImage];

  function handleNext() {
    if (index < 2) {
      setIndex(index + 1);
    }
  }

  function handlePrev() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div className="testim-section">
      <img src={bgImage} alt="" className="testim-section__bg" />
      <div className="testim-section__body">
        <h1
          ref={titleRef}
          className={
            "testim-section__title" +
            (titleIsVisible ? " testim-item--visible" : "")
          }
        >
          Don't take our word for it
        </h1>
        <span
          className={
            "testim-section__subtitle" +
            (titleIsVisible ? " testim-item--visible" : "")
          }
        >
          Our clients send us a bunch of smiles and we love them
        </span>
        <div
          ref={cardRef}
          className={
            "testim-section__container" +
            (cardIsVisible ? " testim-item--visible" : "")
          }
        >
          <div className="testim-section__img-cont">
            <div className="testim-section__main-img testim-section__main-img--left">
              <img
                className={index < 1 ? "disabled-arrow" : ""}
                src={images[(index - 1) % images.length]}
                alt=""
              />
            </div>
            <div className="testim-section__main-img">
              <img src={images[index]} alt="" />
            </div>
            <div className="testim-section__main-img testim-section__main-img--right">
              <img
                className={index > 1 ? "disabled-arrow" : ""}
                src={images[(index + 1) % images.length]}
                alt=""
              />
            </div>
          </div>
          <span className="testim-section__name">{reviews[index]["name"]}</span>
          <div className="testim-section__subcont">
            <img
              className={index < 1 ? "disabled-arrow" : ""}
              src={leftSVG}
              alt="left-arrow"
              onClick={handlePrev}
            />
            <span>{reviews[index]["location"]}</span>
            <img
              className={index > 1 ? "disabled-arrow" : ""}
              src={rightSVG}
              alt="right-arrow"
              onClick={handleNext}
            />
          </div>
          <div className="testim-section__rating">
            {[...Array(5)].map((e, idx) => {
              return (
                <img
                  key={idx}
                  src={starImage}
                  alt=""
                  className="testim-section__star"
                />
              );
            })}
          </div>
          <div className="testim-section__review">
            <span>{reviews[index]["review"]}</span>
            <img
              src={leftQuoteImage}
              alt=""
              className="testim-section__left-quote"
            />
            <img
              src={rightQuoteImage}
              alt=""
              className="testim-section__right-quote"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsPage;
