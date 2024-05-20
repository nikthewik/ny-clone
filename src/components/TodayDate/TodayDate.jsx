import style from "./TodayDate.module.css";

function TodayDate() {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return <span className={style.date}>{date}</span>;
}

export default TodayDate;
