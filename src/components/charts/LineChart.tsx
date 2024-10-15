import { Line } from "react-chartjs-2";
import { UserData } from "./data";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import styled from "styled-components";

Chart.register(CategoryScale);

const LineWrapper = styled.div`
  grid-column: 1/4;
  grid-row: 2;
  padding: 24px;
  background-color: #f7f9fb;
  border-radius: 16px;

  .chartCont {
    justify-self: flex-end;
  }
  .text {
    display: flex;
    gap: 16px;
    align-items: center;

    h2 {
      cursor: pointer;
    }

    h2:nth-of-type(2),
    h2:nth-of-type(3) {
      color: var(--black-40, rgba(28, 28, 28, 0.4));
      transition: all 0.5s ease;
    }
    h2:nth-of-type(2):hover,
    h2:nth-of-type(3):hover {
      color: var(--black-40, rgba(28, 28, 28));
    }

    span {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .circle {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #1c1c1c;
      display: inline-block;
    }
    .circle.last {
      background-color: #a8c5da;
    }
  }
`;

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "This Year",
      data: UserData.map((user) => user.thisYr),
      fill: false,
      borderColor: "#1C1C1C",
      borderWidth: 1.5,
      lineTension: 0.4,
    },
    {
      label: "Second dataset",
      data: UserData.map((user) => user.lastYr),
      fill: false,
      borderColor: "#A8C5DA",
      borderDash: [5, 5],
      lineTension: 0.4,
    },
  ],
};

const options = {
  elements: {
    point: {
      radius: 0,
    },
  },
  responsive: true,
  maintainAspectRatio: true,
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
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  devicePixelRatio: 2,
};

Chart.defaults.scale.grid.drawOnChartArea = false;

export default function LineChart() {
  return (
    <LineWrapper>
      <div className="text">
        <h2>Total Users</h2>
        <h2>Total Projects</h2>
        <h2>Operating Status</h2>
        <span>|</span>
        <span>
          <span className="circle"></span>This year
        </span>
        <span>
          <span className="circle last"></span>Last year
        </span>
      </div>
      <div className="chartCont">
        <Line data={data} options={options} />
      </div>
    </LineWrapper>
  );
}
