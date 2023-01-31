import AboutCard from "../components/about/aboutCard";
import mainImage from "../assets/images/about/main-image.png";
import naturalIcon from "../assets/icons/about/natural.png";
import kitchenIcon from "../assets/icons/about/kitchen.png";
import tasteIcon from "../assets/icons/about/taste.png";
import "../assets/styles/pages/about.css";

export default function About() {
  return (
    <div className="about">
      <img src={mainImage} alt="" className="about__main-image" />
      <h1 className="about__title">Our Story</h1>
      <div className="about__desc-cont">
        <p className="about__desc">
          As soon as we graduated college, my best friend Sarah and I were
          determined to turn our baking hobby into a successful business. We had
          always dreamed of opening a bakery that sold delicious brownies, pies,
          and cinnamon rolls, and we were finally ready to make it happen. We
          poured all of our savings into rent for a small storefront in a busy
          neighborhood and spent every spare moment preparing for our grand
          opening. We worked tirelessly to perfect our recipes and create the
          perfect ambiance for our
        </p>
        <p className="about__desc">
          customers, and finding ways to differentiate ourselves from the
          competition slowly but surely, things started to turn around. Our
          brownies and pies became the talk of the town, and people were lined
          up out the door to try them. We even started selling our baked goods
          wholesale to a few local coffee shops. As the months went by, our
          little bakery became a bustling hub of activity. We had a loyal
          customer base, and we were finally turning a profit. We knew that we
          had overcome some tough challenges, but
        </p>
      </div>
      <h1 className="about__title">Why We Are The Best</h1>
      <div className="about__cards-cont">
        <AboutCard
          icon={naturalIcon}
          title={"Natural ingredients"}
          desc={
            "Our Delicious Delight Treat is a mouthwatering experience you won't want to miss. Our Delicious Delight Treat is a mouthwatering experience you won't want to miss."
          }
        />
        <AboutCard
          icon={kitchenIcon}
          title={"Homemade with love"}
          desc={
            "Our Delicious Delight Treat is a mouthwatering experience you won't want to miss Our Delicious Delight Treat is a mouthwatering .Our Delicious Delight Treat is a experience you won't want to miss."
          }
        />
        <AboutCard
          icon={tasteIcon}
          title={"Delicious Delight Treat"}
          desc={
            "Our Delicious Delight Treat is a mouthwatering experience you won't want to miss. Our Delicious Delight Treat is a mouthwatering experience you won't want to miss. Our Delicious Delight Treat is a."
          }
        />
      </div>
    </div>
  );
}
