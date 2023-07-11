"use client";

import SvgButtonNew from "@/elements/SvgButtonNew";
import MoonSvg from "@/icons/MoonSvg";
import SunSvg from "@/icons/SunSvg";
import { usePortfolioStore } from "@/zustand/zustand";

export default function DarkModeBtn() {
  const colourTheme = usePortfolioStore((state) => state.darkTheme);
  const toggleColourTheme = usePortfolioStore((state) => state.toggleDarkTheme);

  return (
    <SvgButtonNew
      showTextIn={undefined}
      clickFunction={toggleColourTheme}
      reverse={false}
      id="colour-theme-button-hero"
      name="Dark Mode Button"
      className="relative rounded text-xs"
      buttonClasses="w-fit h-fit overflow-visible flex-col flex text-current pb-4 pt-1 ml-auto mt-3 px-2"
      textElement={
        <span className="absolute bottom-0 w-fit rounded-t-none bg-transparent text-current ">
          {colourTheme ? "Light" : "Dark"}
        </span>
      }
      svg={getDarkToggleIcon(colourTheme)}
    />
  );
}

function getDarkToggleIcon(isDark: boolean) {
  const wrapper = (
    <div className=" text:inherit my-auto aspect-square h-6">
      {isDark ? <SunSvg /> : <MoonSvg />}{" "}
    </div>
  );
  return wrapper;
}
