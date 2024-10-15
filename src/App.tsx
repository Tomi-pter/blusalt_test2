import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Charts from "./components/charts";

const AppWrapper = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100dvw;
  position: relative;

  h2 {
    font-size: 16px;
    font-weight: 600;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Sidebar />
      <Charts />
    </AppWrapper>
  );
}

export default App;
