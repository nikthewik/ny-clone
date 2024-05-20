import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import getTopStories from "../services/apiTopStories";

import Mobile from "../components/MediaQueriesComponents/Mobile";
import Desktop from "../components/MediaQueriesComponents/Desktop";

import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";
import Main from "../components/Main/Main";
import ArticlePreview from "../components/ArticlePreview/ArticlePreview";
import MobileNavBottom from "../components/MobileNavBottom/MobileNavBottom";
import DesktopNavBottom from "../components/DesktopNavBottom/DesktopNavBottom";
import Footer from "../components/Footer/Footer";

function Homepage() {
  useEffect(() => {
    document.title = `The New York Clone`;
  }, []);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["topStories"],
    queryFn: getTopStories,
  });

  if (isPending) return <Spinner />;
  if (isError) return <Error error={error} isError={true} />;

  const { results } = data.data;

  return (
    <>
      <Main>
        <div className="container">
          {results.map((article, index) => (
            <ArticlePreview key={article.uri} article={article} index={index} />
          ))}
        </div>
      </Main>

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

export default Homepage;
