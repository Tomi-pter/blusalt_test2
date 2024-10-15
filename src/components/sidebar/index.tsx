import logo from "../../assets/Logo.svg";
import dash from "../../assets/sidebar nav/element-3.svg";
import timer from "../../assets/sidebar nav/timer.svg";
import kyc from "../../assets/sidebar nav/search-status.svg";
import report from "../../assets/sidebar nav/mobile-programming.svg";
import task from "../../assets/sidebar nav/task.svg";
import audit from "../../assets/sidebar nav/link.svg";
import customer from "../../assets/sidebar nav/user.svg";
import users from "../../assets/sidebar nav/security-user.svg";
import settings from "../../assets/sidebar nav/setting-2.svg";
import admin from "../../assets/sidebar nav/security.svg";
import styled from "styled-components";
import { handleSideClose } from "../charts/data";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: none;

  @media screen and (max-width: 1150px) {
    &.opened {
      display: block;
    }
  }
`;

const SidebarStyle = styled.div`
  height: 100dvh;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  border-right: 1px solid #f0ecec;

  .close {
    display: none;
  }

  & > img {
    padding: 4px 20px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .list > div {
    display: flex;
    gap: 8px;
    padding: 16px 20px;
    justify-content: flex-start;
    cursor: pointer;

    &:nth-of-type(1) {
      font-weight: 600;
    }

    &:nth-of-type(2),
    &:nth-of-type(5),
    &:nth-of-type(7) {
      border-bottom: 1px solid #f0ecec;
    }
  }
  @media screen and (max-width: 810px) {
    display: none;
    position: fixed;
    overflow-y: auto;
    border-radius: 16px;
    background-color: white;
    left: 20%;
    right: 20%;
    top: 100px;
    z-index: 11;
    gap: 0;

    &.opened {
      display: flex;
    }

    .close {
      display: unset;
      align-self: flex-end;
    }

    .logo {
      display: none;
    }
  }

  @media screen and (min-width: 500px) and (max-width: 810px) {
    max-height: 70vh;
  }
`;

export default function Sidebar() {
  const sidebarNav = [
    {
      image: dash,
      title: "Dashboard",
    },
    {
      image: timer,
      title: "Requests",
    },
    {
      image: kyc,
      title: "KYC",
    },
    {
      image: report,
      title: "Reports",
    },
    {
      image: task,
      title: "Tasks",
    },
    {
      image: audit,
      title: "Audit Trail",
    },
    {
      image: customer,
      title: "Customers",
    },
    {
      image: users,
      title: "Users",
    },
    {
      image: settings,
      title: "Settings",
    },
    {
      image: admin,
      title: "Administration",
    },
  ];

  return (
    <>
      <SidebarStyle id="sidebar">
        <img src={logo} alt="logo" className="logo" />
        <button className="close" onClick={handleSideClose}>
          x
        </button>
        <div className="list">
          {sidebarNav.map(({ image, title }) => (
            <div key={title}>
              <img src={image} alt=" " />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </SidebarStyle>
      <Backdrop id="backdrop" onClick={handleSideClose}></Backdrop>
    </>
  );
}
