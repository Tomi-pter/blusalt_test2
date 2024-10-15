import styled from "styled-components";

const TrafficWrapper = styled.div`
  padding: 24px;
  background-color: #f7f9fb;
  grid-row: 2;
  grid-column: 4/5;
  border-radius: 16px;

  .media {
    display: flex;
    flex-direction: column;
  }

  .media > div {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
  }

  .spanCont {
    display: flex;
    gap: 2px;
  }

  span {
    display: block;
    width: 10px;
    height: 2.5px;
    background-color: #1c1c1c;
    border-radius: 0.5px;
  }

  .spanCont span:nth-of-type(2) {
    background-color: rgba(28, 28, 28, 0.4);
  }
  .spanCont span:nth-of-type(3) {
    background-color: rgba(28, 28, 28, 0.1);
  }
  .y span {
    width: 15px;
  }
  .p span {
    width: 20px;
  }
  .f span {
    width: 7px;
  }
  .t span {
    width: 12px;
  }
`;

export default function Traffic() {
  return (
    <TrafficWrapper>
      <h2>Traffic by Website</h2>
      <div className="media">
        <div>
          <p>Google</p>{" "}
          <div className="spanCont g">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>
          <p>YouTube</p>{" "}
          <div className="spanCont y">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>
          <p>Instagram</p>{" "}
          <div className="spanCont i">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>
          <p>Pinterest</p>{" "}
          <div className="spanCont p">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>
          <p>Facebook</p>{" "}
          <div className="spanCont f">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>
          <p>Twitter</p>{" "}
          <div className="spanCont t">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </TrafficWrapper>
  );
}
