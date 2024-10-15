import styled from "styled-components";
import sun from "../../assets/navbar/Sun.svg";
import clock from "../../assets/navbar/ClockCounterClockwise.svg";
import bell from "../../assets/navbar/Bell.svg";
import side from "../../assets/navbar/Sidebar.svg";
import search from "../../assets/navbar/search.svg";
import logo from "../../assets/Logo.svg";
import { handleNotifOpen, handleSideOpen } from "../charts/data";

const NavWrapper = styled.div`
  padding: 30px 30px 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0ecec;

  .rhs {
    display: flex;
    gap: 20px;
  }

  .logo {
    display: none;
  }

  .search {
    background: var(--black-5, rgba(28, 28, 28, 0.05));
    border-radius: 8px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    span {
      color: var(--black-20, rgba(28, 28, 28, 0.2));
      margin-right: 8px;
    }

    img {
      width: 15px;
      height: 15px;
      padding-left: 5px;
    }
  }
  input {
    padding: 4px 8px;
    outline: none;
    border: none;
    background-color: transparent;
  }
  input::placeholder {
    color: var(--black-20, rgba(28, 28, 28, 0.2));
  }

  .btns {
    display: flex;
    gap: 8px;

    button {
      padding: 4px;
      background-color: transparent;
      cursor: pointer;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media screen and (max-width: 810px) {
    .logo {
      display: block;
    }
    .current {
      display: none;
    }
  }
  @media screen and (max-width: 1150px) {
  }
`;

export default function NavBar() {
  return (
    <NavWrapper>
      <img src={logo} alt="" className="logo" />
      <div className="current">
        <span>Dashboard</span>
      </div>
      <div className="rhs">
        <div className="search">
          <span>⌘/</span>
          <input type="text" placeholder="Search" />
          <img src={search} alt=" " />
        </div>
        <div className="btns">
          <button>
            <img src={sun} alt="theme" />
          </button>
          <button onClick={handleNotifOpen}>
            <img src={clock} alt="activities" />
          </button>
          <button onClick={handleNotifOpen}>
            <img src={bell} alt="notifications" />
          </button>
          <button onClick={handleSideOpen} className="sideBtn">
            <img src={side} alt="sidebar" />
          </button>
        </div>
      </div>
    </NavWrapper>
  );
}
