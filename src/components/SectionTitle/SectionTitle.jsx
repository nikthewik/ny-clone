import style from "./SectionTitle.module.css";

function SectionTitle({ sectionTitle }) {
  return (
    <div className={style.container}>
      <h1 className={style.title}>{sectionTitle}</h1>
    </div>
  );
}

export default SectionTitle;
