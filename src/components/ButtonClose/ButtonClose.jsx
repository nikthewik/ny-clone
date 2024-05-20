import { useDispatch, useSelector } from "react-redux";
import { toggleHamburger } from "../../features/toggle/toggleSlice";

import style from "./ButtonClose.module.css";

function ButtonClose() {
  const isOpen = useSelector((state) => state.toggle.isHamburgerOpen);
  const dispatch = useDispatch();

  return (
    <button
      className={style.close}
      onClick={() => dispatch(toggleHamburger(isOpen))}
    >
      <svg width="16" height="16" viewBox="0 0 15 15">
        <g fill="none">
          <g>
            <path
              d="M2 2l11 11"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="square"
              stroke="var(--clr-b1)"
              id="Vector"
            ></path>
            <path
              d="M13 2L2 13"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="square"
              stroke="var(--clr-b1)"
            ></path>
          </g>
        </g>
      </svg>
    </button>
  );
}

export default ButtonClose;
