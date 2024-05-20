import { Outlet } from "react-router-dom";

import Mobile from "../MediaQueriesComponents/Mobile";
import Desktop from "../MediaQueriesComponents/Desktop";

import MobileHeader from "../MobileHeader/MobileHeader";
import DesktopHeader from "../DesktopHeader/DesktopHeader";

function AppLayout() {
  return (
    <>
      <Mobile>
        <MobileHeader />
      </Mobile>

      <Desktop>
        <DesktopHeader />
      </Desktop>

      <Outlet />
    </>
  );
}

export default AppLayout;
