import { Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import styled from "styled-components";

Chart.register(CategoryScale);

const BarWrapper = styled.div`
  grid-column: 3/5;
  grid-row: 3;
  padding: 24px;
  background-color: #f7f9fb;
  border-radius: 16px;

  .donutCont {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 16px;
  }

  .donut {
    /* width: 40%; */
    height: auto;
    width: 45%;
  }

  .stats {
    width: 45%;
  }

  .statCont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    p {
      margin-left: 12px;
    }
  }
  .statCont::before {
    display: block;
    position: absolute;
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #1c1c1c;
  }

  .statCont:nth-of-type(2)::before {
    background-color: #a1e3cb;
  }
  .statCont:nth-of-type(3)::before {
    background-color: #b1e3ff;
  }
  .statCont:nth-of-type(4)::before {
    background-color: #a8c5da;
  }

  @media screen and (max-width: 810px) {
    .donutCont {
      flex-direction: column;
    }
    .donut {
      width: auto;
    }
    .stats {
      width: auto;
    }
  }
`;

const data = {
  labels: ["Nigeria", "Ghana", "Kenya", "Benin Republic"],
  datasets: [
    {
      data: [48.6, 22.5, 20.8, 8.1],
      borderRadius: 6,
      backgroundColor: ["#1C1C1C", "#B1E3FF", "#A1E3CB", "#A8C5DA"],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  cutout: 30,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function Donut() {
  return (
    <BarWrapper>
      <h2>Traffic by Location</h2>
      <div className="donutCont">
        <div className="donut">
          <Doughnut data={data} options={options} />
        </div>
        <div className="stats">
          <div className="statCont">
            <p>Nigeria</p> <span>48.6%</span>
          </div>
          <div className="statCont">
            <p>Ghana</p> <span>22.5%</span>
          </div>
          <div className="statCont">
            <p>Kenya</p> <span>20.8%</span>
          </div>
          <div className="statCont">
            <p>Benin Republic</p> <span>8.1%</span>
          </div>
        </div>
      </div>
    </BarWrapper>
  );
}
