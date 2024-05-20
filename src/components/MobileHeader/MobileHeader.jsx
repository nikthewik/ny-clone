import { useSelector } from "react-redux";

import style from "./MobileHeader.module.css";

import ButtonHamburger from "../ButtonHamburger/ButtonHamburger";
import MobileMenu from "../MobileMenu/MobileMenu";
import LogoNyt from "../LogoNyt/LogoNyt";
import LogoLogin from "../LogoLogin/LogoLogin";
import TodayDate from "../TodayDate/TodayDate";

function MobileHeader() {
  const isOpen = useSelector((state) => state.toggle.isHamburgerOpen);

  return (
    <header>
      <section className={style.topSection}>
        <ButtonHamburger />

        {isOpen && <MobileMenu />}

        <LogoNyt />
        <LogoLogin />
      </section>

      <section className={style.bottomSection}>
        <TodayDate />
      </section>
    </header>
  );
}

export default MobileHeader;
