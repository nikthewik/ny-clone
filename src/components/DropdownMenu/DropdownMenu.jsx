import { useDispatch, useSelector } from "react-redux";
import {
  setDropdown,
  unsetDropdown,
} from "../../features/dropdown/dropdownSlice";

import style from "./DropdownMenu.module.css";

import { usCol1, usCol2 } from "../../data/arrays/us";
import { worldCol1 } from "../../data/arrays/world";
import { businessCol1 } from "../../data/arrays/business";
import { artsCol1 } from "../../data/arrays/arts";
import { lifestyleCol1, lifestyleCol2 } from "../../data/arrays/lifestyle";
import { opinionCol1 } from "../../data/arrays/opinion";

import SectionsList from "../SectionsList/SectionsList";

function DropdownMenu() {
  const dropdown = useSelector((state) => state.dropdown.section);
  const dispatch = useDispatch();

  return (
    <div
      className={style.dropdown}
      onMouseEnter={() => dispatch(setDropdown(dropdown))}
      onMouseLeave={() => dispatch(unsetDropdown())}
    >
      {dropdown === "U.S." && (
        <SectionsList col1={usCol1} col2={usCol2} isDesktop={true} />
      )}
      {dropdown === "World" && (
        <SectionsList col1={worldCol1} isDesktop={true} />
      )}
      {dropdown === "Business" && (
        <SectionsList col1={businessCol1} isDesktop={true} />
      )}
      {dropdown === "Arts" && <SectionsList col1={artsCol1} isDesktop={true} />}
      {dropdown === "Lifestyle" && (
        <SectionsList
          col1={lifestyleCol1}
          col2={lifestyleCol2}
          isDesktop={true}
        />
      )}
      {dropdown === "Opinion" && (
        <SectionsList col1={opinionCol1} isDesktop={true} />
      )}
    </div>
  );
}

export default DropdownMenu;
