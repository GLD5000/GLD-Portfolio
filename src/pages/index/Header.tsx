import GitHubSvg from "@/icons/GitHubSvg";
import LinkedInSvg from "@/icons/LinkedInSvg";
import MoonSvg from "@/icons/MoonSvg";
import SunSvg from "@/icons/SunSvg";
import { useState } from "react";
import SvgButton from "src/elements/SvgButton";
import GldSvg from "src/icons/GldSvg";
import HamburgerMenu from "./header/HamburgerMenu";
import NavBar from "./header/NavBar";

const className =
  "hidden   flex-row gap-2 text-txt-main-dk hover:text-txt-main hover:underline hover:decoration-current hover:underline-offset-2 hover:transition focus:text-txt-main focus:underline focus:decoration-current  focus:underline-offset-2 focus:transition dark:text-txt-main dark:hover:text-txt-main-dk dark:focus:text-txt-main-dk sm:flex";

function getDarkToggleIcon(isDark: boolean) {
  const wrapper = (
    <div className=" h-6 w-6">{isDark ? <SunSvg /> : <MoonSvg />} </div>
  );
  return wrapper;
}

export default function Header({
  toggleColourTheme,
  colourTheme,
}: {
  toggleColourTheme: () => void;
  colourTheme: boolean;
}) {
  const [showMenu, setShowMenu] = useState(false);
  function toggleShowMenu() {
    setShowMenu((state) => !state);
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-[999] grid h-fit w-screen flex-shrink-0 flex-grow-0 grid-cols-frAutoFr content-center  bg-brand">
      <div className=" col-start-2 flex w-body-sm min-w-body max-w-body flex-wrap items-center justify-between sm:w-body  ">
        <div>
          <a
            href="https://gld-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-wrap items-center gap-2"
          >
            <GldSvg
              wrapperClasses="h-12  square fill-white"
              svgClasses=" drop-shadow-logo"
            />
            <h2 className="    px-1 font-title text-3.5xl tracking-widest text-white text-shadow-title">
              Portfolio
            </h2>
          </a>
        </div>
        <NavBar
          toggleColourTheme={toggleColourTheme}
          colourTheme={colourTheme}
          toggleMenu={toggleShowMenu}
        />
        {/* <div className="relative flex h-16 flex-wrap items-center justify-center gap-8 py-2">
          <a
            className={className}
            href="https://www.linkedin.com/in/garethlouisdevlin/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInSvg />
            <p className="m-0 hidden md:inline">LinkedIn</p>
          </a>
          <a
            className={className}
            href="https://github.com/GLD5000"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubSvg />
            <p className="m-0 hidden md:inline">GitHub</p>
          </a>
          <SvgButton
            svgWrapperClasses="pointer-events-none h-6 w-6"
            text={colourTheme ? "Light" : "Dark"}
            clickFunction={toggleColourTheme}
            type={colourTheme ? "sun" : "moon"}
            showText
            reverse={false}
            id="colour-theme-button"
            name="Dark Mode Button"
            className="rounded text-xs"
            buttonClasses="w-fit h-fit flex flex-col overflow-hidden hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:transition py-1 px-2"
            svgClasses="stroke-current fill-current stroke-2 dark:hover:fill-none"
            svg={getDarkToggleIcon(colourTheme)}
          />
        </div> */}
        <HamburgerMenu
          toggleColourTheme={toggleColourTheme}
          colourTheme={colourTheme}
          show={showMenu}
        />
      </div>
    </header>
  );
}
