import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <p className={style.copyright}>
          {`Clone of `}
          <a
            className={style.link}
            href="https://www.nytimes.com"
            target="_blank"
          >
            The New York Times
          </a>
          .
        </p>

        <p className={style.copyright}>
          {` Created by `}
          <a
            className={style.link}
            href="https://github.com/nikthewik"
            target="_blank"
          >
            Nicola Pavoni
          </a>
          {` for educational purposes.`}
        </p>
      </div>

      <p
        className={style.copyright}
      >{`© All rights reserved to The New York Times Company.`}</p>
    </footer>
  );
}

export default Footer;
