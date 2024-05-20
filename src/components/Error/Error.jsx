import { Link } from "react-router-dom";
import { useEffect } from "react";

import style from "./Error.module.css";

import Mobile from "../MediaQueriesComponents/Mobile";
import Desktop from "../MediaQueriesComponents/Desktop";

import Main from "../Main/Main";
import DividerLine from "../DividerLine/DividerLine";
import MobileNavBottom from "../MobileNavBottom/MobileNavBottom";
import DesktopNavBottom from "../DesktopNavBottom/DesktopNavBottom";
import Footer from "../Footer/Footer";

function Error({ isError = false, error = null }) {
  useEffect(() => {
    if (isError)
      document.title = `Ops! Something went wrong... - The New York Clone`;
  }, [isError]);

  return (
    <>
      <Main>
        <div className={style.container}>
          <span className={style.error}>{isError ? "OPS!" : "404"}</span>
          <h1 className={style.title}>
            {isError ? "Something went wrong" : "Page Not Found"}
          </h1>
          {isError ? (
            <p>{error.message + "."}</p>
          ) : (
            <>
              <p>We could not find the page you were looking for.</p>
              <p>Please check the URL and try again</p>
              <p>or return to the home page.</p>
            </>
          )}
          <Link to="/home" className={style.button}>
            BACK TO HOME
          </Link>
        </div>

        <DividerLine />
      </Main>

      {isError && (
        <>
          <Mobile>
            <MobileNavBottom />
          </Mobile>
          <Desktop>
            <DesktopNavBottom />
          </Desktop>
          <Footer />
        </>
      )}
    </>
  );
}

export default Error;
