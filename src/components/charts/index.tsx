import styled from "styled-components";
import LineChart from "./LineChart";
import MetricData from "./MetricData";
import BarChart from "./BarChart";
import Donut from "./Donut";
import SEO from "./SEO";
import NavBar from "../navbar";
import Traffic from "./Traffic";
import Notifications from "../notifications";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChartGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
  padding: 24px 30px;

  @media screen and (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;

export default function Charts() {
  return (
    <MainWrapper>
      <NavBar />
      <ChartGrid>
        <MetricData />
        <LineChart />
        <Traffic />
        <BarChart />
        <Donut />
        <SEO />
        <Notifications />
      </ChartGrid>
    </MainWrapper>
  );
}
