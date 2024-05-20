import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import getSearchArticles from "../services/apiSearch";

import Mobile from "../components/MediaQueriesComponents/Mobile";
import Desktop from "../components/MediaQueriesComponents/Desktop";

import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";
import Main from "../components/Main/Main";
import FormWithFilters from "../components/FormWithFilters/FormWithFilters";
import SearchResult from "../components/SearchResult/SearchResult";
import MobileNavBottom from "../components/MobileNavBottom/MobileNavBottom";
import DesktopNavBottom from "../components/DesktopNavBottom/DesktopNavBottom";
import Footer from "../components/Footer/Footer";

function Search() {
  const { search } = useParams();

  useEffect(() => {
    document.title = `Search - The New York Clone`;
  }, []);

  const sortBy = useSelector((state) => state.query.sort);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["search", search, sortBy],
    queryFn: () => getSearchArticles(search, sortBy),
  });

  if (isPending) return <Spinner />;
  if (isError) return <Error error={error} isError={true} />;

  const { response } = data.data;

  return (
    <>
      <FormWithFilters hits={response.meta.hits} />

      <Main>
        {response.docs.map((article) => {
          return <SearchResult article={article} key={article.uri} />;
        })}
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

export default Search;
