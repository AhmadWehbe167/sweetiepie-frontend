import Chart from "../../components/chart";
import bgImage from "../../assets/images/home/stats/background.png";
import "../../assets/styles/pages/home/stats.css";

function StatSection() {
  return (
    <div className="stats-section">
      <img src={bgImage} alt="" className="stats-section__bg" />
      <Chart
        labels={["Satisfied", "Feedback"]}
        colors={["#F04930", "#F9C171"]}
        customData={[98, 2]}
        number={"98%"}
        text={"Satisfaction"}
      />
      {/* <div className="stats-section__body">
        <h1 className="stats-section__title">meet us in numbers</h1>
        <div className="stats-section__container">
          <div className="stats-section__content">
            <Chart
              labels={["Satisfied", "Feedback"]}
              colors={["#F04930", "#F9C171"]}
              customData={[98, 2]}
              number={"98%"}
              text={"Satisfaction"}
            />
            <span className="stats-section__text">
              it's no wonder that our bakery's products are a hit among
              customers!
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default StatSection;
