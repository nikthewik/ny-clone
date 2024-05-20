import { useDispatch, useSelector } from "react-redux";
import { toggleHamburger } from "../../features/toggle/toggleSlice";

import style from "./ButtonHamburger.module.css";

function ButtonHamburger() {
  const isOpen = useSelector((state) => state.toggle.isHamburgerOpen);
  const dispatch = useDispatch();

  return (
    <button
      className={style.button}
      onClick={() => dispatch(toggleHamburger(isOpen))}
    >
      <svg className={style.hamburger} viewBox="0 0 16 16">
        <rect x="1" y="3" fill="var(--clr-b1)" width="14" height="2"></rect>
        <rect x="1" y="7" fill="var(--clr-b1)" width="14" height="2"></rect>
        <rect x="1" y="11" fill="var(--clr-b1)" width="14" height="2"></rect>
      </svg>
    </button>
  );
}

export default ButtonHamburger;
