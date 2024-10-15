import { Bar } from "react-chartjs-2";
import { ReportData } from "./data";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import styled from "styled-components";

Chart.register(CategoryScale);

const BarWrapper = styled.div`
  grid-column: 1/3;
  grid-row: 3;
  padding: 24px;
  background-color: #f7f9fb;
  border-radius: 16px;
`;

const data = {
  labels: ReportData.map((report) => report.OS),
  datasets: [
    {
      label: "This Year",
      data: ReportData.map((report) => report.amount),
      borderRadius: 8,
      borderSkipped: false,
      backgroundColor: [
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

export default function BarChart() {
  return (
    <BarWrapper>
      <h2>Reports Generated</h2>
      <Bar data={data} options={options} />
    </BarWrapper>
  );
}
