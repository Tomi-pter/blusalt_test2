import bug from "../../assets/notifications/bug.svg";
import newuser from "../../assets/notifications/newUser.svg";
import sub from "../../assets/notifications/subs.svg";
import person1 from "../../assets/notifications/person.png";
import person2 from "../../assets/notifications/person2.png";
import person3 from "../../assets/notifications/person3.png";

interface Metric {
  id: number;
  title: string;
  amount: string;
  percentage: number;
}
interface User {
  thisYr: number;
  lastYr: number;
}
interface Reports {
  amount: number;
  OS: string;
}
interface SEO {
  amount: number;
  month: string;
}
type NotifsData = {
  img: string;
  title: string;
  time?: string;
};

export const Metrics: Array<Metric> = [
  {
    id: 1,
    title: "Requests",
    amount: "7,265",
    percentage: 11.02,
  },
  {
    id: 2,
    title: "KYC",
    amount: "3,671",
    percentage: -0.03,
  },
  {
    id: 3,
    title: "Tasks",
    amount: "156",
    percentage: 15.03,
  },
  {
    id: 4,
    title: "Customers",
    amount: "2,318",
    percentage: 6.08,
  },
];

export const UserData: Array<User> = [
  {
    thisYr: 8000,
    lastYr: 0,
  },
  {
    thisYr: 12000,
    lastYr: 3000,
  },
  {
    thisYr: 5000,
    lastYr: 11000,
  },
  {
    thisYr: 7000,
    lastYr: 24000,
  },
  {
    thisYr: 17000,
    lastYr: 13000,
  },
  {
    thisYr: 28000,
    lastYr: 10000,
  },
  {
    thisYr: 21000,
    lastYr: 15000,
  },
];

export const ReportData: Array<Reports> = [
  {
    amount: 15000,
    OS: "Linux",
  },
  {
    amount: 27000,
    OS: "Mac",
  },
  {
    amount: 20000,
    OS: "iOS",
  },
  {
    amount: 30000,
    OS: "Windows",
  },
  {
    amount: 10000,
    OS: "Android",
  },
  {
    amount: 22500,
    OS: "Other",
  },
];

export const SEOData: Array<SEO> = [
  {
    amount: 15000,
    month: "Jan",
  },
  {
    amount: 26000,
    month: "Feb",
  },
  {
    amount: 17500,
    month: "Mar",
  },
  {
    amount: 27000,
    month: "Apr",
  },
  {
    amount: 8000,
    month: "May",
  },
  {
    amount: 20000,
    month: "Jun",
  },
  {
    amount: 15000,
    month: "Jul",
  },
  {
    amount: 22000,
    month: "Aug",
  },
  {
    amount: 18000,
    month: "Sep",
  },
  {
    amount: 30000,
    month: "Oct",
  },
  {
    amount: 7500,
    month: "Nov",
  },
  {
    amount: 22000,
    month: "Dec",
  },
];

export const NotificationData: Array<NotifsData> = [
  {
    img: bug,
    title: "You fixed a bug.",
    time: "Just now",
  },
  {
    img: newuser,
    title: "New user registered",
    time: "59 minutes ago",
  },
  {
    img: bug,
    title: "You fixed a bug.",
    time: "12 hours ago",
  },
  {
    img: sub,
    title: "You fixed a bug.",
    time: "Just now",
  },
];

export const ActivityData: Array<NotifsData> = [
  {
    img: person1,
    title: "Changed the style.",
    time: "Just now",
  },
  {
    img: person2,
    title: "Released a new version.",
    time: "59 minutes ago",
  },
  {
    img: person3,
    title: "Submitted a bug.",
    time: "12 hours ago",
  },
  {
    img: person1,
    title: "Modified a page bug.",
    time: "Today, 11:59 AM",
  },
  {
    img: person2,
    title: "Deleted a page.",
    time: "Feb 2, 2024",
  },
];
export const ContactData: Array<NotifsData> = [
  {
    img: person1,
    title: "Natali Craig",
  },
  {
    img: person2,
    title: "Joe Wills",
  },
  {
    img: person3,
    title: "Future Hendrixx",
  },
  {
    img: person1,
    title: "Sean Carter",
  },
  {
    img: person2,
    title: "Laime Black",
  },
  {
    img: person3,
    title: "Faith Chwang",
  },
];

export const handleSideOpen = () => {
  document.getElementById("sidebar")?.classList.add("opened");
  document.getElementById("backdrop")?.classList.add("opened");
  document.body.style.overflow = "hidden";
};

export const handleSideClose = () => {
  document.getElementById("sidebar")?.classList.remove("opened");
  document.getElementById("backdrop")?.classList.remove("opened");
  document.getElementById("notifs")?.classList.remove("opened");
  document.body.style.overflow = "unset";
};

export const handleNotifOpen = () => {
  document.getElementById("notifs")?.classList.add("opened");
  document.getElementById("backdrop")?.classList.add("opened");
  document.body.style.overflow = "hidden";
};
