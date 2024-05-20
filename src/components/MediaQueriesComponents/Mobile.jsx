import { useMediaQuery } from "react-responsive";

function Mobile({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  return isMobile ? children : null;
}

export default Mobile;
