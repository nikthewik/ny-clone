import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import capitalizeWord from "../helpers/capitalizeWord";
import getSectionArticles from "../services/apiSection";

import Mobile from "../components/MediaQueriesComponents/Mobile";
import Desktop from "../components/MediaQueriesComponents/Desktop";

import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";
import Main from "../components/Main/Main";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import DividerLine from "../components/DividerLine/DividerLine";
import ArticlePreview from "../components/ArticlePreview/ArticlePreview";
import MobileNavBottom from "../components/MobileNavBottom/MobileNavBottom";
import DesktopNavBottom from "../components/DesktopNavBottom/DesktopNavBottom";
import Footer from "../components/Footer/Footer";

function Section() {
  const { section } = useParams();

  useEffect(() => {
    document.title = `${capitalizeWord(section)} - The New York Clone`;
  }, [section]);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["section", section],
    queryFn: () => getSectionArticles(section),
    queries: { enabled: !!section },
  });

  if (isPending) return <Spinner />;
  if (isError) return <Error error={error} isError={true} />;

  const { results, section: sectionTitle } = data.data;

  return (
    <>
      <Main>
        <SectionTitle sectionTitle={sectionTitle} />
        <DividerLine />

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

export default Section;
