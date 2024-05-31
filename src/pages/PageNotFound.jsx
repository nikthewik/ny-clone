import { Helmet } from "react-helmet";

import Mobile from "../components/MediaQueriesComponents/Mobile";
import Desktop from "../components/MediaQueriesComponents/Desktop";

import Error from "../components/Error/Error";
import MobileNavBottom from "../components/MobileNavBottom/MobileNavBottom";
import DesktopNavBottom from "../components/DesktopNavBottom/DesktopNavBottom";
import Footer from "../components/Footer/Footer";

function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>404: Page Not Found - The New York Clone</title>
      </Helmet>

      <Error />

      <Mobile>
        <MobileNavBottom />
      </Mobile>

      <Desktop>
        <DesktopNavBottom />
      </Desktop>

      <Footer />
    </>
  );
}

export default PageNotFound;
