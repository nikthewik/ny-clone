import style from "./NavList.module.css";

function NavList({ children, isBottom = false }) {
  return (
    <nav className={isBottom ? style.navBottom : style.nav}>
      <ul className={isBottom ? style.listBottom : style.list}>{children}</ul>
    </nav>
  );
}

export default NavList;
