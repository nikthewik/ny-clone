import style from "./MobileNavBottom.module.css";
import sections from "../../data/arrays/bottomSections";

import NavList from "../NavList/NavList";
import MobileNavListItem from "../MobileNavListItem/MobileNavListItem";
import LogoNyt from "../LogoNyt/LogoNyt";

function MobileNavBottom() {
  return (
    <div className={style.bottomNav}>
      <NavList>
        <div className={style.logoContainer}>
          <LogoNyt />
        </div>

        {sections.map((section) => (
          <MobileNavListItem section={section} isBottom={true} key={section} />
        ))}
      </NavList>
    </div>
  );
}

export default MobileNavBottom;
