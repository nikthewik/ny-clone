import { useSelector } from "react-redux";

import style from "./DesktopHeader.module.css";
import sections from "../../data/arrays/menuSections";

import DesktopForm from "../DesktopForm/DesktopForm";
import LogoLogin from "../LogoLogin/LogoLogin";
import TodayDate from "../TodayDate/TodayDate";
import TodayPaper from "../TodayPaper/TodayPaper";
import LogoNyt from "../LogoNyt/LogoNyt";
import NavList from "../NavList/NavList";
import DesktopNavListItem from "../DesktopNavListItem/DesktopNavListItem";
import DividerLine from "../DividerLine/DividerLine";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

function DesktopHeader() {
  const dropdown = useSelector((state) => state.dropdown.section);

  return (
    <>
      <header className={style.header}>
        <section className={style.topContainer}>
          <DesktopForm />
          <LogoLogin />
        </section>

        <section className={style.mediumContainer}>
          <div className={style.dateContainer}>
            <TodayDate />
            <TodayPaper />
          </div>
          <LogoNyt />
        </section>

        <section>
          <NavList>
            {sections.map((section) => (
              <DesktopNavListItem section={section} key={section} />
            ))}
          </NavList>
        </section>
      </header>

      <div className={style.dividerContainer}>
        <DividerLine />
        <DividerLine />

        {dropdown !== "" && <DropdownMenu />}
      </div>
    </>
  );
}

export default DesktopHeader;
