import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import styled from "styled-components";
import { SEOData } from "./data";

Chart.register(CategoryScale);

const BarWrapper = styled.div`
  grid-column: 1/5;
  grid-row: 4;
  padding: 24px;
  background-color: #f7f9fb;
  border-radius: 16px;
`;

const data = {
  labels: SEOData.map((data) => data.month),
  datasets: [
    {
      label: "This Year",
      data: SEOData.map((data) => data.amount),
      borderRadius: 8,
      borderSkipped: false,
      backgroundColor: [
        "#95A4FC",
        "#BAEDBD",
        "#1C1C1C",
        "#B1E3FF",
        "#A8C5DA",
        "#A1E3CB",
        "#95A4FC",
        "#BAEDBD",
        "#1C1C1C",
        "#B1E3FF",
        "#A8C5DA",
        "#A1E3CB",
      ],
      barThickness: 28,
    },
  ],
};

const options = {
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        // tickLength: 0,
        // tickWidth: 0,
        // drawTicks: false,
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function SEO() {
  return (
    <BarWrapper>
      <h2>Marketing & SEO</h2>
      <Bar data={data} options={options} />
    </BarWrapper>
  );
}
