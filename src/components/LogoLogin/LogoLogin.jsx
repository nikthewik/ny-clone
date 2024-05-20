import style from "./LogoLogin.module.css";

function LogoLogin() {
  return (
    <a
      className={style.link}
      href="https://myaccount.nytimes.com/auth/login"
      target="_blank"
    >
      <svg className={style.logo} viewBox="0 0 20 20" fill="var(--clr-b1)">
        <path
          d="M14.2379 6C14.2379 8.20914 12.4471 10 10.2379 10C8.02878 10 6.23792 8.20914 6.23792 6C6.23792 3.79086 8.02878 2 10.2379 2C12.4471 2 14.2379 3.79086 14.2379 6Z"
          fill="var(--clr-b1)"
        ></path>
        <path
          d="M16.2355 14.5714C16.2371 14.5477 16.2379 14.5239 16.2379 14.5C16.2379 13.1193 13.5516 12 10.2379 12C6.92421 12 4.23792 13.1193 4.23792 14.5C4.23792 14.5239 4.23872 14.5477 4.24032 14.5714H4.23792V18H16.2379V14.5714H16.2355Z"
          fill="var(--clr-b1)"
        ></path>
      </svg>
    </a>
  );
}

export default LogoLogin;
