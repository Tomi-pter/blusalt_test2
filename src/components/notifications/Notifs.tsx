import styled from "styled-components";

type NotifData = {
  img: string;
  title: string;
  time?: string;
};
type NotifsData = {
  subject: string;
  data: Array<NotifData>;
};
const NotifsWrapper = styled.div`
  h2 {
    padding-inline: 8px;
  }

  .content {
    display: flex;
    gap: 14px;
    align-items: center;
    padding: 8px;

    div {
      transition: all 0.5s ease;
    }

    div:hover {
      scale: 1.1;
      color: black;
    }
    div:hover span {
      color: black;
    }

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
    p {
      margin: 0;
      font-size: 14px;
    }
    span {
      color: rgba(28, 28, 28, 0.4);
      font-size: 12px;
      transition: all 0.5s ease;
    }
  }
`;
export default function Notifs({ data, subject }: NotifsData) {
  return (
    <NotifsWrapper>
      <h2>{subject}</h2>
      {data.map(({ img, title, time }) => (
        <div className="content">
          <img src={img} alt="" />
          <div>
            <p>{title}</p>
            {time ? <span>{time}</span> : null}
          </div>
        </div>
      ))}
    </NotifsWrapper>
  );
}
