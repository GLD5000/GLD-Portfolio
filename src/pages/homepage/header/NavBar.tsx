import { useIntersectionProviderContext } from "@/utilities/contexts/IntersectionProvider";
// import Link from "next/link";
import SvgButtonNew from "../../../elements/SvgButtonNew";
import HamburgerSvg from "../../../icons/HamburgerSvg";
import MoonSvg from "../../../icons/MoonSvg";
import SunSvg from "../../../icons/SunSvg";

const linkColours =
  "text-black hover:text-white hover:underline hover:decoration-current hover:underline-offset-2 hover:transition focus:text-white focus:underline focus:decoration-current  focus:underline-offset-2 focus:transition ";

function getDarkToggleIcon(isDark: boolean) {
  const wrapper = (
    <div className=" text:inherit my-auto aspect-square h-6">
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
    <nav className="relative flex h-16 flex-wrap items-center justify-center gap-8 ">
      {/* <ExternalLink
        colourClasses={linkColours}
        mediaVisibility="hidden sm:flex"
        link="https://www.linkedin.com/in/garethlouisdevlin/"
        content={[
          <LinkedInSvg key="svg" />,
          <p key="text" className="m-0 hidden md:inline">
            LinkedIn
          </p>,
        ]}
      />
      <ExternalLink
        colourClasses={linkColours}
        mediaVisibility="hidden sm:flex"
        link="https://github.com/GLD5000"
        content={[
          <GitHubSvg key="svg" />,
          <p key="text" className="m-0 hidden md:inline">
            GitHub
          </p>,
        ]}
      /> */}

      <a
        className={`m-0 hidden font-bold text-black sm:inline ${
          currentSection === "about" ? "text-white" : ""
        }`}
        href="#about"
      >
        About
      </a>

      <a
        className={`m-0 hidden font-bold text-black sm:inline ${
          currentSection === "projects" ? "text-white" : ""
        }`}
        href="#projects"
      >
        Projects
      </a>

      {/* <Link
        href="/about"
        className={`m-0 hidden font-bold text-black sm:inline ${
          currentSection === "about" ? "text-white" : ""
        }`}
      >
        About
      </Link>
      <Link
        href="/#projects"
        className={`m-0 hidden font-bold text-black sm:inline ${
          currentSection === "projects" ? "text-white" : ""
        }`}
      >
        Projects
      </Link> */}

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
