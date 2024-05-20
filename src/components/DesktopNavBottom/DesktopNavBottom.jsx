import style from "./DesktopNavBottom.module.css";
import sections from "../../data/arrays/bottomSections";

import DividerLine from "../DividerLine/DividerLine";
import NavList from "../NavList/NavList";
import LogoNyt from "../LogoNyt/LogoNyt";
import DesktopNavBottomListItem from "../DesktopNavBottomListItem/DesktopNavBottomListItem";

function DesktopNavBottom() {
  return (
    <>
      <div className={style.dividerContainer}>
        <DividerLine />
      </div>

      <NavList isBottom={true}>
        <LogoNyt isBottom={true} />

        <div className={style.sections}>
          {sections.map((section) => (
            <DesktopNavBottomListItem
              section={section}
              isBottom={true}
              isDesktop={true}
              key={section}
            />
          ))}
        </div>
      </NavList>
      <div className={style.dividerContainer}>
        <DividerLine />
      </div>
    </>
  );
}

export default DesktopNavBottom;
