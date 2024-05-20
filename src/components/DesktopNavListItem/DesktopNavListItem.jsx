import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setDropdown,
  unsetDropdown,
} from "../../features/dropdown/dropdownSlice";
import goToTop from "../../helpers/goToTop";

import style from "./DesktopNavListItem.module.css";

import ArrowIcon from "../ArrowIcon/ArrowIcon";

function DesktopNavListItem({ section }) {
  const dispatch = useDispatch();

  function checkSection(section) {
    if (section === "U.S.") return "us";
    if (section === "Lifestyle") return "well";
    return section.toLowerCase();
  }

  function resetAndGo() {
    dispatch(unsetDropdown());
    goToTop();
  }

  return (
    <Link
      className={style.link}
      to={`section/${checkSection(section)}`}
      onClick={resetAndGo}
    >
      <li
        className={style.navItem}
        onMouseEnter={() => dispatch(setDropdown(section))}
        onMouseLeave={() => dispatch(unsetDropdown())}
      >
        {section}
        <div className={style.arrowContainer}>
          <ArrowIcon section={section} />
        </div>
      </li>
    </Link>
  );
}

export default DesktopNavListItem;
