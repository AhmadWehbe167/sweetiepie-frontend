import Chart from "../../components/chart";
import bgImage from "../../assets/images/home/stats/background.png";

function StatSection() {
  return (
    <div className="stats-section">
      <img src={bgImage} alt="" className="stats-section__bg" />
      <div className="stats-section__body"></div>
    </div>
  );
}

export default StatSection;
