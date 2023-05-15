import Link from "next/link";
import { useIntersectionProviderContext } from "@/utilities/contexts/IntersectionProvider";
import SvgButtonNew from "../../../elements/SvgButtonNew";
import MoonSvg from "../../../icons/MoonSvg";
import SunSvg from "../../../icons/SunSvg";

const linkColours =
  "text-black hover:text-white hover:underline hover:decoration-current hover:underline-offset-2 hover:transition focus:text-white focus:underline focus:decoration-current  focus:underline-offset-2 focus:transition ";

function getDarkToggleIcon(isDark: boolean) {
  const wrapper = (
    <div className=" aspect-square h-6">
      {isDark ? <SunSvg /> : <MoonSvg />}{" "}
    </div>
  );
  return wrapper;
}

export default function HamburgerMenu({
  toggleColourTheme,
  colourTheme,
  show,
}: {
  toggleColourTheme: () => void;
  colourTheme: boolean;
  show: boolean;
}) {
  const { currentSection } = useIntersectionProviderContext();

  return (
    <nav
      className={`relative ${!show && "hidden"} ${
        show && "flex sm:hidden"
      } h-8 w-screen min-w-[214px]   justify-center gap-2 border-y border-white p-1 text-sm`}
    >
      {/* <ExternalLink
        colourClasses={linkColours}
        layoutClasses="text-center items-center flex flex-col w-16"
        link="https://www.linkedin.com/in/garethlouisdevlin/"
        content={[
          <LinkedInSvg key="svg" />,
          <p key="text" className="m-0 md:inline">
            LinkedIn
          </p>,
        ]}
      />
      <ExternalLink
        colourClasses={linkColours}
        layoutClasses="text-center items-center flex flex-col w-16"
        link="https://github.com/GLD5000"
        content={[
          <GitHubSvg key="svg" />,
          <p key="text" className="m-0 md:inline">
            GitHub
          </p>,
        ]}
      /> */}
      <Link
        href="#about"
        className={`m-0 block h-fit w-20 p-0 text-center font-bold text-black  ${
          currentSection === "about" ? "text-white" : ""
        }`}
      >
        About
      </Link>
      <Link
        href="#projects"
        className={`m-0 block h-fit w-20 p-0 text-center font-bold text-black  ${
          currentSection === "projects" ? "text-white" : ""
        }`}
      >
        Projects
      </Link>

      <SvgButtonNew
        showTextIn
        clickFunction={toggleColourTheme}
        reverse={false}
        id="colour-theme-button-secondary"
        name="Dark Mode Button"
        className="rounded text-xs"
        buttonClasses={`flex flex-col w-7 h-7 text-base xs:hidden ${linkColours} self-start`}
        textElement={null}
        svg={getDarkToggleIcon(colourTheme)}
      />
    </nav>
  );
}
