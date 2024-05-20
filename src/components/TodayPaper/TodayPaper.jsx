import style from "./TodayPaper.module.css";

function TodayPaper() {
  return (
    <a
      className={style.todayPaper}
      href="https://www.nytimes.com/section/todayspaper"
      target="_blank"
    >
      <p>{"Today's Paper"}</p>
    </a>
  );
}

export default TodayPaper;
