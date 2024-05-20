import style from "./ArrowIcon.module.css";

function ArrowIcon({ section, sectionName = null }) {
  return (
    <svg
      viewBox="0 0 13 8"
      className={`${style.arrowIcon} ${
        sectionName === section && style.arrowUp
      }`}
    >
      <polygon
        fill="var(--clr-b1)"
        points="6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"
      ></polygon>
    </svg>
  );
}

export default ArrowIcon;
