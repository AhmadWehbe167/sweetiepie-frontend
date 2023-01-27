import Chart from "../../components/chart";
import bgImage from "../../assets/images/home/stats/background.webp";
import "../../assets/styles/pages/home/stats.css";
import stats from "../../assets/customData/stats.json";
import SpanText from "../../components/spanText";

function StatSection() {
  return (
    <div className="stats-section">
      <img src={bgImage} alt="" className="stats-section__bg" />
      <div className="stats-section__body">
        <h1 className="stats-section__title">meet us in numbers</h1>
        <div className="stats-section__container">
          {stats.map((e, idx) => {
            return (
              <div key={e.text} className="stats-section__content">
                <Chart
                  labels={e.labels}
                  colors={e.colors}
                  customData={e.customData}
                  number={e.number}
                  text={e.text}
                  idx={idx}
                />
                <SpanText classes={"stats-section__text"} text={e.content} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StatSection;
