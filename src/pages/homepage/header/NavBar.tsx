import { useIntersectionProviderContext } from "@/utilities/intersectionObserver";
import SvgButtonNew from "../../../elements/SvgButtonNew";
import HamburgerSvg from "../../../icons/HamburgerSvg";
import MoonSvg from "../../../icons/MoonSvg";
import SunSvg from "../../../icons/SunSvg";

const linkColours =
  "text-txt-mid hover:text-txt-main dark:text-txt-mid-dk dark:hover:text-txt-main-dk hover:underline hover:decoration-current hover:underline-offset-2 hover:transition focus:text-txt-main dark:focus:text-txt-main-dk focus:underline focus:decoration-current  focus:underline-offset-2 focus:transition ";

function getDarkToggleIcon(isDark: boolean) {
  const wrapper = (
    <div className=" text:inherit my-auto aspect-square h-5">
      {isDark ? <SunSvg /> : <MoonSvg />}{" "}
    </div>
  );
  return wrapper;
}

export default function NavBar({
  toggleColourTheme,
  colourTheme,
  toggleMenu,
}: {
  toggleColourTheme: () => void;
  toggleMenu: () => void;
  colourTheme: boolean;
}) {
  const { currentSection } = useIntersectionProviderContext();
  return (
    <nav className="relative flex h-12 flex-wrap content-center items-center justify-center gap-8 ">
      <a
        className={`m-0 hidden sm:inline ${
          currentSection === "projects"
            ? "font-bold text-txt-main dark:text-txt-main-dk"
            : "text-txt-mid dark:text-txt-mid-dk"
        }`}
        href="#projects"
      >
        Projects
      </a>
      <a
        className={`m-0 hidden sm:inline ${
          currentSection === "about"
            ? "font-bold text-txt-main dark:text-txt-main-dk"
            : "text-txt-mid dark:text-txt-mid-dk"
        }`}
        href="#about"
      >
        About
      </a>

      <a
        className={`m-0 hidden sm:inline ${
          currentSection === "contact"
            ? "font-bold text-txt-main dark:text-txt-main-dk"
            : "text-txt-mid dark:text-txt-mid-dk"
        }`}
        href="#contact"
      >
        Contact
      </a>

      <div className="flex flex-wrap gap-1">
        <SvgButtonNew
          showTextIn={undefined}
          clickFunction={toggleColourTheme}
          reverse={false}
          id="colour-theme-button"
          name="Dark Mode Button"
          className="relative rounded text-xs"
          buttonClasses={`w-fit h-fit overflow-visible flex-col hidden xs:flex ${linkColours} pb-4 pt-1 mt-3 px-2`}
          textElement={
            <span className="absolute bottom-0 w-full rounded-t-none bg-transparent text-inherit ">
              {colourTheme ? "Light" : "Dark"}
            </span>
          }
          svg={getDarkToggleIcon(colourTheme)}
        />
        <SvgButtonNew
          showTextIn={undefined}
          clickFunction={toggleMenu}
          reverse={false}
          id="colour-theme-button-main"
          name="Dark Mode Button"
          className="rounded text-xs"
          buttonClasses={`block sm:hidden ${linkColours}`}
          textElement={null}
          svg={<HamburgerSvg />}
        />
      </div>
    </nav>
  );
}
