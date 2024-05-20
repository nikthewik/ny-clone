import style from "./ArticlePreview.module.css";

import DividerLine from "../DividerLine/DividerLine";

function ArticlePreview({ article, index }) {
  const { url, title, abstract, byline: author, multimedia, section } = article;

  if (section === "admin" || section === "") return;
  if (title === "" || abstract === "" || url === "") return;

  return (
    <>
      <a href={url} target="_blank">
        <section className={style.section}>
          <div>
            <p className={index === 0 ? style.frontTitle : style.title}>
              {title}
            </p>
            <p className={style.subtitle}>{abstract}</p>
            <p className={style.author}>{author}</p>
          </div>

          <div>
            <figure className={style.imgContainer}>
              <img
                className={style.img}
                src={multimedia?.at(0).url}
                alt={
                  multimedia === null
                    ? "No image"
                    : `${multimedia?.at(0).type}: ${multimedia?.at(0).caption}`
                }
              />
              <figcaption className={style.copyright}>
                <span>{multimedia?.at(0).copyright}</span>
              </figcaption>
            </figure>
          </div>
        </section>
      </a>
      <DividerLine />
    </>
  );
}

export default ArticlePreview;
