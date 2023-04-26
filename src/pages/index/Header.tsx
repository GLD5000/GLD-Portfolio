import { useState } from "react";
import GldSvg from "src/icons/GldSvg";
import HamburgerMenu from "./header/HamburgerMenu";
import NavBar from "./header/NavBar";

const className =
  "hidden   flex-row gap-2 text-txt-main-dk hover:text-txt-main hover:underline hover:decoration-current hover:underline-offset-2 hover:transition focus:text-txt-main focus:underline focus:decoration-current  focus:underline-offset-2 focus:transition dark:text-txt-main dark:hover:text-txt-main-dk dark:focus:text-txt-main-dk sm:flex";

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
    <header className="sticky top-0 left-0 right-0 z-[996] grid h-fit w-screen flex-shrink-0 flex-grow-0 grid-cols-frAutoFr content-center  bg-brand">
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
        <HamburgerMenu
          toggleColourTheme={toggleColourTheme}
          colourTheme={colourTheme}
          show={showMenu}
        />
      </div>
    </header>
  );
}
