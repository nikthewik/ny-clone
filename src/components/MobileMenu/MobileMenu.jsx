import style from "./MobileMenu.module.css";

import sections from "../../data/arrays/menuSections";

import ButtonClose from "../ButtonClose/ButtonClose";
import MobileForm from "../MobileForm/MobileForm";
import NavList from "../NavList/NavList";
import MobileNavListItem from "../MobileNavListItem/MobileNavListItem";

function MobileMenu() {
  return (
    <div className={style.menu}>
      <ButtonClose />
      <MobileForm />
      <NavList>
        {sections.map((section) => (
          <MobileNavListItem section={section} key={section} />
        ))}
      </NavList>
    </div>
  );
}

export default MobileMenu;
