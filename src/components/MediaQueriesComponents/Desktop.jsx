import { useMediaQuery } from "react-responsive";

function Desktop({ children }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
}

export default Desktop;
