"use client";
// Chart.js
import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend, Title} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, Title);
// Styles
import style from "./style.module.css";

interface ChartProps {
  budgetNames: string[];
  budgetMaxAmounts: number[];
  budgetColors: string[];
  totalAmount: number;
  budgetsMaxAmount: number;
}

export default function Chart({budgetNames, budgetMaxAmounts, budgetColors, totalAmount, budgetsMaxAmount}: ChartProps) {
  const data = {
    labels: budgetNames,
    datasets: [
      {
        data: budgetMaxAmounts,
        backgroundColor: budgetColors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "62%",
    border: "1%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={style.chart}>
      <Doughnut data={data} options={options} />

      <div className={style.chartText}>
        <p>${totalAmount}</p>
        <p>of ${budgetsMaxAmount} limit</p>
      </div>
    </div>
  );
}
