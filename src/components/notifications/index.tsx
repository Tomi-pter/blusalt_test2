import styled from "styled-components";
import Notifs from "./Notifs";
import {
  ActivityData,
  ContactData,
  handleSideClose,
  NotificationData,
} from "../charts/data";

const NotifWrapper = styled.div`
  padding: 16px;
  background-color: #fff8f8;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  grid-column: 5;
  grid-row: 1/5;
  align-self: flex-start;
  padding-bottom: 32px;

  .close {
    display: none;
  }

  @media screen and (max-width: 1150px) {
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
  }
`;
export default function Notifications() {
  return (
    <NotifWrapper id="notifs">
      <button className="close" onClick={handleSideClose}>
        x
      </button>
      <Notifs subject="Notifications" data={NotificationData} />
      <Notifs subject="Activities" data={ActivityData} />
      <Notifs subject="Contacts" data={ContactData} />
    </NotifWrapper>
  );
}
