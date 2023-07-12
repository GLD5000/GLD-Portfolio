"use client";

import { useState } from "react";
import { Roboto_Mono as customGoogleFont } from "next/font/google";
import GldSvg from "src/icons/GldSvg";
import { useIntersectionProviderContext } from "@/utilities/intersectionObserver/IntersectionProvider";
import { usePortfolioStore } from "@/zustand/zustand";
import HamburgerMenu from "./HamburgerMenu";
import NavBar from "./NavBar";

const customFont = customGoogleFont({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export default function Header() {
  const colourTheme = usePortfolioStore((state) => state.darkTheme);
  const toggleColourTheme = usePortfolioStore((state) => state.toggleDarkTheme);

  const [showMenu, setShowMenu] = useState(true);
  const { hasScrolled } = useIntersectionProviderContext();
  if (!hasScrolled) {
    return (
      <div className="sticky top-0 left-0 right-0 z-[996] grid min-h-[88px] w-screen">
        {" "}
      </div>
    );
  }

  function toggleShowMenu() {
    setShowMenu((state) => !state);
  }

  return (
    <header className="sticky top-0 left-0 right-0 z-[996] grid h-fit w-full flex-shrink-0 flex-grow-0  bg-primary">
      <div className=" mx-auto flex w-body-sm min-w-body max-w-body flex-wrap items-center justify-between sm:w-body ">
        <div>
          <a href="#hero" className="flex flex-wrap items-center gap-2">
            <GldSvg
              wrapperClasses="h-12 square fill-white"
              svgClasses=" drop-shadow-logo"
            />
            <h2
              className={`${customFont.className} px-1 text-3.5xl text-white text-shadow-title`}
            >
              Portfolio
            </h2>
          </a>
        </div>
        <NavBar
          toggleColourTheme={toggleColourTheme}
          colourTheme={colourTheme}
          toggleMenu={toggleShowMenu}
        />
      </div>
      <HamburgerMenu
        toggleColourTheme={toggleColourTheme}
        colourTheme={colourTheme}
        show={showMenu}
      />
    </header>
  );
}
