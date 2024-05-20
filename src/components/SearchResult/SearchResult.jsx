import style from "./SearchResult.module.css";

import calcReadingTime from "../../helpers/calcReadingTime";

function SearchResult({ article }) {
  const {
    section_name: section,
    headline,
    snippet,
    byline,
    word_count,
    web_url: url,
    pub_date,
    print_page: page,
    multimedia,
  } = article;

  const { kicker, main: title, print_headline: printTitle } = headline;
  const { original: author } = byline;

  const date = new Date(pub_date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  function findMultimedia(multimedia) {
    const index = multimedia?.find((img) => img.subtype === "articleInline");

    if (!index || index === undefined) return multimedia?.at(0);
    if (index) return multimedia?.at(index);
  }

  return (
    <div className={style.articleContainer}>
      <span className={style.date}>{date}</span>
      <div className={style.articleInfoContainer}>
        <div className={style.textContainer}>
          <p className={style.section}>{section}</p>
          <a href={url} target="_blank">
            <h4 className={style.title}>
              {kicker && `${kicker}: `}
              {title}
            </h4>
            <p className={style.snippet}>{snippet}</p>
            <p className={style.author}>{author}</p>

            {!word_count ? null : (
              <p className={style.readingTime}>{`${calcReadingTime(
                word_count
              )} MIN READ`}</p>
            )}

            {printTitle && (
              <>
                <div className={style.divider}></div>
                <div className={style.printContainer}>
                  <span className={style.printEdition}>PRINT EDITION</span>
                  {`${printTitle} | ${date}${
                    page === undefined ? `` : `, Page ${page}`
                  }`}
                </div>
              </>
            )}
          </a>
        </div>

        <figure className={style.imgContainer}>
          {multimedia.length === 0 || (
            <img
              className={style.img}
              src={`https://static01.nyt.com/${
                findMultimedia(multimedia)?.url
              }`}
              alt={`${findMultimedia(multimedia)?.type}: ${
                findMultimedia(multimedia)?.caption || title
              }`}
            />
          )}
        </figure>
      </div>
    </div>
  );
}

export default SearchResult;
