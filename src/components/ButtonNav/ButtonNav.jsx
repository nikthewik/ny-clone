import style from "./ButtonNav.module.css";

function ButtonNav({
  children,
  isBottom = false,
  section,
  sectionName,
  setSectionName,
}) {
  function toggleSection() {
    if (sectionName === section) setSectionName("");
    if (sectionName !== section) setSectionName(section);
  }

  return (
    <button
      className={`${style.button} ${
        isBottom ? style.bottom : style.mobileMenu
      }`}
      onClick={toggleSection}
    >
      {children}
    </button>
  );
}

export default ButtonNav;
