import React from "react";
import { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import "../assets/styles/components/chart.css";
import CountUp from "react-countup";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({
  labels,
  colors,
  customData,
  number,
  text,
  idx,
}) {
  const [curData, setCurData] = useState([0]);
  const [chartRef, chartIsVisible] = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const [matchesDeskView, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );

  useEffect(() => {
    if (chartIsVisible) {
      setCurData(customData);
    }
  }, [chartIsVisible, chartRef, customData]);

  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const options = {
    cutout: matchesDeskView ? 80 : 100,
    responsive: true,
    animation: {
      duration: 2000,
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "% of Votes",
        data: curData,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
        doughnutSize: 1,
        doughnutCoefficient: 1,
      },
    ],
  };

  return (
    <div className="chart-col">
      <div
        ref={chartRef}
        className={"chart-stack" + (chartIsVisible ? " chart-visible" : "")}
      >
        <div className="chart-stack__content">
          <span className="chart-stack__number">
            {chartIsVisible && (
              <CountUp start={0} end={number} duration={1} delay={0} />
            )}
            {idx === 0 ? "%" : null}
          </span>
          <span className="chart-stack__text">{text}</span>
        </div>
        <Doughnut data={data} options={options} />
      </div>
      <div
        className={"chart-labels" + (chartIsVisible ? " chart-visible" : "")}
      >
        {labels.map((label, idx) => {
          return (
            <div key={label} className="chart-label-row">
              <div
                className="label-circle"
                style={{ backgroundColor: colors[idx] }}
              ></div>
              <div className="label-text">{label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
