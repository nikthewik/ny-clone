import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleHamburger } from "../../features/toggle/toggleSlice";
import { unsetDropdown } from "../../features/dropdown/dropdownSlice";

import style from "./SectionsList.module.css";
import goToTop from "../../helpers/goToTop";

function SectionsList({
  col1,
  col2 = null,
  isBottom = false,
  isDesktop = false,
  setSectionName = null,
}) {
  const isOpen = useSelector((state) => state.toggle.isHamburgerOpen);
  const dispatch = useDispatch();

  function resetAndGo() {
    // Desktop Menu
    if (!isBottom && isDesktop) dispatch(unsetDropdown());
    // Mobile Menu
    if (!isBottom && !isDesktop) dispatch(toggleHamburger(!isOpen));
    // Mobile Bottom
    if (isBottom && !isDesktop) setSectionName("");

    goToTop();
  }

  return (
    <section className={isBottom ? style.sectionBottom : style.section}>
      {!isBottom && <p className={style.titleSection}>SECTIONS</p>}

      <div
        className={isBottom ? style.listBottomContainer : style.listContainer}
      >
        <ul className={isBottom ? style.listBottom : style.list}>
          {col1 &&
            col1.map((section) => (
              <li key={section.name}>
                <Link to={`/section/${section.params}`} onClick={resetAndGo}>
                  {section.name}
                </Link>
              </li>
            ))}
        </ul>

        <ul
          className={`${style.column2} ${
            isBottom ? style.listBottom : style.list
          }`}
        >
          {col2 &&
            col2.map((section) => (
              <li key={section.name}>
                <Link to={`/section/${section.params}`} onClick={resetAndGo}>
                  {section.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default SectionsList;
