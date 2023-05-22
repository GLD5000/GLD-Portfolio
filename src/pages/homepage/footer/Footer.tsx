import LinkedInSvg from "@/icons/LinkedInSvg";
import GitHubSvg from "src/icons/GitHubSvg";
import GldSvg from "src/icons/GldSvg";

export default function Footer() {
  return (
    <footer
      id="footer"
      className=" flex flex-shrink-0 flex-grow-0 flex-col flex-wrap items-center gap-2 bg-secondary-light py-1 text-sm dark:bg-secondary"
    >
      <a
        className=" flex flex-row gap-2 text-txt-mid hover:text-txt-main hover:underline hover:decoration-current hover:underline-offset-2 hover:transition focus:text-txt-main focus:underline focus:decoration-current  focus:underline-offset-2 focus:transition dark:text-txt-mid-dk dark:hover:text-txt-main-dk dark:focus:text-txt-main-dk"
        href="https://gld-portfolio.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <GldSvg wrapperClasses=" pointer-events-none h-7 w-7 fill-current" />
        Part of the GLD Portfolio
      </a>

      <a
        className=" flex  w-fit flex-row gap-2 text-txt-mid hover:text-txt-main hover:underline hover:decoration-current hover:underline-offset-2 hover:transition focus:text-txt-main focus:underline focus:decoration-current  focus:underline-offset-2 focus:transition dark:text-txt-mid-dk dark:hover:text-txt-main-dk dark:focus:text-txt-main-dk"
        href="https://github.com/GLD5000"
        target="_blank"
        rel="noreferrer"
      >
        <div className="m-auto h-6 w-6">
          <GitHubSvg />
        </div>
        GLD5000 on GitHub
      </a>
      <a
        className=" flex  w-fit flex-row gap-2 text-txt-mid hover:text-txt-main hover:underline hover:decoration-current hover:underline-offset-2 hover:transition focus:text-txt-main focus:underline focus:decoration-current  focus:underline-offset-2 focus:transition dark:text-txt-mid-dk dark:hover:text-txt-main-dk dark:focus:text-txt-main-dk"
        href="https://www.linkedin.com/in/garethlouisdevlin/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="m-auto h-6 w-6">
          <LinkedInSvg />
        </div>
        Gareth L Devlin on LinkedIn
      </a>

      <p className=" mb-0 w-fit text-txt-mid dark:text-txt-mid-dk">
        🄯 2023 Gareth L Devlin
      </p>
    </footer>
  );
}
