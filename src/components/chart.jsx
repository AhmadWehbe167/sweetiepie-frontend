import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "../assets/styles/components/chart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ labels, colors, customData, number, text }) {
  const options = {
    cutout: 80,
    responsive: true,
  };

  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: customData,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
        doughnutSize: 1,
        doughnutCoefficient: 1,
      },
    ],
  };

  const ShadowPlugin = {
    beforeDraw: (chart, args, options) => {
      const { ctx } = chart;
      ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = 8;
      ctx.shadowOffsetY = 8;
    },
  };

  return (
    <div className="chart-col">
      <div className="chart-stack">
        <Doughnut data={data} options={options} plugins={[ShadowPlugin]} />
        <div className="chart-stack__content">
          <span className="chart-stack__number">{number}</span>
          <span className="chart-stack__text">{text}</span>
        </div>
      </div>
      <div className="chart-labels">
        {labels.map((label, idx) => {
          return (
            <div className="chart-label-row">
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
